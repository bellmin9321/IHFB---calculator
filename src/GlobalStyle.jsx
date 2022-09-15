import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html,body {
    padding: 0;
    margin: 0;
    background: #E5E5E5;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyle;
