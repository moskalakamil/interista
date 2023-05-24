import SectionTitle from "../../../common/SectionTitle";
import styled from "styled-components";
import Article from "./Article";
import { Article as ArticleT } from "@/types/article";
import { useTranslation } from "next-i18next";

interface Props {
  articles: ArticleT[];
}

const Articles = ({ articles }: Props) => {
  const { t } = useTranslation("common");

  return (
    <Container id="articles">
      <SectionTitle>{t("articles")}</SectionTitle>
      <ul>
        {articles.map((article) => (
          <Article {...article} key={article.id} />
        ))}
      </ul>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    justify-items: center;
    /* grid-gap: 10px; */
    border-width: 2px 0 0 2px;
  }
`;

export default Articles;
