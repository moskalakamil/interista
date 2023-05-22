import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter';
  }
  body {
    overflow-x: hidden;
  }

  a {
      text-decoration: none;
      color: black;
  }
`;

export default GlobalStyles;
