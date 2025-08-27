import React from "react";
import Auth from "./Auth";

function Signup() {
  return <Auth isSignup={true} />; // Pass prop to show signup form
}

export default Signup;
    