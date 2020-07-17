import styled from "styled-components";

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
