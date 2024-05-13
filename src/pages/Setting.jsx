import styled from "styled-components";
import Header from "../components/common/Header";
import MainFrame from "../components/common/MainFrame";
import { useState } from "react";
import MainProvider from "../provider/MainProvider";

export default function Setting() {
  const [level, setLevel] = useState("1");
  const [userName, setUserName] = useState("얼렁뚱땅얼렁뚱땅라라");
  return (
    <MainProvider>
      <Header show={"true"} anime={"setting"}>
        <SettingTool>
          <UserInpo>
            <UserLevel>{`LV ${level}`}</UserLevel>
            <span>{`\u00a0\u00a0${userName}`}</span>
          </UserInpo>
          <span>로그아웃</span>
          <span>개발자 정보</span>
          <span>문의 메일</span>
        </SettingTool>
      </Header>
      <MainFrame>
        <section>
          <Img src="img/유딩.png" alt="" />
        </section>
      </MainFrame>
    </MainProvider>
  );
}

const Img = styled.img`
  width: 40vw;
  position: absolute;
  top: 70px;
  right: 0;
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
  animation-duration: 1s;
  transition-duration: 1s;

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
  width: 85%;
  height: auto;
  font-size: 30px;
  display: flex;
  justify-content: center;
  position: relative;
  /* background-color: aqua; */
`;

const UserLevel = styled.span`
  position: absolute;
  left: 0;
`;
