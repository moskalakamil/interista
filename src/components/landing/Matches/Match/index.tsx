import React from "react";
import styled from "styled-components";
import MatchDate from "./Date";
import Team from "./Team";
interface IProps {
  host: string;
  guest: string;
  date: string;
  hour: string;
}

const Match = ({ host, guest, date, hour }: IProps) => {
  return (
    <StyledDiv>
      <Team host={host} />
      <MatchDate date={date} hour={hour} />
      <Team guest={guest} />
    </StyledDiv>
  );
};

export default Match;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 96%;
  padding: 2%;
  border-bottom: 1px solid #c8c8c8;
  margin: 10 2%;

  @media (min-width: 768px) {
    width: 80%;
    margin: 0 10%;
    padding: 2%, 5%;
  }
`;
