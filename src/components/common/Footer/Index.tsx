import Image from "next/image";
import styled from "styled-components";
import Category from "./Category";

const links = [
  {
    link: "first",
    name: "first page",
  },
  {
    link: "second",
    name: "second page",
  },
  {
    link: "third",
    name: "third page",
  },
  {
    link: "fourth",
    name: "fourth page",
  },
  {
    link: "fifth",
    name: "fifth page",
  },
  {
    link: "sixth",
    name: "sixth page",
  },
];

const Footer = () => {
  return (
    <StyledFooter>
      <Category title="First Title" links={links} />
      <Category title="Second Title" links={links} />
      <div className="imageContainer">
        <Image src="/logo_white.svg" alt="Interista" fill />
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-image: url("footer.png");
  background-position: center;
  display: flex;
  height: 320px;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 320px;
    left: 0px;
    background: linear-gradient(
      180deg,
      rgba(1, 1, 1, 0.75) 0%,
      rgba(0, 14, 64, 0.75) 100%
    );
    backdrop-filter: blur(32px);
  }

  .imageContainer {
    position: relative;
    margin-left: auto;
    width: 18vh;
    margin-right: 10vw;
    z-index: 100;
  }
`;

export default Footer;
