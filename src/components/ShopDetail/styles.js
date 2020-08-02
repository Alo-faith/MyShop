import styled from "styled-components";

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

export const Description = styled.h2`
  text-align: center;
`;
