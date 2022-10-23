import { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../../contexts/auth";

export default function Top() {
  const { object, setObject } = useContext(AuthContext);
  return (
    <Header>
      <p>TrackIt</p>
      <div>
        <img data-identifier="avatar" src={object.image} />
      </div>
    </Header>
  );
}

const Header = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  background-color: #126ba5;
  align-items: center;
  p {
    font-size: 40px;
    font-weight: 400;
    font-family: Playball;
    line-height: 50px;
    color: #ffffff;
    margin-left: 18px;
  }
  img {
    width: 51px;
    height: 51px;
    border-radius: 100px;
  }
  div {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-right: 40px;
  }
`;
