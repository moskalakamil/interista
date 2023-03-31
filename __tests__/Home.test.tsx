import "@testing-library/jest-dom";
import Home from "../src/pages/index";
import { renderWithWrapper } from "../jest/setupTests";

const articles = [
  {
    id: "968164b8-d626-40f0-a824-610237fb4fdf",
    title: "jan paweł 2",
    content: "nie ma zdjec jeszcze",
    published: true,
    authorId: "03d342fb-7fa9-4b36-8c05-128235fa6e75",
    createdAt: "2023-03-31 12:52:59",
    updatedAt: "2023-03-31 12:52:59",
    author: {
      id: "03d342fb-7fa9-4b36-8c05-128235fa6e75",
      name: "Kacper",
      email: "kacper.adamczyk@b.pl",
    },
  },
];

describe("Home", () => {
  it("renders <Home /> component", () => {
    const { getByRole } = renderWithWrapper(<Home articles={[]} />);
    expect(getByRole("main")).toBeInTheDocument();
  });
  it("Check <Home /> component if there are props", () => {
    const { getByText } = renderWithWrapper(<Home articles={articles} />);
    expect(getByText("jan paweł 2")).toBeInTheDocument();
    expect(getByText("2023-03-31 12:52:59")).toBeInTheDocument();
  });
});
