import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Markdown from "markdown-to-jsx";
import { Article } from "@/types/article";

const Main = ({ title, content, avatarUrl }: Article) => {
  const avatar = avatarUrl ?? `/articles/default.jpeg`;

  return (
    <MainStyled>
      <Header />
      <h1>{title}</h1>
      <div className="articleImage">
        <img src={avatar} alt="article image" />
      </div>
      <p className="header">Nagłówek</p>
      <Markdown>{content}</Markdown>
    </MainStyled>
  );
};

export default Main;

const MainStyled = styled.main`
  width: calc(100% - 450px);
  margin: 0 15%;
  & > div.articleImage {
    position: relative;
    width: 100%;
    height: 30vw;
    max-height: 500px;
    margin: 5% 0;
    border-radius: 5px;
  }
  .header {
    position: relative;
    font-size: 20px;
    padding-bottom: 15px;
    margin-bottom: 18px;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 70%;
      height: 2px;
      background-color: #07235027;
    }
  }
`;
