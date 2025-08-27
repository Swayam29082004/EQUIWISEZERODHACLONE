import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode }) => {
  const { closeBuyWindow } = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleOrderSubmit = () => {
    axios
      .post("http://localhost:3001/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: mode,
      })
      .then((response) => {
        console.log("Order placed:", response.data);
        closeBuyWindow();
      })
      .catch((error) => {
        console.error("Error placing order:", error);
      });
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  const isBuyMode = mode === "BUY";
  const buttonClass = isBuyMode ? "btn-blue" : "btn-red";
  const buttonText = isBuyMode ? "Buy" : "Sell";

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="window-header">
        <h3>{buttonText} {uid}</h3>
      </div>
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>
      <div className="buttons">
        <span>Margin required ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
        <div>
          <button className={`btn ${buttonClass}`} onClick={handleOrderSubmit}>
            {buttonText}
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
