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
  width: 100%;
  padding: 0 15%;
`;