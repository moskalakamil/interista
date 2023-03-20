import React from "react";
import styled from "styled-components";

interface Props {
  author: {
    id: string;
    name: string;
    email: string;
  };
}

const Author = ({ author }: Props) => {
  const { id, name, email } = author;
  return (
    <StyledCategory>
      <img src="/footer.png" alt="" />
      <div>
        <h1>{name}</h1>
        <p>Autor/ka</p>
      </div>
    </StyledCategory>
  );
};

export default Author;

const StyledCategory = styled.div`
  display: flex;
  float: right;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 30px;
  margin-right: 55px;
  align-items: center;

  img {
    width: 84px;
    height: 85px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 85px;
    margin-right: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;
