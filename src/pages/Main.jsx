import styled from "styled-components";
import Header from "../components/common/Header";
import MainFrame from "../components/common/MainFrame";
import MainProvider from "../provider/MainProvider";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { USERDATA, ANIME } from "../components/common/key";

export default function Main() {
  const navigate = useNavigate();
  const userData = localStorage.getItem(USERDATA) ? JSON.parse(localStorage.getItem(USERDATA)) : "";
  const homeAnime = localStorage.getItem(ANIME) ? localStorage.getItem(ANIME) : "";
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (userData == "") {
      navigate("/login");
    }
    getCount(setCount, userData);
  }, []);

  const imgArr = ["img/유딩.png"];

  return (
    <MainProvider>
      <Header show={"true"} anime={"none"} />
      <MainFrame>
        <Img src={imgArr[count]} alt="" />
      </MainFrame>
    </MainProvider>
  );
}

async function getCount(setCount, userData) {
  try {
    const response = await fetch("json/set.json");
    // const response = await fetch(`http://localhost:8080/main/quizcount/${userData.loginid}`);
    const data = await response.json();
    setCount(Math.floor(data.count / 10));
  } catch (err) {
    console.log(err);
  }
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
