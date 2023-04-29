import { Link } from "react-router-dom";
import React, { useState, setState } from "react";
import menu from "../menu.svg";
import "./style/menu.css";

export const handleOpen = () => {
  setOpen(!open);
};

export default function Menu({ loggedIn }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button onClick={handleOpen} className="menubutton">
        <img img src={menu} alt="Menu" />
      </button>
      {open ? (
        <div onClick={handleOpen} className="linkdropdown">
          <Link to="/about">About</Link>
          <Link to="/simulation">Simulation</Link>
          <Link
            to="/portfolio"
            state={{
              username: localStorage.getItem("username"),
              isSelf: true,
            }}
          >
            Portfolio
          </Link>{" "}
          <Link to="/search">Social</Link>
          {/* This should be added to loggedIn when ready */}
          {loggedIn ? (
            <Link to="/logout">Logout</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      ) : null}
    </div>
  );
}
