import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

import About from "./components/About";
import Blog from "./components/Blog";
import Post from "./components/Post";
import Dashboard from "./components/Dashboard.tsx";
import Login from "./components/Login.tsx";
import Simulation from "./components/Simulation";
import bull from "./bull.png";
import "./style.css";
import "./app.css";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route path="about" element={<About />}></Route>
            <Route path="blog" element={<Blog />}></Route>
            <Route path="post" element={<Post />}></Route>
          <Route index element={<HomePage />}></Route>
            <Route path="dashboard" element={<Dashboard />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="simulation" element={<Simulation />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const HomePage = () => {
  return (
    <div className="home">
      <h1>Welcome to tradester</h1>
      <Link to="/dashboard">View Dashboard</Link>
    </div>
  );
};

const Nav = () => {
  return (
    <div>
      <div className="nav">
        <Link className="logo" to="/dashboard">
          Tradester <img src={bull} alt="Logo" />{" "}
        </Link>
        <div className="links">
          <Link to="/about">About</Link>
          <Link to="/simulation">Simulation</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
