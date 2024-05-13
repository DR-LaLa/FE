import styled from "styled-components";
import Header from "../components/common/Header";
import MainFrame from "../components/common/MainFrame";
import { useEffect, useState } from "react";
import MainProvider from "../provider/MainProvider";

export default function Setting() {
  const USERNAME = "userName";
  const [level, setLevel] = useState("1");
  const [userName, setUserName] = useState(localStorage.getItem(USERNAME) ? localStorage.getItem(USERNAME) : "");

  async function setFetch() {
    try {
      const response = await fetch("json/set.json");
      const data = await response.json();
      setLevel(Math.floor(data.count / 30));
    } catch (err) {}
  }

  useEffect(() => {
    setFetch();
    console.log(level);
  }, []);
  return (
    <MainProvider>
      <Header show={"true"} anime={"setting"}>
        <SettingTool>
          <UserInpo $nameLength={userName.length}>
            <UserLevel>{`Lv ${level}`}</UserLevel>
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
  width: 42vw;
  position: relative;
  top: 3vh;
  left: 10vw;
  animation-name: move;
  animation-duration: 1s;
  animation-iteration-count: 1;

  @keyframes move {
    0% {
      width: 35vw;
      top: 5.2vh;
      left: 0;
    }
    100% {
      width: 42vw;
      top: 3vh;
      left: 10vw;
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
  /* width: 50%; */
  /* width: 200px; */
  width: ${(props) => (props.$nameLength > 0 ? `${125 + props.$nameLength * 25.95}px` : "125px")};
  height: auto;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* background-color: aqua; */
`;

const UserLevel = styled.span`
  font-size: 25px;
  position: absolute;
  left: 0;
`;
