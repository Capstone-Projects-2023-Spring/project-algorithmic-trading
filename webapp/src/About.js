import React from "react";
import { Outlet } from "react-router-dom";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <Outlet />
      <h1>About</h1>
    </div>
  );
};

export default About;
