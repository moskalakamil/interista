import { useEffect, useState } from "react";
import styled from "styled-components";
import { links } from "./links";
import Nav from "./Nav";

const Header = () => {
  const [isOnTop, setIsOnTop] = useState(true);

  const scrollHandler = () => {
    setIsOnTop(window.scrollY <= 0);
  };

  useEffect(() => {
    addEventListener("scroll", scrollHandler);

    return () => removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <StyledHeader data-testid="header" isOnTop={isOnTop}>
      <Nav links={links} />
      <img src={`/logo_${isOnTop ? "white" : "black"}.svg`} alt="Interista" />
      <Nav links={links} />
    </StyledHeader>
  );
};

interface StyledHeaderProps {
  isOnTop: boolean;
}

const StyledHeader = styled.header<StyledHeaderProps>`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  z-index: 1024;
  padding-top: ${({ isOnTop }) => (isOnTop ? 2 : 0)}vh;
  background: ${({ isOnTop }) => (isOnTop ? "transparent" : "white")};
  transition: all 0.1s ease-in-out;

  a {
    color: ${({ isOnTop }) => (isOnTop ? "white" : "black")};
  }

  @media (min-width: 1024px) {
    padding-inline: 8vw;
  }

  img {
    width: 80px;
    margin-inline: 2vw;
  }
`;

export default Header;
