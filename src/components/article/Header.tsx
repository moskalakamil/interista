import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <DivContainerStyled>
      <p>cofnij se</p>
      <DivImageStyled>
        <Image src="/logo_black.svg" alt="logo" fill />
      </DivImageStyled>
    </DivContainerStyled>
  );
};

export default Header;

const DivContainerStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  width: 100%;
  height: 120px;
`;
const DivImageStyled = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
`;
