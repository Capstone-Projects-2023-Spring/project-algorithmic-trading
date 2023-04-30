import React from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import "./style/about.css";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="about"
    >
      <Outlet />
      <h1>About</h1>
    </motion.div>
  );
}