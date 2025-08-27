import React from "react";

function UniverseSection() {
  return (
    <div className="container my-5">
      <div className="row text-center">
        <div className="col-12">
          <h2>The Zerodha Universe</h2>
          <p className="text-muted">
            Extend your trading and investment experience even further with our
            partner platforms.
          </p>
        </div>
      </div>

      <div className="row text-center mt-5">
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/zerodhaFundHouse.png"
            alt="Zerodha Fund House logo"
            style={{ height: "40px" }}
            className="mb-3"
          />
          <p className="small text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull logo"
            style={{ height: "40px" }}
            className="mb-3"
          />
          <p className="small text-muted">
            An options trading and analysis platform for both new and
            experienced traders, making derivatives simple.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/streakLogo.png"
            alt="Streak logo"
            style={{ height: "40px" }}
            className="mb-3"
          />
          <p className="small text-muted">
            A systematic trading platform to create, backtest, and deploy
            trading strategies live in the stock market without coding.
          </p>
        </div>
      </div>

      <div className="row text-center mt-4">
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            alt="smallcase logo"
            style={{ height: "40px" }}
            className="mb-3"
          />
          <p className="small text-muted">
            A thematic investing platform that helps you invest in diversified
            baskets of stocks or ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/tijori_finances.png"
            alt="Tijori logo"
            style={{ height: "40px" }}
            className="mb-3 img-zoom"
          />
          <p className="small text-muted">
            An investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto logo"
            style={{ height: "40px" }}
            className="mb-3"
          />
          <p className="small text-muted">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-7 mt-5 "
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup New
        </button>
      </div>
    </div>
  );
}

export default UniverseSection;
