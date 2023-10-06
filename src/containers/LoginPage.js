import React from "react";
import {
  Row,
} from "antd";

import RegisterPage from './RegisterPage';
import "./loginpage.css";
import picture1 from "../static/images/cpr02.webp";


const LoginPage = () => (
  <>
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <img
        style={{
          height: "100vh",
          width: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        }}
        src={picture1}
        alt=""
      ></img>
      <Row
        style={{
          height: 300,
          width: 500,
          margin: "10%",
          position: "absolute",
        }}
      >
    <div className="container">
    <h2>Sign In</h2>
    <form action="">

      <div className="form-item">
        <input type="text" name="user" id="user" placeholder="Email or Username"/>
      </div>

      <div className="form-item">
        <input type="password" name="pass" id="pass" placeholder="password"/>
      </div>

      <button type="submit">LOGIN</button>

      <p style={{marginBottom:10}}>New User ? <a href="#"> Create an Account</a></p>

    </form>
  </div>
      </Row>
    </div>
  </>
);
export default LoginPage;
