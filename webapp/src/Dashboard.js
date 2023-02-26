import React from "react";
import { Outlet } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Outlet />
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;