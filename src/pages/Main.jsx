import styled from "styled-components";
import Header from "../components/common/Header";
import MainFrame from "../components/common/MainFrame";
import MainProvider from "../provider/MainProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AnimationContext, IsLoginContext } from "../context/context";

export default function Main() {
  const { userData } = useContext(IsLoginContext);
  const { prevPage } = useContext(AnimationContext);
  const currentPage = useLocation().pathname;
  const navigate = useNavigate();
  const [imgSize, setImgSize] = useState(true);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!userData.isLogin) {
      navigate("/login");
    }
    setTimeout(setImgSize(false), 2000);
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
        <Img
          src={imgArr[count ? count - 1 : 0]}
          alt=""
          $imgSize={imgSize}
          $currentPage={currentPage}
          $prevPage={prevPage}
        />
      </MainFrame>
    </MainProvider>
  );
}

async function getCount(setCount, userData) {
  try {
    const response = await fetch(`http://15.164.128.251:8080/main/quizcount/${userData.loginid}`);
    const data = await response.json();
    setCount(data.count <= 90 ? Math.floor(data.count / 10) : 9);
  } catch (err) {
    console.log(err);
  }
}

const Img = styled.img`
  width: ${(props) => {
    if (props.$currentPage == "/" && props.$prevPage == "/setting") {
      return props.$imgSize ? "25vw" : "20vw";
    } else {
      return "20vw";
    }
  }};
  position: relative;
  top: 6vh;
  transition-duration: 0.7s;
  transform: ${(props) => {
    if (props.$currentPage == "/" && props.$prevPage == "/setting") {
      return props.$imgSize ? "translate(7.5vw, -5vh)" : "translate(0)";
    }
  }};
`;
