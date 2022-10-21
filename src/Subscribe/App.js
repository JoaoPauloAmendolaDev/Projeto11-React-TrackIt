import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../assets/style/GlobalStyle";
import Habits from "../Habits/Habits";
import Login from "../Login/Login";
import Subscribe from "./Subscribe";
import AuthProvider from "../contexts/auth";
import MyHabitsProvider from "../contexts/MyHabits";

function App() {
  return (
    <>
      <GlobalStyle />

      <BrowserRouter>
        <AuthProvider>
          <MyHabitsProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/cadastro" element={<Subscribe />} />
              <Route path="/habitos" element={<Habits />} />
            </Routes>
          </MyHabitsProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
