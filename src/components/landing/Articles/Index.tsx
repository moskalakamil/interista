import SectionTitle from "../../../common/SectionTitle";
import styled from "styled-components";
import Article from "./Article";

const dummyArticles = [
  {
    name: "Niesamowity sukces drużyny!",
    time: "15 lipca 2020",
    tag: "Gorący piłkazyk",
    id: 1,
  },
  {
    name: "Niestety porażka",
    time: "10 czerwca 2022",
    tag: "Gorący piłkazyk",
    id: 2,
  },
  {
    name: "Piękny debiut młodego zawodnika",
    time: "10 lipca 2020",
    tag: "Gorący piłkazyk",
    id: 3,
  },
  {
    name: "Sędzia ewidętnie się pomylił",
    time: "10 lipca 2020",
    tag: "Gorący piłkazyk",
    id: 4,
  },
  {
    name: "Kibice przygotowali piękną oprawę",
    time: "10 lipca 2020",
    tag: "Gorący piłkazyk",
    id: 5,
  },
  {
    name: "Wygrana na swoim terenie.",
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
