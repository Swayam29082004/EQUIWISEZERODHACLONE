import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 p-4">
          <img
            src={imageURL}
            alt={productName + " platform screenshot"}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 p-4">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="mb-4">
            <a href={tryDemo} style={{textDecoration:"none"}} className="me-4">
              Try Demo
            </a>
            <a href={learnMore} style={{textDecoration:"none"}}>Learn More</a>
          </div>
          <div>
            <a href={googlePlay}  className="me-2">
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Get it on Google Play"
              />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="Download on the App Store"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;