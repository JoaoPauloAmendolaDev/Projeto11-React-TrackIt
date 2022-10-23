import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../contexts/auth";
import Header from "../assets/constants/Header.js";
import Footer from "../assets/constants/Footer.js";
import MyHabits from "../assets/constants/MyHabits";
import axios from "axios";
import styled from "styled-components";
import { Week } from "../assets/style/MyHabits";
import { MyHabitsContext } from "../contexts/MyHabits";
import { TrashOutline } from "react-ionicons";

export default function Habits() {
  const [listOfHabits, setListOfHabits] = useState([]);
  const { object, setObject } = useContext(AuthContext);
  const { globalHabits, setGlobalHabits } = useContext(MyHabitsContext);
  let week = ["D", "S", "T", "Q", "Q", "S", "S"];

  const config = {
    headers: {
      Authorization: `Bearer ${object.token}`,
    },
  };

  useEffect(() => {
    axios
      .get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        config
      )
      .then((e) => isEmpty(e.data))
      .catch((e) => console.log(e.data));
  }, [globalHabits]);

  function isEmpty(e) {
    setGlobalHabits(e);
    setListOfHabits(e);
  }

  function dele(id) {
    //eslint-disable-next-line no-restricted-globals
    let confirmated = confirm("Tem certeza que deseja excluir?");
    if (confirmated) {
      console.log("deletei banana");
      axios.delete(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
        config
      );
    }
  }

  return (
    <Body>
      <Header />
      <MyHabits />
      <HabitsBox>
        {listOfHabits.length !== 0 ? (
          <>
            {listOfHabits.map((habit) => (
              <CreatedHabits key={habit.id}>
                <p>{habit.name}</p>
                <TrashBox onClick={() => dele(habit.id)}>
                  <TrashOutline />
                </TrashBox>
                <Week>
                  <Days>
                    {week.map((letter, weekIndex) => (
                      <Day key={weekIndex}>
                        <WeekDay
                          background={
                            habit.days.includes(weekIndex) ? "#dbdbdb" : "#fff"
                          }
                        >
                          {letter}
                        </WeekDay>
                      </Day>
                    ))}
                  </Days>
                </Week>
              </CreatedHabits>
            ))}{" "}
          </>
        ) : (
          <Zero>
            <p>
              Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
              para começar a trackear!
            </p>
          </Zero>
        )}
      </HabitsBox>
      <Footer />
    </Body>
  );
}

const TrashBox = styled.div`
  position: relative;
  top: 10px;
  left: 300px;
  z-index: 1;
  :hover {
    cursor: pointer;
  }
`;

const HabitsBox = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  height: fit-content;
  padding-bottom: 150px;
  margin: auto auto;
`;

const Body = styled.div`
  width: 375px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin: auto auto;
  background-color: #e5e5e5;
`;

const WeekDay = styled.div`
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

const Days = styled.div`
  height: 100px;
  width: 230px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 100px;
`;

const Day = styled.div`
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

const CreatedHabits = styled.div`
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

const Zero = styled.div`
  width: 300px;
  height: 300px;
  background-color: #E5E5E5;
  p{
    font-family: 'Lexend Deca';
    color: #666666;
    font-size: 18px;
    line-height: 22px;
  }
`;
