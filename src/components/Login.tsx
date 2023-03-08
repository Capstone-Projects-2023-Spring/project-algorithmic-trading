import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./style/login.css";

const Login = () => {
  const navigate = useNavigate();
  return (
    <form action="#" method="" className="form">
      <h1>login</h1>
      <input type="text" name="" placeholder="Username" />
      <input type="password" name="" placeholder="Password" />
      <div className="subreg">
        <input type="submit" value="Register" className="register" />
        <input type="submit" value="Login" className="login" />
      </div>
    </form>
  );
};

export default Login;
