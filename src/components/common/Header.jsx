import { IoGameControllerOutline } from "react-icons/io5";
import { PiRankingFill } from "react-icons/pi";
import { RiContactsBook2Fill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { HiSearch } from "react-icons/hi";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimationContext } from "../../context/context";

export default function Header(props) {
  const navigate = useNavigate();
  const currentPage = useLocation().pathname;
  const [hoverStyled, setHoverStyled] = useState("false");
  const [settingAnime, setSettingAnime] = useState(true);
  const { setPrevPage, prevPage } = useContext(AnimationContext);

  useEffect(() => {
    setTimeout(setSettingAnime(false), 2000);
  }, []);
  return (
    <>
      {props.show == "true" && (
        <HeaderStyle $prevPage={prevPage} $currentPage={currentPage} $setAnime={settingAnime}>
          <Logo
            $show={props.show}
            $prevPage={prevPage}
            $currentPage={currentPage}
            $setAnime={settingAnime}
            onClick={() => {
              setPrevPage(currentPage);
              navigate("/");
            }}
          >
            Dr.LaLa
          </Logo>
          <HeaderStyle2 $show={props.show} $prevPage={prevPage} $currentPage={currentPage} $setAnime={settingAnime}>
            {props.transform != "set" ? (
              <IconBox>
                {iconArr.map((icon) => (
                  <Icon
                    onClick={() => {
                      setPrevPage(currentPage);
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
              <SettingTool>{props.children}</SettingTool>
            )}
          </HeaderStyle2>
        </HeaderStyle>
      )}
      {props.show == "false" && (
        <HeaderStyle
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
            onClick={() => {
              setPrevPage(currentPage);
              navigate("/");
            }}
          >
            Dr.LaLa
          </Logo>
          <HeaderStyle2 $show={props.show} $hover={hoverStyled} $currentPage={currentPage}>
            <IconBox $show={props.show} $hover={hoverStyled}>
              {iconArr.map((icon) => (
                <Icon
                  onClick={() => {
                    setPrevPage(currentPage);
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
  ${(props) => {
    if (props.$currentPage == "/setting") {
      console.log("a");
      return `width: ${props.$setAnime ? "16vw" : "30vw"};`;
    } else {
      if (props.$currentPage == "/" && props.$prevPage == "/setting") {
        console.log(props.$setAnime);
        return `width: ${props.$setAnime ? "30vw" : "16vw"};`;
      }
      console.log("c");
      return "width: 16vw;";
    }
  }}
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
    if (props.$currentPage == "/signup" || props.$currentPage == "/login" || props.$currentPage == "/quiz") {
      return `translateX(${props.$hover == "true" ? "0px" : "-200px"})`;
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
  ${(props) => {
    if (props.$currentPage == "/setting" && props.$prevPage == "/") {
      return `left: ${props.$setAnime ? "4.1vw" : "11vw"};`;
    } else if (props.$currentPage == "/" && props.$prevPage == "/setting") {
      return `left: ${props.$setAnime ? "11vw" : "4.1vw"};`;
    }
  }}
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
  opacity: ${(props) => (props.$show == "false" && props.$hover == "false" ? "0" : "1")};
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
`;
