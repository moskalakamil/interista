import ArticleItem from "@/types/ArticleItem";
import { useTranslation } from "next-i18next";
import styled from "styled-components";
import RecommendedArticle from "./RecommendedArticle";

interface Props {
  articles: ArticleItem[];
}

const Recommended = ({ articles }: Props) => {
  const { t } = useTranslation("common");

  return (
    <StyledRecommended>
      <h2>{t("seeMore")}</h2>
      <ul>
        {articles.map(({ title, description }, index) => (
          <RecommendedArticle key={index} title={title} description={description} />
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
