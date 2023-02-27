import SectionTitle from "../../../common/SectionTitle";
import styled from "styled-components";
import Article from "./Article";

const dummyArticles = [
  {
    name: "Tomasz Hajto Pierdolnoł babe na pasach",
    time: "10 lipca 2020",
    tag: "Gorący piłkazyk",
    id: 1,
  },
  {
    name: "Tomasz Hajto Pierdolnoł babe na pasach",
    time: "10 lipca 2020",
    tag: "Gorący piłkazyk",
    id: 2,
  },
  {
    name: "Tomasz Hajto Pierdolnoł babe na pasach",
    time: "10 lipca 2020",
    tag: "Gorący piłkazyk",
    id: 3,
  },
  {
    name: "Tomasz Hajto Pierdolnoł babe na pasach",
    time: "10 lipca 2020",
    tag: "Gorący piłkazyk",
    id: 4,
  },
  {
    name: "Tomasz Hajto Pierdolnoł babe na pasach",
    time: "10 lipca 2020",
    tag: "Gorący piłkazyk",
    id: 5,
  },
  {
    name: "Tomasz Hajto Pierdolnoł babe na pasach",
    time: "10 lipca 2020",
    tag: "Gorący piłkazyk",
    id: 6,
  },
];

const Articles = () => {
  return (
    <Container>
      <SectionTitle>Artykuły</SectionTitle>
      <ul>
        {dummyArticles.map(({ name, time, tag, id }) => (
          <Article key={id} name={name} time={time} tag={tag} id={id} />
        ))}
      </ul>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  ul {
    display: flex;
    flex-wrap: wrap;
    border-width: 2px 0 0 2px;
  }
`;

export default Articles;
