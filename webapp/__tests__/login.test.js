import Login from "../src/components/Login";
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { HashRouter } from "react-router-dom";

describe("Login", () => {
  test("renders login div", () => {
    render(
      <HashRouter>
        <Login />
      </HashRouter>
    );
    screen.getAllByText(/Login/);
    screen.getByText(/Register/);
    screen.getByPlaceholderText(/Username/);
    screen.getByPlaceholderText(/Password/);
  });
});
