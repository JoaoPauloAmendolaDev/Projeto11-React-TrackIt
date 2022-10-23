import styled from "styled-components";

export const ButtomSave = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 84px;
  height: 35px;
  background-color: ${(props) => props.color};
  position: absolute;
  margin-top: 32px;
  right: 40px;
  top: 25px;
  border-radius: 5px;
  color: #ffffff;
  font-family: "Lexend Deca";
  cursor: pointer;
`;

export const Week = styled.div`
  width: 100%;
  margin-left: 35px;
  position: relative;
  p {
    margin-top: 30px;
    position: absolute;
    left: 40%;
    font-family: "Lexend Deca";
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const PersonalHabits = styled.div`
  width: 340px;
  margin: auto auto;
  background-color: #fff !important;
  border-radius: 5px;
`;

export const Days = styled.div`
  margin-top: 5px;
  width: 230px;

  display: flex;
  justify-content: space-around;
`;

export const CreateHabits = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;

  p {
    font-family: "Lexend Deca";
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: #126ba5;
    padding-left: 15px;
  }
  div {
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 35px;
    background-color: #52b6ff;
    margin-left: 130px;
    cursor: pointer;
    :hover {
      cursor: pointer;
    }
  }
`;

export const CreateHabit = styled.div`
  width: 340px;
  height: 180px;
  margin: auto auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 18px;
  margin-bottom: 30px;

  input {
    background-color: ${(props) => props.color} !important;
    border-radius: 5px;
    border-color: #b1c3bf30;
    width: 303px;
    height: 45px;
    padding-left: 10px;
    ::placeholder {
      font-size: 20px;
      margin-left: 11px;
      color: #b1c3bf;
      font-family: "Lexend Deca";
    }
  }
`;

export const Body = styled.div`
  background-color: #e5e5e5;
`;

export const Day = styled.div`
  border-width: 1px;
  border-style: solid;
  border-color: #d4d4d4;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: white;
  color: #ccd8d5;
  cursor: pointer;
`;

export const DaySelected = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: grey;
  color: #ffffff;
  border-width: 1px;
  border-style: solid;
  border-color: #d4d4d4;
  border-radius: 5px;
  :hover {
    cursor: pointer;
  }
`;
