import styled from "styled-components";

const Entry = styled.div`
  width: 303px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #52b6ff;
  border-radius: 5px;
  margin-top: 35px;
  p {
    color: #ffffff;
    font-weight: 400;
    font-size: 21px;
  }
  :hover{
    cursor: pointer;
  }
  img{
    width: 20%;
    height: 80%;
  }
`;

export default Entry;
