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
  background: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-inline: 8vw;
  align-items: center;
  margin-top: 2vh;

  img {
    width: 80px;
  }
`;

export default Header;
