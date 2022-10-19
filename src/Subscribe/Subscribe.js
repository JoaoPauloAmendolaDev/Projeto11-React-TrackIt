import axios from "axios";
import Body from "../assets/constants/Body";
import LogoImage from "../assets/constants/Logo";
import Forms from "../assets/constants/Form";
import Entry from "../assets/constants/Entry";
import Subscribe from "../assets/constants/Subscribe";
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

  console.log(name);
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
    let errorMessage = e.response.data.message;
    if (errorMessage != "") {
      if (errorMessage.status === 422) {
        alert("Sua Imagem ou Email está em formato inválido");
      }
      if (errorMessage.status === 409) {
        console.log("Usuário ou Email já cadastrado");
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
      <Forms>
        <input
          placeholder="Email"
          type="email"
          disabled={loading}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Senha"
          type="password"
          disabled={loading}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          placeholder="Nome"
          type="text"
          disabled={loading}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Foto"
          type="url"
          disabled={loading}
          onChange={(e) => setPhoto(e.target.value)}
        />
      </Forms>
      <Entry onClick={() => test()}>
        {loading ? <img src={waiting} /> : <p>Cadastrar</p>}
      </Entry>
      <Link to={"/"}>
        <Subscribe>
          <a>Já tem uma conta? Faça login!</a>
        </Subscribe>
      </Link>
    </Body>
  );
}
