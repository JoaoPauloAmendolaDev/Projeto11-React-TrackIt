import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
  const navigate = useNavigate();
  function goTo(text) {
    if (text === "habits") {
      return navigate("/habitos");
    }
    if (text === "today") {
      return navigate("/hoje");
    }
    if (text === "historic") {
      return navigate("/historico");
    }
  }

  return (
    <Bottom>
      <p data-identifier="habit-page-action" onClick={() => goTo("habits")}>
        Hábitos
      </p>
      <span onClick={() => goTo("today")}>
        <p>Hoje</p>
      </span>
      <p
        data-identifier="historic-page-action"
        onClick={() => goTo("historic")}
      >
        Histórico
      </p>
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
  background-color: #fff;
  z-index: 2;

  > p {
    color: #52b6ff;
    font-family: "Lexend Deca";
    font-weight: 400;
  }
  span {
    position: absolute;
    font-family: "Lexend Deca";
    height: 95px;
    width: 95px;
    border-radius: 100%;
    background-color: #52b6ff;
    left: 135px;
    bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      color: #ffffff;
      font-family: "Lexend Deca";
      font-weight: 400;
      font-size: 18px;
    }
  }
`;
