import React from "react";

import "./LoginForm.css";
import SignUpForm from "../SignUp/SignUpForm";
import { useState } from "react";
function LoginForm({ handleLogin, handleChange, username, password }) {
  const [isSignUpBtnClicked, setIsSignUpBtnClicked] = useState(false);
  const handleSignUpButtonInLoginPage = (event) => {
    event.preventDefault();
    setIsSignUpBtnClicked((prev) => !prev);
  };

  const condRendering = () => {
    if (isSignUpBtnClicked) {
      return (
        <SignUpForm
          handleSignUpButtonInLoginPage={handleSignUpButtonInLoginPage}
        />
      );
    } else {
      return (
        <form className="login--form">
          <h2 className="login--form--header">Login Page</h2>
          <div className="login--email--field">
            <input
              type="text"
              id="username"
              name="Username"
              value={username}
              onChange={handleChange}
              placeholder="Username"
            />
          </div>

          <div className="login--password--field">
            <input
              type="password"
              id="password"
              name="Password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
            />
          </div>

          <button type="submit" className="login--btn" onClick={handleLogin}>
            Login
          </button>

          <button
            className="login--sign--up--btn"
            value="SignUp"
            onClick={handleSignUpButtonInLoginPage}
          >
            Sign Up
          </button>
        </form>
      );
    }
  };
  return <>{condRendering()}</>;
}

export default LoginForm;
