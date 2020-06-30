import styled, { createGlobalStyle } from "styled-components";

const Title = styled.h1`
  text-align: center;
  color: #003049;
`;

const Description = styled.h2`
  text-align: center;
`;

const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const FWrapper = styled.div`
  margin: 20px;

  img {
    margin-left: 1px;
    width: 300px;
    height: 300px;
    border: 2px solid #555;
    padding: 5px;
  }

  p {
    text-align: center;

    &.item-price {
      color: ${(props) => props.theme.blue};
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    color:  ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export { Description, Title, ShopImage, ListWrapper, FWrapper, GlobalStyle };
