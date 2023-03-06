import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./style/login.css";

const form = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const children = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Login = () => {
  const navigate = useNavigate();
  return (
    <motion.form
      variants={form}
      initial="hidden"
      animate="visible"
      action="#"
      method=""
      className="form"
    >
      <motion.h1 variants={children}>login</motion.h1>
      <motion.input
        variants={children}
        type="text"
        name=""
        placeholder="Username"
      />
      <motion.input
        variants={children}
        type="password"
        name=""
        placeholder="Password"
      />
      <motion.div variants={children} className="subreg">
        <input type="submit" value="Register" className="register" />
        <input type="submit" value="Login" className="login" />
      </motion.div>
    </motion.form>
  );
};

export default Login;
