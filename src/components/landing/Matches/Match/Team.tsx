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
        <Image src="/logo_black.svg" alt="" width={80} height={80}></Image>
      )}
      <p>{host || guest}</p>
      {host && (
        <Image src="/logo_black.svg" alt="" width={80} height={80}></Image>
      )}
      {/* <img src="/logo_black.svg" alt="" /> */}
    </StyledDiv>
  );
};

export default Team;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 40px;
  }
`;
