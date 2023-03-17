import React from "react";
import styled from "styled-components";

const Author = () => {
  return (
    <StyledCategory>
      <div></div>
    </StyledCategory>
  );
};

export default Author;

const StyledCategory = styled.div`
  display: flex;
  float: right;
  color: red;

  img {
    height: 10px;
    width: 10px;
  }
`;
