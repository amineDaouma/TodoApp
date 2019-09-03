import { sum } from "./math";
import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("Examining the syntax of Jest tests", () => {
  it("sums numbers", () => {
    expect(sum(1, 2)).toEqual(3);
    expect(sum(2, 2)).toEqual(4);
  });
});

describe("First React Component test with Enzyme", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
});
