import styled from "styled-components";

export const TrashBox = styled.div`
  position: relative;
  top: 10px;
  left: 300px;
  z-index: 1;
  :hover {
    cursor: pointer;
  }
`;

export const HabitsBox = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  height: fit-content;
  padding-bottom: 150px;
  margin: auto auto;
`;

export const Body = styled.div`
  width: 375px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin: auto auto;
  background-color: #e5e5e5;
`;

export const WeekDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.background};
  color: grey;
  border-width: 1px;
  border-style: solid;
  border-color: #d4d4d4;
  border-radius: 5px;
  :hover {
    cursor: pointer;
  }
`;

export const Days = styled.div`
  height: 100px;
  width: 230px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 100px;
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
  :hover {
    cursor: pointer;
  }
`;

export const CreatedHabits = styled.div`
  background-color: #fff;
  margin-bottom: 30px;
  width: 340px;
  height: 91px;
  border-width: 1px;
  border-style: solid;
  border-color: #66666630;
  display: flex;
  position: relative;
  border-radius: 5px;
  justify-content: flex-end;
  box-shadow: 0px 0px 17px -1px rgba(102, 96, 105, 1);
  p {
    position: absolute;
    left: 15px;
    top: 13px;
    font-family: "Lexend Deca";
    font-weight: 400;
    font-size: 20px;
    color: #666666;
    height: fit-content;
  }
`;

export const Zero = styled.div`
  margin-top: 30px;
  width: 300px;
  height: 300px;
  background-color: #e5e5e5;
  p {
    font-family: "Lexend Deca";
    color: #666666;
    font-size: 18px;
    line-height: 22px;
  }
`;
