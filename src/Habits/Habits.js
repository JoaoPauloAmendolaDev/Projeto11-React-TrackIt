import { useState, useContext } from "react";
import { AuthContext } from "../contexts/auth";
import Header from "../assets/constants/Header.js";
import Footer from "../assets/constants/Footer.js";
import MyHabits from "../assets/constants/MyHabits";

export default function Habits() {
  const { object, setObject } = useContext(AuthContext);

  return (
    <>
      <Header />
      <MyHabits />
      <Footer />
    </>
  );
}
