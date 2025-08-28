import React from "react";

function Brokerage() {
  return (
    <div className="container mt-5">
      <div className="row text-center p-5 border-bottom border-top">
        <div className="col-6">
          <a
            href="/"
            className="text-decoration-none text-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="mb-0">Brokerage calculator</h3>
          </a>
        </div>
        <div className="col-6">
          <a href="#charges-list" className="text-decoration-none text-dark">
            <h3 className="mb-0">List of charges</h3>
          </a>
        </div>
      </div>

      <div id="charges-list" className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="mb-5">
            <h4 className="fw-normal">Charges for account opening</h4>
            <table className="table table-bordered mt-3 small">
              <thead>
                <tr>
                  <th>Type of account</th>
                  <th>Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Online account</td>
                  <td>Free</td>
                </tr>
                <tr>
                  <td>Offline account</td>
                  <td>Free</td>
                </tr>
                <tr>
                  <td>NRI account (offline only)</td>
                  <td>₹500</td>
                </tr>
                <tr>
                  <td>
                    Partnership, LLP, HUF, or Corporate accounts (offline only)
                  </td>
                  <td>₹500</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mb-5">
            <h4 className="fw-normal">Demat AMC (Annual Maintenance Charge)</h4>
            <table className="table table-bordered mt-3 small">
              <thead>
                <tr>
                  <th>Value of holdings</th>
                  <th>AMC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Up to ₹4 lakh</td>
                  <td>Free*</td>
                </tr>
                <tr>
                  <td>₹4 lakh - ₹10 lakh</td>
                  <td>₹100 per year, charged quarterly*</td>
                </tr>
                <tr>
                  <td>Above ₹10 lakh</td>
                  <td>₹300 per year, charged quarterly</td>
                </tr>
              </tbody>
            </table>
            <p className="text-muted" style={{ fontSize: "0.8rem" }}>
              * Lower AMC is applicable only if the account qualifies as a Basic
              Services Demat Account (BSDA).
            </p>
          </div>

          <div className="mb-5">
            <h4 className="fw-normal">Charges explained</h4>
            <div className="mt-4">
              <h5 className="fw-normal fs-6">
                Securities/Commodities transaction tax (STT/CTT)
              </h5>
              <p className="text-muted small">
                Tax by the government when transacting on the exchanges. Charged
                on both buy and sell sides for equity delivery, and only on the
                selling side for intraday or F&O.
              </p>
            </div>
            <div className="mt-4">
              <h5 className="fw-normal fs-6">Transaction/Turnover Charges</h5>
              <p className="text-muted small">
                Charged by exchanges (NSE, BSE, MCX) on the value of your
                transactions.
              </p>
            </div>
            <div className="mt-4">
              <h5 className="fw-normal fs-6">
                DP (Depository participant) charges
              </h5>
              <p className="text-muted small">
                ₹15.34 per scrip is charged when stocks are sold from your Demat
                account, irrespective of quantity.
              </p>
            </div>
            <div className="mt-4">
              <h5 className="fw-normal fs-6">Stamp charges</h5>
              <p className="text-muted small">
                Charges by the Government of India as per the Indian Stamp Act
                of 1899 for transacting on stock exchanges.
              </p>
            </div>
            <div className="mt-4">
              <h5 className="fw-normal fs-6">GST</h5>
              <p className="text-muted small">
                Tax levied by the government on the services rendered. 18% of
                (brokerage + SEBI charges + transaction charges).
              </p>
            </div>
            <div className="mt-4">
              <h5 className="fw-normal fs-6">SEBI Charges</h5>
              <p className="text-muted small">
                Charged at ₹10 per crore + GST by the Securities and Exchange
                Board of India for regulating the markets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
