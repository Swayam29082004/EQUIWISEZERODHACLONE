import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="mt-5 text-center p-3">
        <h1>Technology</h1>
        <h3 className="text-muted mt-3 fs-4">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="mt-3 mb-5">
          Check out our{" "}
          <a className="text-decoration-none" href="/products">
            investment offerings
            <i className="fa fa-arrow-right ms-2" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
