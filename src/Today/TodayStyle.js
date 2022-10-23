import styled from "styled-components";

export const SubText = styled.p`
  color: ${(props) => props.color};
  font-size: 18px;
  font-family: "Lexend Deca";
  line-height: 23px;
  margin-bottom: 28px;
  margin-left: 15px;
`;

export const Day = styled.p`
  margin-top: 29px;
  font-family: "Lexend Deca";
  font-size: 23px;
  line-height: 30px;
  color: #126ba5;
  margin-left: 15px;
`;

export const Text = styled.p`
  display: flex;
  font-family: "Lexend Deca";
  font-weight: 400;
  size: 13px;
  line-height: 16px;
  color: #666666;
  p {
    color: #8fc549;
  }
`;

export const Title = styled.p`
  font-family: "Lexend Deca";
  font-size: 20px;
  font-weight: 400;
  color: #666666;
  line-height: 25px;
  margin-bottom: 10px;
`;

export const Body = styled.div`
  background-color: #e5e5e5;
  height: fit-content;
  min-height: 600px;
  padding-bottom: 110px;
`;

export const ConfirmBox = styled.div`
  width: 69px;
  height: 69px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backGround};
  margin-right: 13px;
  border-radius: 5px;
  img {
    width: 35px !important;
    height: 35px !important;
  }
`;

export const TodayHabitTextContent = styled.div`
  padding-top: 13px;
  padding-left: 15px;
  padding-bottom: 17px;
  display: flex;
  flex-direction: column;
`;

export const TodayHabit = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 340px;
  height: 94px;
  margin: 10px auto;
  border-radius: 10px;
  background-color: #fff;
`;
