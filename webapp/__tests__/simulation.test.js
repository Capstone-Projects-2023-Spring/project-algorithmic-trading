import Simulation from "../src/components/Simulation";
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import fetchMock from "jest-fetch-mock";

describe("Simulation", () => {
  test("renders Simulation header", () => {
    render(
      <HashRouter>
        <Simulation loggedIn={true} />
      </HashRouter>
    );
  });
});
