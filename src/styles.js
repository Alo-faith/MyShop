import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    color:  ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;
export const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.head};
`;
export const LoadingStyle = styled.div`
  margin-left: 50%;

  margin-top: 300px;
`;
