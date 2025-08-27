import React, { useState, useEffect } from "react";
import axios from "axios";
import VerticalGraph from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    const symbols = ["AAPL", "TSLA", "INFY", "MSFT", "GOOGL", "AMZN"]; // Added more stocks

    const fetchData = async () => {
      try {
        const data = [];
        for (const symbol of symbols) {
          const res = await axios.get(
            `http://localhost:3005/market-data/${symbol}`
          );
          const stock = res.data.data[0];
          data.push({
            name: stock.symbol,
            price: stock.close,
            avg: stock.close,
            qty: 10, // example quantity
            day: (stock.close - stock.open).toFixed(2),
            net: 0,
            isLoss: stock.close - stock.open < 0,
          });
        }
        setAllHoldings(data);
      } catch (err) {
        console.error("Error fetching market data:", err);
      }
    };

    fetchData();
  }, []); // symbols are inside, no warning

  // Chart.js data
  const labels = allHoldings.map((stock) => stock.name);
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { 
      legend: { position: "top" }, 
      title: { display: true, text: "Stock Holdings Chart" } 
    },
  };

  // Totals
  const totalInvestment = allHoldings.reduce((acc, stock) => acc + stock.avg * stock.qty, 0);
  const currentValue = allHoldings.reduce((acc, stock) => acc + stock.price * stock.qty, 0);
  const profitLoss = currentValue - totalInvestment;
  const profitLossPercent = totalInvestment > 0 ? (profitLoss / totalInvestment) * 100 : 0;

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>{(curValue - stock.avg * stock.qty).toFixed(2)}</td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
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
          <h5>{profitLoss.toFixed(2)} ({profitLossPercent.toFixed(2)}%)</h5>
          <p>P&amp;L</p>
        </div>
      </div>

      <VerticalGraph data={data} options={options} />
    </>
  );
};

export default Holdings;
