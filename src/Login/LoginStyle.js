import styled from "styled-components";

export const Input = styled.input`
width: 303px;
height: 45px;
margin-top: 5px;
border-radius: 5px;
background-color: ${(props) => props.avaible};
border-width: 1px;
border-color: #13111121;
::placeholder {
  color: #333333;
}
`;

export const Form = styled.div`
display: flex;
flex-direction: column;
`;