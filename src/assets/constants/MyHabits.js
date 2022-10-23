import { useContext, useState } from "react";
import { MyHabitsContext } from "../../contexts/MyHabits";
import { AuthContext } from "../../contexts/auth";
import axios from "axios";
import {
  ButtomSave,
  Week,
  PersonalHabits,
  Days,
  CreateHabit,
  CreateHabits,
  Day,
  DaySelected,
  Body,
} from "../style/MyHabits";
let inputValue;

function MyHabits() {
  const { object, setObject } = useContext(AuthContext);

  const config = {
    headers: {
      Authorization: `Bearer ${object.token}`,
    },
  };

  let [isCreating, setIsCreating] = useState(false);
  let [input, setInput] = useState();
  let [clickedDays, setClickedDays] = useState([]);
  let [loading, setLoading] = useState(false);
  let days = ["D", "S", "T", "Q", "Q", "S", "S"];

  const { globalHabits, setGlobalHabits } = useContext(MyHabitsContext);

  function createHabit() {
    setIsCreating(true);
    console.log(isCreating);
  }

  function inputFunction(e) {
    setInput(e);
    inputValue = e;
    console.log(e);
  }

  function clickSave() {
    setLoading(true);
    console.log("entrei");
    if (clickedDays.length === 0) {
      setLoading(true);
      alert("Selecione os dias que deseja para o hábito");
      return setLoading(false);
    }
    if (input === "") {
      setLoading(true);
      alert("Digite o hábito que deseja");
      return setLoading(false);
    }
    let habitPost = {
      name: input,
      days: clickedDays,
    };

    inputValue = "";

    axios
      .post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        habitPost,
        config
      )
      .then((e) => load(e.request.statusText))
      .catch((e) => load(e.data));
    console.log(globalHabits);
    setGlobalHabits([habitPost]);
    setClickedDays([]);
  }

  function load() {
    setLoading(false);
  }

  function dayClicked(index) {
    if (!clickedDays.includes(index)) {
      setClickedDays([...clickedDays, index]);
    } else {
      let newArr = clickedDays.filter((e) => e !== index);
      setClickedDays(newArr);
    }
  }

  return (
    <Body>
      <CreateHabits>
        <p>Meus Hábitos</p>
        <div data-identifier="create-habit-btn" onClick={() => createHabit()}>
          +
        </div>
      </CreateHabits>
      <PersonalHabits>
        {isCreating ? (
          <CreateHabit color={loading ? "#D4D4D4" : "#fff"}>
            <input
              data-identifier="input-habit-name"
              type={"text"}
              placeholder="nome do hábito"
              value={inputValue}
              onChange={(e) => inputFunction(e.target.value)}
            ></input>
            <Week>
              <Days>
                {days.map((value, index) =>
                  clickedDays.includes(index) ? (
                    <DaySelected
                      data-identifier="week-day-btn"
                      onClick={() => dayClicked(index)}
                    >
                      {value}
                    </DaySelected>
                  ) : (
                    <Day
                      data-identifier="week-day-btn"
                      key={index}
                      onClick={() => dayClicked(index)}
                    >
                      {value}
                    </Day>
                  )
                )}
              </Days>
              <p
                data-identifier="cancel-habit-create-btn"
                onClick={() => setIsCreating(false)}
              >
                Cancelar
              </p>
              <div onClick={() => clickSave()}>
                <ButtomSave
                  data-identifier="save-habit-create-btn"
                  color={loading ? "#52b6ff70" : "#52b6ff"}
                >
                  Salvar
                </ButtomSave>
              </div>
            </Week>
          </CreateHabit>
        ) : undefined}
      </PersonalHabits>
    </Body>
  );
}

export default MyHabits;
