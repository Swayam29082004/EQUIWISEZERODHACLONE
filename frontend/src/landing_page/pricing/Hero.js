import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center py-5 border-bottom">
        <div className="col-12">
          <h1>Charges</h1>
          <h3 className="text-muted fs-5 mt-3">
            List of all charges and taxes
          </h3>
        </div>
        <div className="row p-5 mt-5 text-center">
          <div className="col-4 p-4">
            <img src="media/images/pricingEquity.svg" alt="Equity delivery illustration" />
            <h1 className="fs-3">Free equity delivery</h1>
            <p className="text-muted">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹0 brokerage.
            </p>
          </div>
          <div className="col-4 p-4">
            <img src="media/images/intradayTrades.svg" alt="Intraday and F&O trading illustration" />
            <h1 className="fs-3">Intraday and F&O trades</h1>
            <p className="text-muted">
              Flat ₹20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-4 p-4">
            <img src="media/images/pricingMF.svg" alt="Mutual funds illustration" />
            <h1 className="fs-3">Free mutual funds</h1>
            <p className="text-muted">
              All direct mutual fund investments are absolutely free — ₹0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
