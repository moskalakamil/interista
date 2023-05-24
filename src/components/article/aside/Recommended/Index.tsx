import { useTranslation } from "next-i18next";
import styled from "styled-components";
import RecommendedArticle from "./RecommendedArticle";
import { Article } from "@/types/article";

interface Props {
  articles: Article[];
}

const Recommended = ({ articles }: Props) => {
  const { t } = useTranslation("common");

  return (
    <StyledRecommended>
      <h2>{t("seeMore")}</h2>
      <ul>
        {articles.map((article, index) => (
          <RecommendedArticle key={index} {...article} />
        ))}
      </ul>
    </StyledRecommended>
  );
};

const StyledRecommended = styled.div`
  h2 {
    text-align: center;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
    height: 42px;
    font-size: 20px;
    margin-bottom: 24px;
    margin-top: 30px;
  }

  ul {
    padding-inline: 40px;
  }
`;

export default Recommended;
