// LoginPage.js
import React from "react";
import { Login, LoginForm } from "react-admin";

const CustomLoginForm = props => (
  <div>
    <div style={{fontFamily: "monospace", marginLeft: '15px'}}>
      <p>Username: anthony@zappin.com</p>
      <p>Password: zappin</p>
    </div>
    <LoginForm {...props} />
  </div>
);

const CustomLoginPage = props => (
  <Login loginForm={<CustomLoginForm />} {...props} />
);

export default CustomLoginPage;
