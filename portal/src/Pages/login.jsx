import { useState } from "react";
import "./login.css";
import emailIcon from "../assets/email.png";
import passwordIcon from "../assets/password.png";

const Login = () => {
  const [action, setAction] = useState("Login");

  return (
    <div className="login">
      <div className="filler-image"></div>
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={emailIcon} alt="" />
            <input type="email" placeholder="Enter your E-Mail" />
          </div>
          <div className="input">
            <img src={passwordIcon} alt="" />
            <input type="password" placeholder="Enter Password" />
          </div>
          {action === "Login" ? (
            <div></div>
          ) : (
            <>
              <div className="input">
                <img src={passwordIcon} alt="" />
                <input type="password" placeholder="Confirm Password" />
              </div>
              <div className="input">
                <img src={passwordIcon} alt="" />
                <input type="password" placeholder="Enter OTP" />
              </div>
              <div className="generate-otp">Generate OTP</div>
            </>
          )}
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot-password">
            Forgot Password? <span>Click Here!</span>
          </div>
        )}
        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
