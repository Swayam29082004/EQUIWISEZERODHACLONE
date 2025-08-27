import React, { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const res = await axios.get("http://localhost:3005/allPositions");
        const positions = res.data.map((stock) => {
          const curValue = stock.price * stock.qty;
          const isProfit = curValue - stock.avg * stock.qty >= 0;
          return {
            ...stock,
            curValue,
            profitLoss: curValue - stock.avg * stock.qty,
            isProfit,
            dayClass: stock.isLoss ? "loss" : "profit",
            profClass: isProfit ? "profit" : "loss",
          };
        });
        setAllPositions(positions);
      } catch (err) {
        console.error("Error fetching positions:", err);
      }
    };

    fetchPositions();
  }, []);

  // Calculate totals dynamically
  const totalInvestment = allPositions.reduce(
    (acc, stock) => acc + stock.avg * stock.qty,
    0
  );
  const currentValue = allPositions.reduce(
    (acc, stock) => acc + stock.price * stock.qty,
    0
  );
  const profitLoss = currentValue - totalInvestment;
  const profitLossPercent =
    totalInvestment > 0 ? (profitLoss / totalInvestment) * 100 : 0;

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.map((stock, index) => (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{stock.curValue.toFixed(2)}</td>
                <td className={stock.profClass}>{stock.profitLoss.toFixed(2)}</td>
                <td className={stock.dayClass}>{stock.day}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>{totalInvestment.toFixed(2)}</h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>{currentValue.toFixed(2)}</h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>
            {profitLoss.toFixed(2)} ({profitLossPercent.toFixed(2)}%)
          </h5>
          <p>P&amp;L</p>
        </div>
      </div>
    </>
  );
};

export default Positions;
