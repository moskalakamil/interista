import "@testing-library/jest-dom";
import Home from "../src/pages/index";
import { renderWithWrapper } from "../jest/setupTests";
import { parseDate } from "@/utils/parseDate";

const articles = [
  {
    id: "d9ee33b6-72c3-4544-97ef-f2fb5dfbed92",
    content:
      "Occaecat adipisicing minim culpa aliqua sunt velit dolore officia est sit consectetur. Magna occaecat veniam et nisi id. Occaecat adipisicing minim culpa aliqua sunt velit dolore officia est sit consectetur. Magna occaecat veniam et nisi id. Occaecat adipisicing minim culpa aliqua sunt velit dolore officia est sit consectetur. Magna occaecat veniam et nisi id. Occaecat adipisicing minim culpa aliqua sunt velit dolore officia est sit consectetur. Magna occaecat veniam et nisi id. Occaecat adipisicing minim culpa aliqua sunt velit dolore officia est sit consectetur. Magna occaecat veniam et nisi id. Occaecat adipisicing minim culpa aliqua sunt velit dolore officia est sit consectetur. Magna occaecat veniam et nisi id. Occaecat adipisicing minim culpa aliqua sunt velit dolore officia est sit consectetur. Magna occaecat veniam et nisi id. Occaecat adipisicing minim culpa aliqua sunt velit dolore officia est sit consectetur. Magna occaecat veniam et nisi id. Occaecat adipisicing minim culpa aliqua sunt velit dolore officia est sit consectetur. Magna occaecat veniam et nisi id. Occaecat adipisicing minim culpa aliqua sunt velit dolore officia est sit consectetur. Magna occaecat veniam et nisi id.",
    title: "Czy to wiadome ze to jest test?",
    createdAt: "2023-05-17T19:19:00.000Z",
    updatedAt: "2023-05-17T19:19:00.000Z",
    tags: [
      {
        id: "36842862-0322-4101-b016-b11cb1e6ff7b",
        name: "Example",
        color: "brown",
      },
      {
        id: "e930f4b1-aac5-42bf-b112-99e8cb2a25e2",
        name: "Dev",
        color: "green",
      },
      {
        id: "c970370c-b244-4265-8e66-5cb4b9f80b37",
        name: "Test",
        color: "orange",
      },
    ],
    author: {
      id: "notion%3A%2F%2Fdocs%2Fcreated_by_property",
      name: "Szymon Rybczak",
      email: "szymon.rybczak@gmail.com",
      avatarUrl:
        "https://lh5.googleusercontent.com/-y_XVzBXt0Gk/AAAAAAAAAAI/AAAAAAAAAAA/AKF05nB0d2SZ9apDO571WwmI0xbe2fL3rw/photo.jpg",
    },
    avatarUrl:
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/60314fe8-d601-44aa-968d-9554b08971a8/signal-2023-05-09-140256_004.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230517T192835Z&X-Amz-Expires=3600&X-Amz-Signature=9351802a21b6543937a9f5978850121985b3e1f58c5d7ac65f2d54217662e226&X-Amz-SignedHeaders=host&x-id=GetObject",
  },
];

describe("Home", () => {
  it("renders <Home /> component", () => {
    const { getByRole } = renderWithWrapper(<Home articles={[]} />);
    expect(getByRole("main")).toBeInTheDocument();
  });

  it("Check <Home /> component if there are props", () => {
    const { getByText } = renderWithWrapper(<Home articles={articles} />);
    expect(getByText(articles[0].title)).toBeInTheDocument();
    expect(
      getByText(parseDate(new Date(articles[0].createdAt)))
    ).toBeInTheDocument();
  });
});
