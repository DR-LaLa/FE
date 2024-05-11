import { useState } from "react";
import styled from "styled-components";

export default function Header() {
  let [show, setShow] = useState(false);
  return (
    <>
      {show && (
        <HeaderStyle>
          <Logo>LOGO</Logo>
        </HeaderStyle>
      )}
      {!show && <Logo>LOGO</Logo>}
    </>
  );
}

const HeaderStyle = styled.header`
  width: 15vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 0;
  background: rgba(255, 255, 255, 0.8);
  filter: drop-shadow(8px 8px 5px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(40px);

  &&::after {
    content: "";
    width: 5vw;
    height: 25vh;
    border-radius: 0 20px 20px 0;
    display: block;
    position: absolute;
    left: 230px;
    border-radius: 0px 25px 25px 0px;
    background: rgba(255, 255, 255, 0.8);
  }
`;

const Logo = styled.h1`
  position: absolute;
  top: 5vh;
  left: 4.7vw;
`;
