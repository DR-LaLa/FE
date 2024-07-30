import styled from "styled-components";
import Header from "../components/common/Header";
import MainFrame from "../components/common/MainFrame";
import { useContext, useEffect, useState } from "react";
import MainProvider from "../provider/MainProvider";
import InpoBox from "../components/setting/InpoBox";
import { IsLoginContext } from "../context/context";

export default function Setting() {
  const { userData } = useContext(IsLoginContext);
  const [level, setLevel] = useState(0);
  const [showInpo, setShowinpo] = useState("none");
  const [imgSize, setImgSize] = useState(0);
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

  useEffect(() => {
    setFetch(setLevel, userData);
    setTimeout(setImgSize(5), 2000);
  }, []);
  return (
    <MainProvider>
      <Header show={"true"} transform={"set"}>
        <>
          <UserInpo $nameLength={userData.nickname.length}>
            <UserLevel>{`Lv ${Math.floor(level / 30)}`}</UserLevel>
            <span>{`\u00a0\u00a0${userData.nickname}`}</span>
          </UserInpo>
          <Span
            onClick={() => {
              setShowinpo("logout");
            }}
          >
            로그아웃
          </Span>
          <Span
            onClick={() => {
              setShowinpo("email");
            }}
          >
            문의 메일
          </Span>
        </>
      </Header>
      <MainFrame>
        {showInpo == "logout" && (
          <InpoBox close={setShowinpo} state={showInpo}>
            <span>로그아웃 하시겠습니까?</span>
          </InpoBox>
        )}
        {showInpo == "email" && (
          <InpoBox close={setShowinpo}>
            <span>seyerin12@naver.com</span>
          </InpoBox>
        )}
        <section>
          <Img src={imgArr[level < 90 ? Math.floor(level / 10) : 0]} alt="" $imgSize={imgSize} />
        </section>
      </MainFrame>
    </MainProvider>
  );
}
async function setFetch(setLevel, userData) {
  try {
    // const response = await fetch("json/set.json");
    const response = await fetch(`https://15.164.128.251/main/quizcount/${userData.loginid}`);
    const data = await response.json();
    setLevel(data.count);
  } catch (err) {
    console.log(err);
  }
}
const Img = styled.img`
  width: ${(props) => (props.$imgSize == 0 ? "20vw" : "25vw")};
  position: relative;
  transition-duration: 0.7s;
  /* transform: translateX(${(props) => `${props.$imgSize}vw`}); */
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
