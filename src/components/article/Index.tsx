import React from "react";
import styled from "styled-components";
import Header from "./Header";

interface IProps {
  title: string;
  description: string;
}

const Main = ({ title, description }: IProps) => {
  return (
    <MainStyled>
      <Header />
      <h1>{title}</h1>
      <img src="/footer.png" />
      {/* <p className="header">Naglowek</p> */}
      <p>{description}</p>
    </MainStyled>
  );
};

export default Main;

const MainStyled = styled.main`
  width: calc(100% - 450px);
  margin: 0 15%;
  & > img {
    width: 100%;
    height: auto;
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
