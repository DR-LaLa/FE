import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { IoGameControllerOutline } from "react-icons/io5";
import { PiRankingFill } from "react-icons/pi";
import { RiContactsBook2Fill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { MainContext } from "../../context/context";

export default function Header(props) {
  const { anime, setAnime } = useContext(MainContext);
  const navigate = useNavigate();
  const currentPage = useLocation().pathname;
  const ANIME = "anime";

  useEffect(() => {
    if (localStorage.getItem(ANIME)) {
      setAnime(localStorage.getItem(ANIME));
      localStorage.removeItem(ANIME);
    }
  }, []);

  return (
    <>
      {props.show == "true" && (
        <HeaderStyle $settingAnime={props.anime} $homeAnime={anime}>
          <Logo
            $show={props.show}
            onClick={() => {
              if (currentPage == "/setting") {
                localStorage.setItem(ANIME, "set");
              }
              navigate("/");
            }}
          >
            LOGO
          </Logo>
          {props.anime != "setting" ? (
            <IconBox $homeAnime={anime}>
              {iconArr.map((icon) => (
                <Icon
                  onClick={() => {
                    if (icon.name == "setting") {
                      navigate("/setting");
                    }
                  }}
                  key={icon.key}
                  $icon={icon.name}
                >
                  {icon.component}
                </Icon>
              ))}
            </IconBox>
          ) : (
            <>{props.children}</>
          )}
        </HeaderStyle>
      )}
      {props.show == "false" && (
        <Logo
          onClick={() => {
            navigate("/");
          }}
        >
          LOGO
        </Logo>
      )}
    </>
  );
}

const iconArr = [
  {
    key: 1,
    component: <IoGameControllerOutline />,
    name: "game",
  },
  {
    key: 2,
    component: <PiRankingFill />,
    name: "rank",
  },
  {
    key: 3,
    component: <RiContactsBook2Fill />,
    name: "book",
  },
  {
    key: 4,
    component: <IoMdSettings />,
    name: "setting",
  },
];

const HeaderStyle = styled.header`
  /* width: 30vw; */
  width: ${(props) => (props.$settingAnime == "setting" ? "30vw" : "15vw")};
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
  z-index: 3;
  animation-name: ${(props) =>
    props.$settingAnime == "setting" ? "bigger" : props.$homeAnime == "set" ? "setToHome" : ""};
  animation-iteration-count: 1;
  animation-duration: 1s;

  &&::after {
    content: "";
    width: 5vw;
    height: 25vh;
    border-radius: 0 20px 20px 0;
    display: block;
    position: absolute;
    right: -76.5px;
    background: rgba(255, 255, 255, 0.8);
  }

  @keyframes bigger {
    0% {
      width: 15vw;
    }
    100% {
      width: 30vw;
    }
  }

  @keyframes setToHome {
    0% {
      visibility: hidden;
      width: 30vw;
    }
    100% {
      width: 15vw;
    }
  }
`;

const Logo = styled.h1`
  font-size: 40px;
  cursor: pointer;
  position: relative;
  top: ${(props) => (props.$show == "true" ? "5vh" : "-41.7vh")};
  left: ${(props) => (props.$show == "true" ? "0.7vw" : "4.7vw")};
  z-index: 3;
`;

const IconBox = styled.section`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  animation-name: ${(props) => (props.$homeAnime == "set" ? "show" : "")};
  animation-duration: 0.6s;
  animation-iteration-count: 1;

  @keyframes show {
    0% {
      display: none;
      color: transparent;
    }
    50% {
      display: none;
      color: #00000070;
    }
    100% {
      color: black;
    }
  }
`;

const Icon = styled.div`
  font-size: 65px;
  &&:hover {
    color: #ff9748;
    cursor: pointer;
  }
`;
