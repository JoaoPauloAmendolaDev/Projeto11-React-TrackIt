import { createContext, useState } from "react";

export const MyHabitsContext = createContext({});

function MyHabitsProvider({ children }) {
  const [MyHabits, setMyHabits] = useState([]);

  return (
    <MyHabitsContext.Provider value={{ MyHabits, setMyHabits }}>
      {children}
    </MyHabitsContext.Provider>
  );
}

export default MyHabitsProvider;
