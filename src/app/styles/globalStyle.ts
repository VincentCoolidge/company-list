import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    background: #27296a;
    color: white;
    font-family: 'SF Pro Display';
    margin: 0;
    padding: 0;
    height: 100vh;
    font-size: 24px;
    font-line: 32px;
  }

  #root {
    height: 100%;
}
`;

export default GlobalStyle;
