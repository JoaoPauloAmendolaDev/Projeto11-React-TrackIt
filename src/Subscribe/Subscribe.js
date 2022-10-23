import axios from "axios";
import { Body, Entry, Form, Input } from "./SubscribeStyle";
import LogoImage from "../assets/constants/Logo";
import Subscribe from "../assets/style/Subscribe";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import waiting from "../assets/images/waiting.gif";

export default function SubscribePlace() {
  let [photo, setPhoto] = useState("");
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  let object = {};

  function click() {
    axios
      .post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
        object
      )
      .then((e) => sucess(e))
      .catch((e) => error(e));
  }

  function sucess(e) {
    console.log(e, "bem !!");
    navigate("/");
  }

  function error(e) {
    let errorMessage = e.response;
    console.log(errorMessage, e.response);
    if (errorMessage.message != "") {
      if (errorMessage.status === 422) {
        alert("Sua Imagem ou Email está em formato inválido");
      }
      if (errorMessage.status === 409) {
        alert("Usuário ou Email já cadastrado");
      }
      setLoading(false);
    }
  }

  function test() {
    setLoading(true);
    if (photo && email && name && password) {
      object = {
        email: email,
        name: name,
        image: photo,
        password: password,
      };
      console.log("teste bem sucedido", object);
      click();
    } else {
      setLoading(false);
      alert("preencha tudo");
    }
  }

  return (
    <Body>
      <LogoImage />
      <Form>
        <Input
          avaible={loading ? "#F2F2F2" : "#fff"}
          data-identifier="input-email"
          placeholder="Email"
          type="email"
          disabled={loading}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          avaible={loading ? "#F2F2F2" : "#fff"}
          data-identifier="input-password"
          placeholder="Senha"
          type="password"
          disabled={loading}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          avaible={loading ? "#F2F2F2" : "#fff"}
          data-identifier="input-name"
          placeholder="Nome"
          type="text"
          disabled={loading}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          avaible={loading ? "#F2F2F2" : "#fff"}
          data-identifier="back-to-login-action"
          placeholder="Foto"
          type="url"
          disabled={loading}
          onChange={(e) => setPhoto(e.target.value)}
        />
      </Form>
      <Entry color={loading ? "#52B6FF70" : "#52B6FF"} onClick={() => test()}>
        {loading ? <img src={waiting} /> : <p>Cadastrar</p>}
      </Entry>
      <Link to={"/"}>
        <Subscribe>
          <a data-identifier="back-to-login-action">
            Já tem uma conta? Faça login!
          </a>
        </Subscribe>
      </Link>
    </Body>
  );
}
