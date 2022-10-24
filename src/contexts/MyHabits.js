import { createContext, useState } from "react";

export const MyHabitsContext = createContext({});

function MyHabitsProvider({ children }) {
  const [percent, setPercent] = useState();
  const [globalHabits, setGlobalHabits] = useState([]);

  return (
    <MyHabitsContext.Provider
      value={{ globalHabits, setGlobalHabits, percent, setPercent }}
    >
      {children}
    </MyHabitsContext.Provider>
  );
}

export default MyHabitsProvider;
