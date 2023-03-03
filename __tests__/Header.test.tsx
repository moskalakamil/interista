import "@testing-library/jest-dom";
import { renderWithWrapper } from "../jest/setupTests";
import Header from "@/components/landing/Header/Index";

describe("Home", () => {
  const header = renderWithWrapper(<Header />).getByTestId("header");

  it("Home -> change height after scroll", () => {
    const padding = window.scrollY > 0 ? "0vh" : "2vh";

    expect(header.style.paddingTop === padding);
  });

  it("Home -> change background on scroll", () => {
    const color = window.scrollY > 0 ? "white" : "transparent";

    expect(header.style.background === color);
  });
});
