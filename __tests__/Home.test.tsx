import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Home from "../src/pages/index";

describe("Home", () => {
  it("renders <Home /> component", () => {
    render(<Home />);
  });
});
