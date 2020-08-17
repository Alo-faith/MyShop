import styled from "styled-components";

export const CreateButtonStyled = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};
`;
export const Form = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 600px;
  padding: 30px;
  padding-bottom: 50px;
  background-color: rgb(69, 123, 157, 30%);
  border-radius: 10px;
`;
