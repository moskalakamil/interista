import ArticleItem from "@/types/ArticleItem";
import styled from "styled-components";
import RecommendedArticle from "./RecommendedArticle";

interface Props {
  articles: ArticleItem[];
}

const Recommended = ({ articles }: Props) => {
  return (
    <StyledRecommended>
      <h2>Zobacz więcej</h2>
      <ul>
        {articles.map(({ title, description }, index) => (
          <RecommendedArticle
            key={index}
            title={title}
            description={description}
          />
        ))}
      </ul>
    </StyledRecommended>
  );
};

const StyledRecommended = styled.div`
  margin-inline: 32px;
  padding-inline: 64px;

  h2 {
    text-align: center;
    width: 100%;
    border-bottom: 1px solid black;
    height: 42px;
    margin-bottom: 24px;
  }
`;

export default Recommended;
