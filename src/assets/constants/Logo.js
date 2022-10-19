import styled from "styled-components";
import logo from "../images/logo.jpg";

export default function LogoImage() {
  return (
    <Logo>
      <img src={logo} />
    </Logo>
  );
}

const Logo = styled.div`
  margin-top: 68px;
  margin-bottom: 33px;
  img {
    width: 180px;
    height: 180px;
  }
`;
