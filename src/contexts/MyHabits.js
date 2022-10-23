import { createContext, useState } from "react";

export const MyHabitsContext = createContext({});

function MyHabitsProvider({ children }) {
  const [globalHabits, setGlobalHabits] = useState([]);

  return (
    <MyHabitsContext.Provider value={{ globalHabits, setGlobalHabits }}>
      {children}
    </MyHabitsContext.Provider>
  );
}

export default MyHabitsProvider;
