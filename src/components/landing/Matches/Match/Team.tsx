import Image from "next/image";
import React from "react";
import styled from "styled-components";
interface IProps {
  host?: string;
  guest?: string;
}
const Team = ({ host, guest }: IProps) => {
  return (
    <StyledDiv>
      {guest && (
        <div>
          <Image
            src="/logo_match.png"
            alt=""
            fill
            style={{ padding: "15%", marginLeft: "-20px" }}
          ></Image>
        </div>
      )}
      <p>{host || guest}</p>
      {host && (
        <div>
          <Image
            src="/logo_match.png"
            alt=""
            fill
            style={{ padding: "15%", marginLeft: "20px" }}
          ></Image>
        </div>
      )}
    </StyledDiv>
  );
};

export default Team;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;

  & > div {
    position: relative;
    width: 50px;
    height: 50px;

    @media (min-width: 960px) {
      width: 80px;
      height: 80px;
    }
  }

  & > p {
    font-size: 20px;

    @media (min-width: 960px) {
      font-size: 30px;
    }
    @media (min-width: 1100px) {
      font-size: 30px;
    }
  }
`;
