import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import About from "./components/About";
import Blog from "./components/Blog";
import Post from "./components/Post";
import Dashboard from "./components/Dashboard.tsx";
import Login from "./components/Login.tsx";
import Logout from "./components/Logout";
import Register from "./components/Register";
import Simulation from "./components/Simulation";
import Candle from "./components/Candle";
import Portfolio from "./components/Portfolio";
import bull from "./bull.png";
import "./style.css";
import "./app.css";

import { isLoggedIn } from "./services/authentication";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());

  const Nav = () => {
    return (
      <div>
        <div className="nav">
          <Link className="logo" to="/candle">
            Tradester <img src={bull} alt="Logo" />{" "}
          </Link>
          <div className="links">
            <Link to="/about">About</Link>
            <Link to="/simulation">Simulation</Link>
            <Link to="/portfolio">Porfolio</Link>   {/* This should be added to loggedIn when ready */}
            {
              loggedIn ? <Link to="/logout">Logout</Link> : <Link to="/login">Login</Link>
            }
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post" element={<Post />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
        <Route path="/logout" element={<Logout setLoggedIn={setLoggedIn}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/simulation" element={<Simulation loggedIn={loggedIn}/>} />
        <Route path="/candle" element={<Candle />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
}

const HomePage = () => {
  return (
    <div className="home">
      <h1>Welcome to tradester</h1>
      <Link to="/candle">View Dashboard</Link>
    </div>
  );
};
