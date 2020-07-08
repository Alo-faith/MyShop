import styled, { createGlobalStyle } from "styled-components";

export const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.head};
`;

export const Description = styled.h2`
  text-align: center;
`;

export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const FWrapper = styled.div`
  margin: 20px;
  text-align: center;
  img {
    margin-left: 1px;
    width: 300px;
    height: 300px;
    border: 2px solid ${(props) => props.theme.head};

    padding: 5px;
  }
  p {
    text-align: center;
    &.item-price {
      color: ${(props) => props.theme.blue};
    }
  }
`;

export const TheamButton = styled.button`
  background-color: ${(props) => props.theme.head};
  color: ${(props) => props.theme.backgroundColor};
  padding: 15px 32px;
  font-weight: bold;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
`;
export const NavButton = styled.button`
  background-color: ${(props) => props.theme.head};
  color: ${(props) => props.theme.backgroundColor};
  padding: 15px 32px;
  font-weight: bold;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    color:  ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;
export const DeleteButtonStyled = styled.p`
  color: red;
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;

export const SearchStyle = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
