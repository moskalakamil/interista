import styled from "styled-components";
import { links } from "./links";
import Nav from "./Nav";

const Header = () => {
  return (
    <StyledHeader>
      <Nav links={links} />
      <img src="/logo_white.svg" alt="Interista" />
      <Nav links={links} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-top: 2vh;
  z-index: 1024;

  @media (min-width: 1024px) {
    padding-inline: 8vw;
  }

  img {
    width: 80px;
    margin-inline: 2vw;
  }
`;

export default Header;
