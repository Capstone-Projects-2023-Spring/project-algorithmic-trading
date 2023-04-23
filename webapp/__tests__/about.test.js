import About from "../src/components/About";
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

describe("About", () => {
  test("renders about header", () => {
    render(<About />);
  });
});
