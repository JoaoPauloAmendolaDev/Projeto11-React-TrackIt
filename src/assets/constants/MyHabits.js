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
let inputValue

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
  let days = ["D", "S", "T", "Q", "Q", "S", "S"];

  const { globalHabits, setGlobalHabits } = useContext(MyHabitsContext);

  function createHabit() {
    setIsCreating(true);
    console.log(isCreating);
  }

  function inputFunction(e) {
    setInput(e);
    inputValue = e
    console.log(e);
  }

  function clickSave() {
    console.log("entrei");
    if (clickedDays.length === 0) {
      return alert("Selecione os dias que deseja para o hábito");
    }
    if (input === "") {
      return alert("Digite o hábito que deseja");
    }
    let habitPost = {
      name: input,
      days: clickedDays,
    };

    inputValue = ''

    axios
      .post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        habitPost,
        config
      )
      .then((e) => console.log(e.request.statusText))
      .catch((e) => console.log(e.data));
    console.log(globalHabits);
    setGlobalHabits([habitPost]);
    setClickedDays([]);
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
        <div onClick={() => createHabit()}>+</div>
      </CreateHabits>
      <PersonalHabits>
        {isCreating ? (
          <CreateHabit>
            <input
              type={"text"}
              placeholder="nome do hábito"
              value={inputValue}
              onChange={(e) => inputFunction(e.target.value)}
            ></input>
            <Week>
              <Days>
                {days.map((value, index) =>
                  clickedDays.includes(index) ? (
                    <DaySelected onClick={() => dayClicked(index)}>
                      {value}
                    </DaySelected>
                  ) : (
                    <Day key={index} onClick={() => dayClicked(index)}>
                      {value}
                    </Day>
                  )
                )}
              </Days>
              <p onClick={() => setIsCreating(false)}>Cancelar</p>
              <div onClick={() => clickSave()}>
                <ButtomSave>Salvar</ButtomSave>
              </div>
            </Week>
          </CreateHabit>
        ) : undefined}
      </PersonalHabits>
    </Body>
  );
}

export default MyHabits;
