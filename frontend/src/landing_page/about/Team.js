import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>
      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
            alt="Nikhil Kamath"
          />
          <h4 className="mt-3">Nikhil Kamath</h4>
          <h6>Co-founder & CFO</h6>
          <div></div>
        </div>
        <div className="col-6 p-3">
          <p>
            An astute and experienced investor, Nikhil Kamath heads financial
            planning at Zerodha. He co-founded Zerodha along with his brother
            Nithin in 2010.
          </p>
          <p>
            He is also the co-founder of True Beacon, an asset management
            company, and Gruhas, a real estate investment and prop tech company.
            He launched the podcast "WTF is" and signed The Giving Pledge in
            2023.
          </p>
          <p>
            Connect on{" "}
            <a href="/" style={linkStyle}>Homepage</a> /{" "}
            <a href="/" style={linkStyle}>TradingQnA</a> /{" "}
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              X
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "rgba(112, 107, 107, 1)",
};

export default Team;
