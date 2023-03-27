import styled from "styled-components";

interface Props {
  title: string;
}

const SubpageTitle = ({ title }: Props) => {
  return (
    <StyledSubpageTitle>
      <h1>{title}</h1>
      <img src="/logo_white.svg" alt="Interista" />
    </StyledSubpageTitle>
  );
};

const StyledSubpageTitle = styled.div`
  background-image: url("footer.png");
  background-position: center;
  display: flex;
  height: 50vh;

  h1 {
    z-index: 100;
    position: absolute;
    color: white;
    font-family: "Bebas Neue";
    letter-spacing: 0.5vw;
  }

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 50vh;
    left: 0px;

    background: linear-gradient(
      180deg,
      rgba(1, 1, 1, 0.75) 0%,
      rgba(0, 14, 64, 0.75) 100%
    );
    backdrop-filter: blur(32px);
  }

  img {
    margin: auto;
    margin-top: 8vh;
    width: 96vh;
    z-index: 100;
  }
`;

export default SubpageTitle;
