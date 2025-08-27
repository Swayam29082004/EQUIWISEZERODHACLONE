import React from "react";

function RightSection({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 p-4">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="mb-4">
            <a href={learnMore} style={{textDecoration:"none"}}>Learn More</a>
          </div>
        </div>
        <div className="col-md-6 p-4">
          <img
            src={imageURL}
            alt={productName + " platform screenshot"}
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;