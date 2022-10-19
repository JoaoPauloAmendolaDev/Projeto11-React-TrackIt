import { Link } from "react-router-dom";
import axios from "axios";
import Body from "../assets/constants/Body";
import LogoImage from "../assets/constants/Logo";
import Forms from "../assets/constants/Form";
import  Entry  from "../assets/constants/Entry";
import  Subscribe  from "../assets/constants/Subscribe";

export default function Login() {
  return (
    <Body>
      <LogoImage />
      <Forms>
        <input placeholder="Email" />
        <input placeholder="Senha" />
      </Forms>
      <Entry onClick={() => ''}>
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
