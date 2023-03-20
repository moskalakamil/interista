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
  width: 100%;
  display: flex;
  font-style: normal;
  font-size: 12px;
  line-height: 30px;
  align-items: center;
  justify-content: space-between;
  margin-top: 45px;
  padding-inline: 40px;

  img {
    width: 70px;
    height: 70px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 85px;
  }

  div {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 20px;
      font-weight: 700;
    }

    p {
      font-size: 18px;
      color: ${({ theme }) => theme.colors.gray};
    }
  }
`;
