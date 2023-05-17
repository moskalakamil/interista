import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Author } from "@/types/article";

const Author = ({ id, name, email, avatarUrl }: Author) => {
  const avatar = avatarUrl ?? `/articles/default.jpeg`;

  return (
    <StyledCategory>
      <img
        className="profileImage"
        src={avatar}
        alt="profile"
        width={70}
        height={70}
      />
      <div>
        <h1>{name}</h1>
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

  .profileImage {
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
