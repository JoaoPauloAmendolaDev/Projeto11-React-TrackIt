import styled from "styled-components";

const Form = styled.div`
  display: flex;
  flex-direction: column;
  input {
    width: 303px;
    height: 45px;
    margin-top: 5px;
    border-radius: 5px;
    background-color: #ffffff;
    border-width: 1px;
    border-color: #13111121;
    ::placeholder {
      color: #333333;
    }
  }
`;

export default Form;
