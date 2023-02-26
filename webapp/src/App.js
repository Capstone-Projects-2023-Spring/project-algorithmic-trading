import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import "./style.css";
import About from "./About";
import Blog from "./Blog";
import Post from "./Post";
import Chart from "./Chart.tsx";
import bull from "/Users/guthriealbertson/vscode/project-algorithmic-trading/webapp/src/bull.png";

import "./app.css";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="about" element={<About />}></Route>
          <Route path="blog" element={<Blog />}>
            <Route path="post" element={<Post />}></Route>
          </Route>
          <Route index element={<HomePage />}></Route>
          <Route path="dashboard" element={<Chart />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
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
          <Link to="/blog">Login</Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
