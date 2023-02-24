import React from "react";
import styled from "styled-components";

interface IProps {
  date: string;
  hour: string;
}
const MatchDate = ({ date, hour }: IProps) => {
  return (
    <StyledDiv>
      <p>{date}</p>
      <p>{hour}</p>
    </StyledDiv>
  );
};

export default MatchDate;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    text-align: center;
    font-weight: 100;
  }
  p:first-child {
    position: relative;
    margin-bottom: 5%;
    &::after {
      content: "";
      position: absolute;
      width: 120%;
      height: 2px;
      background-color: black;
      bottom: 0;
      left: -12%;
    }
  }
`;
