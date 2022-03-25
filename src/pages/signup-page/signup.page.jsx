import React from "react";

import { Link } from "react-router-dom";

import { Animated } from "react-animated-css";
import SignUp from "../../components/signup-component/signup.component";
import "./signup.scss";

const SignUpPage = () => {
  return (
    <div className="signup-page">
      <Animated animationIn="fadeInUp" isVisible={true}>
        <SignUp />
        <p>
          Already have an account?{" "}
          <Link to="/signin" className="login-link">
            Sign In
          </Link>{" "}
        </p>
      </Animated>
    </div>
  );
};

export default SignUpPage;
