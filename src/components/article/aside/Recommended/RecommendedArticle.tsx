import ArticleItem from "@/types/ArticleItem";
import styled from "styled-components";

const RecommendedArticle = ({ title, description }: ArticleItem) => {
  return (
    <StyledRecommendedArticle>
      <h3>{title}</h3>
      <p>{description}</p>
    </StyledRecommendedArticle>
  );
};

const StyledRecommendedArticle = styled.li`
  position: relative;
  margin-bottom: 24px;
  line-height: 16px;
  list-style: none;
  padding-left: 24px;
  line-height: 1.5;

  p {
    color: #9f9f9f;
  }

  ::before {
    content: "";
    position: absolute;
    display: block;
    width: 8px;
    height: 8px;
    background: #9f9f9f;
    border-radius: 50%;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
`;

export default RecommendedArticle;
