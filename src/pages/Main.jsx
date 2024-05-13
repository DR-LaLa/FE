import styled from "styled-components";
import Header from "../components/common/Header";
import MainFrame from "../components/common/MainFrame";
import MainProvider from "../provider/MainProvider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Main() {
  const navigate = useNavigate();
  const USERNAME = "userName";
  const ANIME = "anime";
  const userName = localStorage.getItem(USERNAME) ? localStorage.getItem(USERNAME) : "";
  const homeAnime = localStorage.getItem(ANIME) ? localStorage.getItem(ANIME) : "";
  // console.log(homeAnime);
  useEffect(() => {
    if (userName == "") {
      navigate("/login");
    }
  }, []);
  return (
    <MainProvider>
      <Header show={"true"} />
      <MainFrame>
        <Img src="img/유딩.png" alt="" $homeAnime={homeAnime} />
      </MainFrame>
    </MainProvider>
  );
}

const Img = styled.img`
  width: 35vw;
  position: relative;
  top: 5vh;
  animation-name: ${(props) => (props.$homeAnime == "set" ? "homeMove" : "")};
  animation-duration: 1s;
  animation-iteration-count: 1;

  @keyframes homeMove {
    0% {
      width: 42vw;
      top: 3vh;
      left: 10vw;
    }
    100% {
      width: 35vw;
      top: 5vh;
      left: 0;
    }
  }
`;
