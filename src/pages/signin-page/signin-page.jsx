import { Link } from 'react-router-dom';
import React from 'react';
import { Animated } from "react-animated-css";
import SignIn from '../../components/signin-component/signin.component';
import "./signin-page.styles.scss";

const SignInPage = () => {
  return (
    <div className="signin-page">
       <Animated animationIn="fadeInUp" isVisible={true}>
        <SignIn />
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="signup-link">
            Create.
          </Link>{" "}
      </p>
      </Animated>
      </div>
    
  );
}

export default SignInPage
