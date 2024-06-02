import styled from "styled-components";
import Header from "../components/common/Header";
import MainFrame from "../components/common/MainFrame";
import { useEffect, useState } from "react";
import MainProvider from "../provider/MainProvider";
import { USERDATA } from "../components/common/key";
import InpoBox from "../components/setting/InpoBox";

export default function Setting() {
  const [level, setLevel] = useState(0);
  const [userData, setUserData] = useState(
    localStorage.getItem(USERDATA) ? JSON.parse(localStorage.getItem(USERDATA)) : ""
  );
  const [showInpo, setShowinpo] = useState("none");
  const imgArr = [
    "img/애가.png",
    "img/유딩.png",
    "img/초딩.png",
    "img/중딩.png",
    "img/고3.png",
    "img/대1.png",
    "img/대학원생.png",
    "img/의사.png",
    "img/수술의사.png",
  ];

  useEffect(() => {
    setFetch(setLevel, userData);
  }, []);
  return (
    <MainProvider>
      <Header show={"true"} anime={"setting"}>
        <SettingTool>
          <UserInpo $nameLength={userData.nickname.length}>
            <UserLevel>{`Lv ${Math.floor(level / 30)}`}</UserLevel>
            <span>{`\u00a0\u00a0${userData.nickname}`}</span>
          </UserInpo>
          <Span
            onClick={() => {
              setShowinpo("logout");
              // localStorage.removeItem(USERDATA);
            }}
          >
            로그아웃
          </Span>
          <Span
            onClick={() => {
              setShowinpo("developer");
            }}
          >
            개발자 정보
          </Span>
          <Span
            onClick={() => {
              setShowinpo("email");
            }}
          >
            문의 메일
          </Span>
        </SettingTool>
      </Header>
      <MainFrame>
        {showInpo == "logout" && (
          <InpoBox close={setShowinpo} state={showInpo}>
            <span>로그아웃 하시겠습니까?</span>
          </InpoBox>
        )}
        {showInpo == "developer" && (
          <InpoBox close={setShowinpo}>
            <span>FRONTEND 서예린</span>
            <span>BACKEND 황서은</span>
            <span>BACKEND 류동하</span>
          </InpoBox>
        )}
        {showInpo == "email" && (
          <InpoBox close={setShowinpo}>
            <span>seyerin12@naver.com</span>
          </InpoBox>
        )}
        <section>
          <Img src={imgArr[Math.floor(level / 10)]} alt="" />
        </section>
      </MainFrame>
    </MainProvider>
  );
}
async function setFetch(setLevel, userData) {
  try {
    // const response = await fetch("json/set.json");
    const response = await fetch(`http://localhost:8080/main/quizcount/${userData.loginid}`);
    const data = await response.json();
    setLevel(data.count);
  } catch (err) {
    console.log(err);
  }
}
const Img = styled.img`
  width: 22vw;
  position: relative;
  animation-name: move;
  animation-duration: 1s;
  animation-iteration-count: 1;

  @keyframes move {
    0% {
      width: 15vw;
      left: -5vw;
    }
    100% {
      width: 22vw;
      left: 0vw;
    }
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
  animation-name: showText;
  animation-iteration-count: 1;
  animation-duration: 0.6s;
  transition-duration: 0.6s;

  @keyframes showText {
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

const UserInpo = styled.section`
  width: ${(props) => (props.$nameLength > 0 ? `${125 + props.$nameLength * 25.95}px` : "125px")};
  height: auto;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const UserLevel = styled.span`
  font-size: 25px;
  position: absolute;
  left: 0;
`;

const Span = styled.span`
  cursor: pointer;
`;
