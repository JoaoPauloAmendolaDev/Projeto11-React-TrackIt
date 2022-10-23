import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../assets/constants/Footer";
import Header from "../assets/constants/Header";
import { AuthContext } from "../contexts/auth";
import { MyHabitsContext } from "../contexts/MyHabits";
import newIcon from "../assets/images/icon.png";
import {
  Text,
  Title,
  Body,
  ConfirmBox,
  TodayHabitTextContent,
  TodayHabit,
  Day,
  SubText,
} from "./TodayStyle";
import dayjs from "dayjs";

function Today() {
  const { object, setObject } = useContext(AuthContext);
  const { globalHabits, setGlobalHabits } = useContext(MyHabitsContext);
  const [selected, setSelected] = useState([]);
  const [habits, setHabits] = useState();

  const day = require("dayjs/plugin/customParseFormat");

  require("dayjs/locale/pt-br");
  let today = dayjs().locale("pt-br").format("dddd, DD/MM");
  console.log(today);

  const config = {
    headers: {
      Authorization: `Bearer ${object.token}`,
    },
  };

  useEffect(() => {
    axios
      .get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
        config
      )
      .then((e) => sucess(e))
      .catch((e) => fail(e));
  }, [selected]);

  function sucess(e) {
    console.log(globalHabits);
    setGlobalHabits(e.data);
  }
  function fail(e) {
    console.log(e, "falhei");
  }

  function clickedButton(id) {
    if (selected.includes(id)) {
      axios
        .post(
          `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
          id,
          config
        )
        .then((e) => console.log(e, "sucesso ao desmarcar"))
        .catch((e) => console.log(e.response, "falha ao desmarcar"));
      let newArr = [];
      for (let i = 0; i < selected.length; i++) {
        if (selected[i] !== id) {
          newArr.push(selected[i]);
        }
      }
      setSelected(newArr);
    } else {
      setSelected([...selected, id]);
      axios
        .post(
          `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
          id,
          config
        )
        .then((e) => console.log(e.response, "sucesso ao marcar como feito"))
        .catch((e) => console.log(e.response, "falha ao marcar como feito"));
    }
    console.log(id);
  }

  console.log(selected);

  return (
    <Body>
      <Header />
      <div>
        <Day data-identifier="today-infos">{today}</Day>
        <SubText
          color={selected.length > 0 ? "#8FC549" : "#BABABA"}
          data-identifier="today-infos"
        >
          {selected.length > 0
            ? `${((selected.length / globalHabits.length) * 100).toFixed(
                0
              )} % Hábitos concluidos hoje`
            : "NENHUM HÁBITO CONCLUIDO HOJE"}
        </SubText>
      </div>
      {globalHabits.map((ObjectHabits, index) => (
        <TodayHabit>
          <TodayHabitTextContent key={index}>
            <Title>{ObjectHabits.name}</Title>
            <Text>
              Sequência atual:
              {ObjectHabits.currentSequence < 2 ? (
                <p data-identifier="today-infos">
                  ‎ {ObjectHabits.currentSequence} dia
                </p>
              ) : (
                <p data-identifier="today-infos">
                  ‎ {ObjectHabits.currentSequence} display
                </p>
              )}
            </Text>
            <Text>
              Seu recorde:{" "}
              {ObjectHabits.highestSequence < 2 ? (
                <p data-identifier="today-infos">
                  ‎ {ObjectHabits.highestSequence} dia
                </p>
              ) : (
                <p data-identifier="today-infos">
                  ‎ {ObjectHabits.highestSequence} display
                </p>
              )}
            </Text>
          </TodayHabitTextContent>
          <div>
            <ConfirmBox
              data-identifier="done-habit-btn"
              backGround={
                selected.includes(ObjectHabits.id) ? "#8FC549" : "#E7E7E7"
              }
              onClick={() => clickedButton(ObjectHabits.id)}
            >
              <img src={newIcon} />
            </ConfirmBox>
          </div>
        </TodayHabit>
      ))}

      <Footer />
    </Body>
  );
}

export default Today;
