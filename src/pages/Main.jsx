import styled from "styled-components";
import Header from "../components/common/Header";
import MainFrame from "../components/common/MainFrame";
import MainProvider from "../provider/MainProvider";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ANIME } from "../components/common/key";
import { IsLoginContext } from "../context/context";

export default function Main() {
  const navigate = useNavigate();
  const { userData } = useContext(IsLoginContext);
  const homeAnime = localStorage.getItem(ANIME) ? localStorage.getItem(ANIME) : "";
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!userData.isLogin) {
      navigate("/login");
    }
    getCount(setCount, userData);
  }, []);

  const imgArr = [
    "img/애기.png",
    "img/유딩.png",
    "img/초딩.png",
    "img/중딩.png",
    "img/고3.png",
    "img/대딩.png",
    "img/대학원생.png",
    "img/의사.png",
    "img/수술의사.png",
  ];

  return (
    <MainProvider>
      <Header show={"true"} anime={"none"} />
      <MainFrame>
        <Img src={imgArr[count - 1]} alt="" $homeAnime={homeAnime} />
      </MainFrame>
    </MainProvider>
  );
}

async function getCount(setCount, userData) {
  try {
    // const response = await fetch("json/set.json");
    const response = await fetch(`http://15.164.128.251/main/quizcount/${userData.loginid}`);
    const data = await response.json();
    setCount(data.count <= 90 ? Math.floor(data.count / 10) : 9);
  } catch (err) {
    console.log(err);
  }
}

const Img = styled.img`
  width: 20vw;
  position: relative;
  top: 6vh;
  animation-name: ${(props) => (props.$homeAnime == "set" ? "homeMove" : "")};
  animation-duration: 1s;
  animation-iteration-count: 1;

  @keyframes homeMove {
    0% {
      width: 22vw;
      left: 10vw;
    }
    100% {
      width: 20vw;
      left: 0;
    }
  }
`;
