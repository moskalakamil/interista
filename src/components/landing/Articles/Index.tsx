import SectionTitle from "../../../common/SectionTitle";
import styled from "styled-components";
import Article from "./Article";
import { useEffect } from "react";
import { Post } from "@/types/posts";

interface Props {
  articles: Post[];
}

const Articles = ({ articles }: Props) => {
  return (
    <Container>
      <SectionTitle>Artykuły</SectionTitle>
      <ul>
        {articles.map((article) => (
          <Article
            name={article.title}
            time={article.createdAt.toString()}
            tag="Gorący piłkayk"
            id={article.id}
            key={article.id}
          />
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
