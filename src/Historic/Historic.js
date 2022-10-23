import styled from "styled-components";
import Footer from "../assets/constants/Footer";
import Header from "../assets/constants/Header.js";
import { Text } from "../Today/TodayStyle";
import { Title, Body } from "./HistoricStyle";

export default function Historic() {
  return (
    <Body>
      <Header />
      <Title>Histórico</Title>
      <Text>Em breve você poderá ver o histórico dos seus hábitos aqui!</Text>
      <Footer />
    </Body>
  );
}
