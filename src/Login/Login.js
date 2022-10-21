import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import Body from "../assets/style/Body";
import LogoImage from "../assets/constants/Logo";
import Forms from "../assets/style/Form";
import Entry from "../assets/style/Entry";
import Subscribe from "../assets/style/Subscribe";
import { useState, useContext } from "react";
import { AuthContext } from "../contexts/auth";

export default function Login() {
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let [token, setToken] = useState("");
  let navigate = useNavigate();

  const { object, setObject } = useContext(AuthContext);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function login() {
    let obj = { email: email, password: password };

    axios
      .post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
        obj
      )
      .then((e) => right(e.data))
      .catch((e) => wrong(e));
  }

  function right(info) {
    setToken(info.token);
    setObject(info);
    console.log(object);
    navigate("/habitos");
  }

  function wrong(e) {
    console.log(e);
    if (e === undefined) {
    } else {
      if (e.response.data.message === "Usuário e/ou senha inválidos!") {
        alert("Usuário e/ou senha inválidos!");
      }
    }
  }

  return (
    <Body>
      <LogoImage />
      <Forms>
        <input
          placeholder="Email"
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Senha"
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Forms>
      <Entry onClick={() => login()}>
        <p>Entrar </p>
      </Entry>
      <Link to={"/cadastro"}>
        <Subscribe>
          <a>Não tem conta? Cadastre-se!</a>
        </Subscribe>
      </Link>
    </Body>
  );
}
