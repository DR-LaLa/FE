import { useState } from "react";
import styled from "styled-components";
import { IoGameControllerOutline } from "react-icons/io5";
import { PiRankingFill } from "react-icons/pi";
import { RiContactsBook2Fill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";

export default function Header(props) {
  const iconArr = [
    {
      key: 1,
      iconName: <IoGameControllerOutline />,
    },
    {
      key: 2,
      iconName: <PiRankingFill />,
    },
    {
      key: 3,
      iconName: <RiContactsBook2Fill />,
    },
    {
      key: 4,
      iconName: <IoMdSettings />,
    },
  ];
  return (
    <>
      {props.show == "true" && (
        <HeaderStyle>
          <Logo $show={props.show}>LOGO</Logo>
          <IconBox>
            {iconArr.map((icon) => (
              <Icon>{icon.iconName}</Icon>
            ))}
            {/* <GameIcon />
            <PiRankingFill />
            <RiContactsBook2Fill />
            <IoMdSettings /> */}
          </IconBox>
        </HeaderStyle>
      )}
      {props.show == "false" && <Logo>LOGO</Logo>}
    </>
  );
}

const HeaderStyle = styled.header`
  width: 15vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  font-size: 40px;
  position: ${(props) => (props.$show == "true" ? "relative" : "absolute")};
  top: 5vh;
  left: ${(props) => (props.$show == "true" ? "0.7vw" : "4.7vw")};
`;

const IconBox = styled.section`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Icon = styled.div`
  font-size: 65px;
  &&:hover {
    color: #ff9748;
    cursor: pointer;
  }
`;
