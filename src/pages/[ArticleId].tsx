import Main from "@/components/article/Index";
import Aside from "@/components/article/aside/Index";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import styled from "styled-components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getAllPublishedArticles } from "lib/getAllPublishedArticles";
import { getSinglePost } from "lib/getSinglePost";
import { Article as ArticleT } from "@/types/article";

const Article = (article: ArticleT) => {
  const { author } = article;

  return (
    <ContainerDivStyled>
      <Main {...article} />
      <Aside {...author} />
    </ContainerDivStyled>
  );
};

export default Article;

export const getStaticPaths: GetStaticPaths = async ({ locales }: any) => {
  const paths: { params: { ArticleId: string }; locale: string }[] = [];
  const articles = await getAllPublishedArticles();

  articles.forEach(({ id }: ArticleT) => {
    locales.forEach((locale: string) => {
      paths.push({ params: { ArticleId: id }, locale });
    });
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  if (!params || typeof params.ArticleId !== "string") return { props: {} };
  if (!locale) return { props: {} };

  const article = await getSinglePost(params.ArticleId);

  return {
    props: {
      ...article,
      ...(await serverSideTranslations(locale, ["common"])), // TODO: quite dangerous, because what if this promise will be rejected? :)
    },
  };
};

const ContainerDivStyled = styled.div`
  display: flex;
`;
