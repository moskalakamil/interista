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
    color: #6d6d6d;
    text-align: center;
    font-weight: 100;
  }
  p:first-child {
    position: relative;
    margin-bottom: 10px;
    &::after {
      content: "";
      position: absolute;
      width: 130%;
      height: 1px;
      background-color: #6d6d6d;
      bottom: -5px;
      left: -17%;
    }
  }
`;
