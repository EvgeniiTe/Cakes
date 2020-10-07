import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: padding-box;
}

body {
    font-family: 'Open Sans', 'Times New Roman', sans-serif;
}

main {
    background-color: aquamarine;
}

a {
    text-decoration: none;
    color: #ffffff;
}
`;

export const HeaderFooterContainer = styled.div`
  max-width: 1920px;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  color: #ffffff;
  margin: auto;
`;
