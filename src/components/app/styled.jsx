import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    font-family: 'Open Sans', 'Times New Roman', sans-serif;
}

main {
    background-color: #f8f9fa;
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

export const whiteDivWithBorder = styled.div`
  background-color: #fff;
  border: 1px solid #d7e6e6;
  border-radius: 0.5rem;
  margin: 0 0 1rem;
  padding: 1rem;
  box-shadow: 0 1px 10px #909090;
`;
