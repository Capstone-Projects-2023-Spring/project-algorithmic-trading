import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Blog from "./components/Blog";
import Post from "./components/Post";
import Dashboard from "./components/Dashboard.tsx";
import Login from "./components/Login.tsx";
import Logout from "./components/Logout";
import Register from "./components/Register";
import Simulation from "./components/Simulation";
import Candle from "./components/Candle";
import Portfolio from "./components/Portfolio";
import Search from "./components/social/Search";
import Friends from "./components/social/Friends";
import FriendRequests from "./components/social/FriendRequests";
import Menu from "./components/Menu";
import bull from "./bull.png";
import br from "./triangles.svg";
import "./style.css";
import "./app.css";
import { isLoggedIn, logout } from "./services/authentication";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());

  const isActive = sessionStorage.activeSession;
  if (!isActive) {
    logout();
    setLoggedIn(false);
  }

  const Nav = () => {
    return (
      <div>

        <img className="background" src={br} alt="Background" />

        {loggedIn ? (
          <div className="nav">
            <Link className="logo" to="/candle">
              Tradester <img src={bull} alt="Logo" />{" "}
            </Link>
            <div className="links">
              <Link to="/candle">Stocks</Link>
              <Link to="/simulation">Simulation</Link>
              <Link
                to="/portfolio"
                state={{
                  username: localStorage.getItem("username"),
                  isSelf: true,
                }}
              >
                Portfolio
              </Link>
              <Link to="/search">Social</Link>
              <Link to="/logout">Logout</Link>
            </div>
          </div>

        ) : (

          <div className="nav">
            <Link className="logo" to="/login">
              Tradester <img src={bull} alt="Logo" />{" "}
            </Link>
          </div>

        )}
        <div className="menu">
          <Menu />
        </div>
      </div>
    );
  };

  return (
    <>
      <Nav />
      <div className="overlay">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/post" element={<Post />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/login"
            element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          />
          <Route
            path="/logout"
            element={<Logout setLoggedIn={setLoggedIn} />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/simulation"
            element={<Simulation loggedIn={loggedIn} />}
          />
          <Route path="/candle" element={<Candle />} />
          <Route
            path="/portfolio"
            element={
              <Portfolio
                username={localStorage.getItem("username")}
                isSelf={true}
              />
            }
          />
          <Route path="/search" element={<Search />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/friend-requests" element={<FriendRequests />} />
        </Routes>
      </div>
    </>
  );
}

const HomePage = () => {

  let isActive = sessionStorage.activeSession

  return (
    <div className="home">
      <h1>Welcome to Tradester</h1>
      {sessionStorage.activeSession == "true" ? (
        <Link className="viewdash" to="/candle">
          View Dashboard
        </Link>
      ) : (
        <Link className="viewdash" to="/login">
          Log In
        </Link>
      )}

    </div>
  );
};
