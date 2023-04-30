import { Link } from "react-router-dom";
import React, { useState, setState } from "react";
import menu from "../menu.svg";
import "./style/menu.css";
import { isLoggedIn } from "../services/authentication";

export const handleOpen = () => {
  setOpen(!open);
};

export default function Menu() {
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());
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
          <Link to="/candle">Stocks</Link>
          <Link to="/investment">Investment</Link>
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
      ) : null}
    </div>
  );
}
