import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import Body from "../assets/style/Body";
import LogoImage from "../assets/constants/Logo";
import Entry from "../assets/style/Entry";
import Subscribe from "../assets/style/Subscribe";
import { useState, useContext } from "react";
import { AuthContext } from "../contexts/auth";
import styled from "styled-components";

export default function Login() {
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let [token, setToken] = useState("");
  let [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const { object, setObject } = useContext(AuthContext);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function login() {
    setLoading(true);
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
    setLoading(false);
    setToken(info.token);
    setObject(info);
    console.log(object);
    navigate("/hoje");
  }

  function wrong(e) {
    setLoading(false);
    console.log(e.response.data.message);
    if (e.response.data.message == "Usuário e/ou senha inválidos!") {
      return alert("Senha inválida ou email incorreto");
    }
    if (e.response.data.message == 'Campo "body" inválido!') {
      return alert("Email inválido ou inexistente");
    }
  }

  return (
    <Body>
      <LogoImage />
      <Form>
        <Input
          avaible={loading ? "#F2F2F2" : "#fff"}
          placeholder="Email"
          disabled={loading}
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          avaible={loading ? "#F2F2F2" : "#fff"}
          placeholder="Senha"
          disabled={loading}
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form>
      <Entry
        avaible={loading ? "#52B6FF70" : "#52B6FF"}
        onClick={() => login()}
      >
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

const Input = styled.input`
  width: 303px;
  height: 45px;
  margin-top: 5px;
  border-radius: 5px;
  background-color: ${(props) => props.avaible};
  border-width: 1px;
  border-color: #13111121;
  ::placeholder {
    color: #333333;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;
