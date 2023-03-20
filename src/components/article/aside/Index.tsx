import React from "react";
import styled from "styled-components";
import Ads from "./Ads";
import Author from "./Author";
import Recommended from "./Recommended/Index";

interface Props {
  author: {
    id: string;
    name: string;
    email: string;
  };
}

const articles = [
  {
    title: "Article Title no 1 - experimental :)",
    description: "This is the best description even for the article no 1",
  },
  {
    title: "Article Title no 2 - experimental :)",
    description: "This is the best description even for the article no 2",
  },
  {
    title: "Article Title no 3 - experimental :)",
    description: "This is the best description even for the article no 3",
  },
  {
    title: "Article Title no 4 - experimental :)",
    description: "This is the best description even for the article no 4",
  },
  {
    title: "Article Title no 5 - experimental :)",
    description: "This is the best description even for the article no 5",
  },
];

const Aside = ({ author }: Props) => {
  return (
    <DivStyled>
      <Author author={author} />
      <Recommended articles={articles} />
      <Ads />
    </DivStyled>
  );
};

export default Aside;

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${({ theme }) => theme.colors.gray};
`;
