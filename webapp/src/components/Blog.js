import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => navigate("/blog/post")}>login</button>
      <Outlet />
    </div>
  );
};

export default Blog;
