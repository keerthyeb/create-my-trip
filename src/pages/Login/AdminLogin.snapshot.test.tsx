import React from "react";
import { render } from "@testing-library/react";
import AdminLogin from "./AdminLogin";

test("AdminLogin component matches snapshot", () => {
  const { asFragment } = render(<AdminLogin />);
  expect(asFragment()).toMatchSnapshot();
});
