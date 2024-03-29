import styled from "styled-components";
import Info from "./Info/Index";

const Hero = () => {
  return (
    <HeroStyled>
      <Info />
    </HeroStyled>
  );
};

const HeroStyled = styled.div`
  background: url("/articles/default.jpeg");
  background-size: cover;
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  color: white;
  font-family: "Bebas Neue", sans-serif;

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(1, 1, 1, 0.375) 0%,
      rgba(0, 11, 50, 0.5775) 100%
    );
  }

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(7, 12, 36, 0.31);
  }
`;

export default Hero;
