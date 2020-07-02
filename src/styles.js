import styled, { createGlobalStyle } from "styled-components";

const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.head};
`;

const Description = styled.h2`
  text-align: center;
`;

const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
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



const TheamButton = styled.button`
  background-color: ${(props) => props.theme.head};
  color: ${(props) => props.theme.backgroundColor};
  padding: 15px 32px;
  font-weight: bold;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
`;

const GlobalStyle = createGlobalStyle`
  body {
    color:  ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;
const DeleteButtonStyled = styled.p`
  color: red;
`;

export {
  TheamButton,
  Description,
  Title,
  ShopImage,
  ListWrapper,
  FWrapper,
  GlobalStyle,
  DeleteButtonStyled,
};
