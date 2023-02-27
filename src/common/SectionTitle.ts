import styled from "styled-components";

export default styled.h1`
  display: block;
  position: relative;
  font-family: "Bebas Neue";
  margin-block: 30px;
  font-size: 35px;
  background-color: white;
  z-index: 2;
  padding-left: 13vw;

  ::before {
    content: "";
    position: absolute;
    display: block;
    top: 50%;
    width: 7vw;
    height: 1px;
    transform: translate(-145%, -50%);
    background-color: black;
  }

  ::after {
    content: "";
    position: absolute;
    display: block;
    top: 50%;
    width: 72vw;
    height: 1px;
    transform: translate(17%, -50%);
    background-color: black;
  }
`;
