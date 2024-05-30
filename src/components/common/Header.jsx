import { IoGameControllerOutline } from "react-icons/io5";
import { PiRankingFill } from "react-icons/pi";
import { RiContactsBook2Fill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { HiSearch } from "react-icons/hi";
import { useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { MainContext } from "../../context/context";
import { ANIME } from "./key";
import SignUp from "../../pages/Signup";

export default function Header(props) {
  const { anime, setAnime } = useContext(MainContext);
  const navigate = useNavigate();
  const currentPage = useLocation().pathname;
  const [hoverStyled, setHoverStyled] = useState("false");
  useEffect(() => {
    if (localStorage.getItem(ANIME)) {
      setAnime(localStorage.getItem(ANIME));
      localStorage.removeItem(ANIME);
    }
  }, []);
  // console.log(currentPage);
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
            <IconBox $homeAnime={anime} $settingAnime={props.anime}>
              {iconArr.map((icon) => (
                <Icon
                  onClick={() => {
                    if (icon.name == "setting") {
                      navigate("/setting");
                    } else if (icon.name == "quiz") {
                      navigate("/quiz");
                    } else if (icon.name == "rank") {
                      navigate("/rank");
                    } else if (icon.name == "album") {
                      navigate("/album");
                    } else {
                      navigate("/search");
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
        <HeaderStyle
          $currentPage={currentPage}
          $settingAnime={props.anime}
          $homeAnime={anime}
          $show={props.show}
          $hover={hoverStyled}
          onMouseEnter={(e) => {
            setHoverStyled("true");
          }}
          onMouseLeave={() => {
            setHoverStyled("false");
          }}
        >
          <Logo
            $show={props.show}
            onClick={() => {
              if (currentPage == "/quiz") {
                localStorage.setItem(ANIME, "quiz");
              }
              navigate("/");
            }}
          >
            LOGO
          </Logo>
          <IconBox $show={props.show} $hover={hoverStyled} $currentPage={currentPage}>
            {iconArr.map((icon) => (
              <Icon
                onClick={() => {
                  if (icon.name == "setting") {
                    navigate("/setting");
                  } else if (icon.name == "quiz") {
                    navigate("/quiz");
                  } else if (icon.name == "rank") {
                    navigate("/rank");
                  } else {
                    navigate("/album");
                  }
                }}
                key={icon.key}
                $icon={icon.name}
              >
                {icon.component}
              </Icon>
            ))}
          </IconBox>
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
    name: "album",
  },
  {
    key: 4,
    component: <HiSearch />,
    name: "search",
  },
  {
    key: 5,
    component: <IoMdSettings />,
    name: "setting",
  },
];

const HeaderStyle = styled.header`
  width: ${(props) => (props.$settingAnime == "setting" ? "30vw" : props.$hover == "false" ? "3vw" : "15vw")};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 0;
  background: ${(props) =>
    props.$show == "true" || props.$hover == "true" ? "rgba(255, 255, 255, 0.8)" : "transparent"};
  filter: ${(props) =>
    props.$show == "true" || props.$hover == "true" ? "drop-shadow(8px 8px 5px rgba(0, 0, 0, 0.25))" : "transparent"};
  backdrop-filter: ${(props) => (props.$show == "true" || props.$hover == "true" ? "blur(40px)" : "")};
  z-index: 3;
  transition-duration: 1s;
  animation-name: ${(props) => {
    if (props.$settingAnime == "setting") {
      return "bigger";
    } else if (props.$settingAnime == "quiz") {
      return "invisiable";
    } else if (props.$homeAnime == "set") {
      return "setToHome";
    } else if (props.$homeAnime == "quiz") {
      return "quizToHome";
    } else if (props.$hover == "true") {
      // console.log(props.$hover);
      return "hover";
    } else {
      return "";
    }
  }};
  animation-iteration-count: 1;
  animation-duration: 1s;

  &&::after {
    content: "";
    width: 5vw;
    height: 25vh;
    border-radius: 0 20px 20px 0;
    display: block;
    position: absolute;
    right: -5.01vw;
    background: rgba(255, 255, 255, 0.83);
    /* backdrop-filter: blur(40px); */
    transition-duration: 1s;
    visibility: ${(props) => (props.$show == "true" || props.$hover == "true" ? "visible" : "hidden")};
    opacity: ${(props) => (props.$hover == "true" || props.$show == "true" ? "1" : "0")};
    animation-name: ${(props) =>
      props.$show == "false" && props.$currentPage != "/signup" && props.$currentPage != "/login"
        ? "invisibleIcon"
        : ""};
    animation-iteration-count: 1;
    animation-duration: 1s;
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
    100% {
      width: 15vw;
    }
  }

  @keyframes invisiable {
    0% {
      width: 15vw;
      background: rgba(255, 255, 255, 0.8);
      filter: drop-shadow(8px 8px 5px rgba(0, 0, 0, 0.25));
      backdrop-filter: blur(40px);
    }
    100% {
      width: 0vw;
      visibility: hidden;
    }
  }
  @keyframes invisibleIcon {
    0% {
      width: 5vw;
      visibility: visible;
      opacity: 1;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }
  @keyframes hover {
    0% {
      width: 0vw;
      visibility: hidden;
    }
    100% {
      width: 15vw;
      visibility: visible;
    }
  }
`;

const Logo = styled.h1`
  color: #ff9748;
  font-size: 40px;
  position: ${(props) => (props.$show == "true" ? "relative" : "fixed")};
  top: 5vh;
  left: ${(props) => (props.$show == "true" ? "0.7vw" : "4.7vw")};
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
  position: relative;
  top: ${(props) => (props.$show == "false" ? "20vh" : "")};
  visibility: ${(props) => (props.$show == "false" && props.$hover == "false" ? "hidden" : "visible")};
  opacity: ${(props) => (props.$show == "false" && props.$hover == "false" ? "0" : "1")};
  transition-duration: 1s;
  animation-name: ${(props) => {
    if (props.$currentPage != "/signup" && props.$currentPage != "/login") {
      // console.log(props.currentPage != "/signup", props.$currentPage != "/login", props.$currentPage, props.$homeAnime);
      if (props.$homeAnime == "set" || props.$homeAnime == "quiz") {
        console.log("b");
        return "showIcon";
      } else if (props.$settingAnime != "none" || props.$homeAnime != "none") {
        // console.log("c");
        return "invisibleIcon";
      }
    }
  }};
  animation-duration: 0.6s;
  animation-iteration-count: 1;

  @keyframes showIcon {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Icon = styled.div`
  font-size: 60px;
  &&:hover {
    color: #ff9748;
    cursor: pointer;
  }
`;
