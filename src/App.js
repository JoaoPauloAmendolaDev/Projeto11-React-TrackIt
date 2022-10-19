import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/css/GlobalStyle";
import Login from "./Login/Login";
import Subscribe from "./Subscribe/Subscribe";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element= { <Subscribe />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
