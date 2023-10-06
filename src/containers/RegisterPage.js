import React from 'react';
import "./loginpage.css";
import picture1 from "../static/images/cpr02.webp";

import {
    Row,
  } from "antd";

const RegisterPage = () => (
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
          marginTop:'5%',
          position: "absolute",
        }}
      >
    <div className="container">
    <h2>Sign Up</h2>
    <form action="">

      <div className="form-item">
        
        <input type="text" name="user" id="name" placeholder="Full Name"/>
      </div>
      <div className="form-item">
        <input type="text" name="user" id="email" placeholder="Email"/>
      </div>
      <div className="form-item">
        <input type="text" name="user" id="phoneno" placeholder="Phone No"/>
      </div>
      <div className="form-item">
        <input type="text" name="user" id="address" placeholder="Address"/>
      </div>
      <div className="form-item">
        <input type="password" name="pass" id="pass" placeholder="Password"/>
      </div>
      <div className="form-item">
        <input type="password" name="pass" id="pass" placeholder=" Confirm Password"/>
      </div>
      

      <button type="submit">Register</button>

      <p style={{marginBottom:10}}>Already Have a Account ? <a href="#"> Log in</a></p>

    </form>
  </div>
      </Row>
    </div>
    </>
);
export default RegisterPage;