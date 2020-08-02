import styled from "styled-components";

export const ShopImage = styled.img`
  margin: 5px;
  width: 300px;
  height: 300px;
  border: 2px solid ${(props) => props.theme.head};
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
export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-gap: 10px;
  width: 700px;
  margin-top: 80px;
`;
