import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../contexts/auth";
import Header from "../assets/constants/Header.js";
import Footer from "../assets/constants/Footer.js";
import MyHabits from "../assets/constants/MyHabits";
import axios from "axios";
import { Week } from "../assets/style/MyHabits";
import { MyHabitsContext } from "../contexts/MyHabits";
import { TrashOutline } from "react-ionicons";
import {
  TrashBox,
  HabitsBox,
  Body,
  WeekDay,
  Days,
  Day,
  CreatedHabits,
  Zero,
} from "./HabitsStyle";

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
                <p data-identifier="habit-name">{habit.name}</p>
                <TrashBox
                  data-identifier="delete-habit-btn"
                  onClick={() => dele(habit.id)}
                >
                  <TrashOutline />
                </TrashBox>
                <Week>
                  <Days>
                    {week.map((letter, weekIndex) => (
                      <Day key={weekIndex}>
                        <WeekDay
                          data-identifier="week-day-btn"
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
            <p data-identifier="no-habit-message">
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
