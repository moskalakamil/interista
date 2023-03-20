import React from "react";
import styled from "styled-components";
import Ads from "./Ads";
import Author from "./Author";
import LastArticles from "./LastArticles";
interface Props {
  author: {
    id: string;
    name: string;
    email: string;
  };
}
const Aside = ({ author }: Props) => {
  console.log(author);
  return (
    <DivStyled>
      <Author author={author} />
      <LastArticles />
      <Ads />
    </DivStyled>
  );
};

export default Aside;

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
