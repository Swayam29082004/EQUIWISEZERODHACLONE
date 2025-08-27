import React from "react";

function Hero() {
  return (
    <div className="bg-light border-bottom" id="SupportHero">
      <div className="container">
        <div className="row justify-content-center py-5">
          <div className="col-md-10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h1 className="fw-normal mb-0">Support Portal</h1>
              <a href="/support/tickets" className="btn btn-primary">
                My tickets
              </a>
            </div>
            <div className="position-relative">
              <i
                className="fa fa-search position-absolute text-muted"
                style={{ top: "13px", left: "15px" }}
              ></i>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Eg: How do I open my account, How do I activate F&O..."
                style={{ paddingLeft: "40px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;