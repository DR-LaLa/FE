import { useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
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

  // console.log(props.anime);

  return (
    <>
      {props.show == "true" && (
        <HeaderStyle $settingAnime={props.anime} $homeAnime={anime} $show={props.show}>
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
                    } else if (icon.name == "quiz") {
                      navigate("/quiz");
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
        <HeaderStyle>
          <Logo
            onClick={() => {
              if (currentPage == "/quiz") {
                localStorage.setItem(ANIME, "quiz");
              }
              navigate("/");
            }}
          >
            LOGO
          </Logo>
        </HeaderStyle>
      )}
    </>
  );
}

const iconArr = [
  {
    key: 1,
    component: <IoGameControllerOutline />,
    name: "quiz",
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
  background: ${(props) => (props.$show == "true" ? "rgba(255, 255, 255, 0.8)" : "transparent")};
  filter: ${(props) => (props.$show == "true" ? "drop-shadow(8px 8px 5px rgba(0, 0, 0, 0.25))" : "transparent")};
  backdrop-filter: ${(props) => (props.$show == "true" ? "blur(40px)" : "")};
  z-index: 3;
  animation-name: ${(props) =>
    props.$settingAnime == "setting"
      ? "bigger"
      : props.$settingAnime == "quiz"
      ? "invisiable"
      : props.$homeAnime == "set"
      ? "setToHome"
      : props.$homeAnime == "quiz"
      ? "quizToHome"
      : ""};
  animation-iteration-count: 1;
  animation-duration: 1s;

  &&::after {
    content: "";
    width: 5vw;
    height: 25vh;
    border-radius: 0 20px 20px 0;
    display: ${(props) => (props.$show == "true" ? "block" : "none")};
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

  @keyframes quizToHome {
    0% {
      visibility: hidden;
      width: 0%;
    }
    /* 10% {
      visibility: hidden;
    } */
    100% {
      width: 15vw;
    }
  }

  @keyframes invisiable {
    0% {
      width: 15vw;
      background-color: rgba(255, 255, 255, 0.8);
      filter: drop-shadow(8px 8px 5px rgba(0, 0, 0, 0.25));
      backdrop-filter: blur(40px);
    }
    100% {
      width: 0vw;
    }
  }
`;

const Logo = styled.h1`
  color: #ff9748;
  font-size: 40px;
  position: relative;
  top: 5vh;
  left: 0.7vw;
  cursor: pointer;
  z-index: 3;
`;

const IconBox = styled.section`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  animation-name: ${(props) => (props.$homeAnime == "set" || props.$homeAnime == "quiz" ? "show" : "")};
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
