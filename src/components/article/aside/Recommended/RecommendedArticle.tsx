import { Article } from "@/types/article";
import styled from "styled-components";

const RecommendedArticle = ({ title, content }: Article) => {
  return (
    <StyledRecommendedArticle>
      <h3>{title}</h3>
      <p>{content}</p>
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

  h3 {
    font-size: 20px;
    text-overflow: ellipsis;
    max-width: 200px;
    overflow: hidden;
    white-space: nowrap;
  }

  p {
    color: ${({ theme }) => theme.colors.gray};
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
