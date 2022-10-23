import styled from "styled-components";

export const Body = styled.div`
  width: 375px;
  height: 667px;
  background-color: #ffffff;
  margin: auto auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Entry = styled.div`
  width: 303px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
  border-radius: 5px;
  margin-top: 35px;
  p {
    color: #ffffff;
    font-weight: 400;
    font-size: 21px;
  }
  :hover {
    cursor: pointer;
  }
  img {
    width: 20%;
    height: 80%;
  }
`;

export const Subscribe = styled.div`
  margin-top: 30px;
`;

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
input {
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
}
`;
