import { IoGameControllerOutline } from "react-icons/io5";
import { PiRankingFill } from "react-icons/pi";
import { RiContactsBook2Fill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { HiSearch } from "react-icons/hi";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Header(props) {
  const navigate = useNavigate();
  const [hoverStyled, setHoverStyled] = useState("false");
  const [settingAnime, setSettingAnime] = useState(-300);
  const [setWidth, setSetWidth] = useState(props.transform == "set" ? 30 : 17);
  useEffect(() => {
    setTimeout(setSettingAnime(0), 2000);
  }, []);
  return (
    <>
      {props.show == "true" && (
        <HeaderStyle $tarnsform={props.transform} $setWidth={setWidth}>
          <Logo
            $show={props.show}
            $position={setWidth}
            $showAnime={settingAnime}
            onClick={() => {
              setSetWidth(17);
              if (props.transform == "set") {
                setSettingAnime(1);
                setSetWidth(17);
              }
              setTimeout(() => {
                navigate("/");
              }, 700);
            }}
          >
            Dr.LaLa
          </Logo>
          <HeaderStyle2 $show={props.show} $tarnsform={props.transform} $showAnime={settingAnime}>
            {props.transform != "set" ? (
              <IconBox>
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
              <SettingTool $showAnime={settingAnime}>{props.children}</SettingTool>
            )}
          </HeaderStyle2>
        </HeaderStyle>
      )}
      {props.show == "false" && (
        <HeaderStyle
          $setWidth={setWidth}
          $tarnsform={props.transform}
          onMouseMove={(e) => {
            if (e.clientX <= 155) {
              setHoverStyled("true");
            } else {
              setHoverStyled("false");
            }
          }}
        >
          <Logo
            $show={props.show}
            $position={setWidth}
            $showAnime={settingAnime}
            onClick={() => {
              navigate("/");
            }}
          >
            Dr.LaLa
          </Logo>
          <HeaderStyle2 $show={props.show} $hover={hoverStyled} $tarnsform={props.transform}>
            <IconBox $show={props.show} $hover={hoverStyled}>
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
          </HeaderStyle2>
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
  width: ${(props) => `${props.$setWidth}vw`};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 0;
  z-index: 3;
  transition-duration: 0.7s;
`;

const HeaderStyle2 = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  background: ${(props) =>
    props.$show == "true" || props.$hover == "true" ? "rgba(255, 255, 255, 0.83)" : "transparent"};
  filter: ${(props) =>
    props.$show == "true" || props.$hover == "true" ? "drop-shadow(8px 8px 5px rgba(0, 0, 0, 0.25))" : "transparent"};
  backdrop-filter: ${(props) => (props.$show == "true" || props.$hover == "true" ? "blur(40px)" : "")};
  position: relative;
  z-index: 3;
  transition-duration: 0.7s;
  transform: ${(props) => {
    if (props.$tarnsform == "bigger") {
      return `translateX(${props.$hover == "true" ? "0px" : "-200px"})`;
    } else if (props.$tarnsform == "show") {
      return "translateX(0px)";
    } else if (props.$tarnsform == "set") {
      return `translateX(${props.$showAnime}px)`;
    }
  }};
  &&::after {
    content: "";
    width: 5vw;
    height: 25vh;
    border-radius: 0 20px 20px 0;
    display: block;
    position: absolute;
    top: 0;
    right: -5vw;
    background: rgba(255, 255, 255, 0.83);
    transition-duration: 0.7s;
    visibility: ${(props) => (props.$show == "true" || props.$hover == "true" ? "visible" : "hidden")};
    opacity: ${(props) => (props.$hover == "true" || props.$show == "true" ? "1" : "0")};
  }
`;

const Logo = styled.h1`
  color: #ff9748;
  font-size: 40px;
  position: absolute;
  top: 8vh;
  left: ${(props) => (props.$position == 30 ? "11vw" : "5.5vw")};
  transition-duration: 0.7s;

  z-index: 4;
  cursor: pointer;
`;

const IconBox = styled.section`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  visibility: ${(props) => (props.$show == "false" && props.$hover == "false" ? "hidden" : "visible")};

  /* opacity: ${(props) => (props.$show == "false" && props.$hover == "false" ? "0" : "1")}; */
  transition-duration: 0.5s;

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

const SettingTool = styled.section`
  width: 100%;
  height: 80%;
  font-size: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  transition-duration: 0.7s;
  opacity: ${(props) => (props.$showAnime == 1 ? 0 : 1)};
`;
