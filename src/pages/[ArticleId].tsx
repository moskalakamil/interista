import Main from "@/components/article/Index";
import Aside from "@/components/article/aside/Index";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import styled from "styled-components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface IProps {
  title: string;
  description: string;
  author: {
    id: string;
    name: string;
    email: string;
  };
}

const Article = ({ title, description, author }: IProps) => {
  return (
    <ContainerDivStyled>
      <Main title={title} description={description} />
      <Aside author={author} />
    </ContainerDivStyled>
  );
};

export default Article;

export const getStaticPaths: GetStaticPaths = async ({ locales }: any) => {
  const articles = ["1", "2"];

  const paths: any[] = [];

  articles.map((article) => {
    locales.map((locale: string) => {
      return paths.push({
        params: { ArticleId: `${article}` },
        locale,
      });
    });
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
  const description =
    "Commodo ea nulla pariatur aliqua magna incididunt cupidatat sunt. Ullamco sint deserunt nisi laboris. Adipisicing ullamco anim veniam enim aliquip laborum excepteur exercitation eu nulla cupidatat ex sint. Culpa consequat irure ipsum. Exercitation ad ipsum ut non veniam aute et excepteur. Officia officia qui eiusmod dolor ut eiusmod velit ullamco sunt ea Lorem. Dolor labore adipisicing velit. Ullamco tempor cillum dolor velit nisi sunt occaecat. Ad nostrud culpa enim eiusmod. Irure duis proident laboris cillum consectetur sunt. Esse consectetur ea est aute exercitation. Sunt sunt mollit culpa aliquip aliqua. Duis anim voluptate nisi commodo duis pariatur est cupidatat labore ullamco elit consectetur sint consequat ad. Aliqua ad magna eiusmod. Officia veniam est laboris consectetur quis laboris nostrud dolor. Amet excepteur nulla reprehenderit veniam eiusmod adipisicing eu occaecat cupidatat. Eiusmod incididunt ad amet excepteur excepteur minim in qui veniam voluptate. Duis aliqua nisi duis nulla reprehenderit incididunt. Nisi incididunt ad ad enim aute aliquip quis tempor voluptate voluptate ipsum occaecat irure quis deserunt. Sit dolore id ex ea dolore cillum ea veniam in incididunt pariatur sit officia incididunt. Non excepteur nostrud occaecat officia Lorem. Non esse anim laborum ea non mollit est duis consequat commodo consectetur sit velit. Incididunt commodo non cupidatat. Magna adipisicing dolore consequat consequat sint magna aute cupidatat dolor consectetur exercitation labore adipisicing culpa nostrud. Voluptate elit est dolore. Pariatur dolore cillum quis aliquip.";
  return {
    props: {
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      description,
      author: {
        id: "1233211231233",
        name: "Ziobro Kurwa",
        email: "ziobro1@gmail.com",
      },
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

const ContainerDivStyled = styled.div`
  display: flex;
`;
