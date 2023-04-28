import { screen } from "@testing-library/react";
import { renderWithWrapper } from "../../jest/setupTests";
import Nav from "@/components/common/Header/Nav";

describe("Nav component", () => {
  const links = [
    { link: "home", name: "Home" },
    { link: "about", name: "About" },
    { link: "contact", name: "Contact" },
  ];

  it("should render all links", () => {
    renderWithWrapper(<Nav links={links} />);

    const linkElements = screen.getAllByRole("link");

    expect(linkElements).toHaveLength(links.length);
    linkElements.forEach((link, i) => {
      expect(link.getAttribute("href")).toBe(`/${links[i].link}`);
    });
  });
});
