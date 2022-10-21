import styled from "styled-components";

export default function Footer() {
  return (
    <Bottom>
      <p>Hábitos</p>
      <button>
        <p>Hoje</p>
      </button>
      <p>Histórico</p>
    </Bottom>
  );
}

const Bottom = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 31px;
  position: relative;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: black;

  p {
    color: #52b6ff;
    font-family: "Lexend Deca";
    font-weight: 400;
  }
  button {
    position: absolute;
    font-family: "Lexend Deca";
    height: 95px;
    width: 95px;
    border-radius: 100%;
    background-color: #52b6ff;
    left: 135px;
    bottom: 10px;
    p {
      color: #ffffff;
      font-family: "Lexend Deca";
      font-weight: 400;
      font-size: 18px;
    }
  }
`;
