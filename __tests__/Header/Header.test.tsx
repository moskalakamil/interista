import "@testing-library/jest-dom";
import "jest-styled-components";

import { renderWithWrapper } from "../../jest/setupTests";
import { fireEvent } from "@testing-library/react";

import Header from "@/components/common/Header/Index";

describe("Header", () => {
  it("renders <Header /> component", () => {
    renderWithWrapper(<Header />);
  });

  it("Header -> change height after scroll", () => {
    fireEvent.scroll(window, { target: { scrollY } });

    const header = renderWithWrapper(<Header />).getByTestId("header");
    const padding = window.scrollY > 0 ? "0vh" : "2vh";

    expect(header).toHaveStyleRule("padding-top", padding);
  });

  it("Header -> change background on scroll", () => {
    fireEvent.scroll(window, { target: { scrollY } });

    const header = renderWithWrapper(<Header />).getByTestId("header");
    const color = window.scrollY > 0 ? "white" : "transparent";

    expect(header).toHaveStyleRule("background", color);
  });
});
