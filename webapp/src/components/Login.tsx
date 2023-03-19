import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { motion, spring } from "framer-motion";
import {login} from '../services/authentication'
import "./style/login.css";

const form = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const children = {
  hidden: { y: 5 },
  visible: {
    y: 0,

    transition: {
      type: "spring",
      stiffness: 450,
    },
  },
};

const Login = ({ setLoggedIn }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <motion.form
      variants={form}
      initial="hidden"
      animate="visible"
      action="#"
      method=""
      onSubmit={() => login(username, password, setLoggedIn)}
      className="form"
    >
      <motion.h1 variants={children}>login</motion.h1>
      <motion.input
        variants={children}
        type="text"
        name=""
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <motion.input
        variants={children}
        type="password"
        name=""
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
