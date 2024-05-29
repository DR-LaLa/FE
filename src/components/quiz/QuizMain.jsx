import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function QuizeMain() {
  const [average, setAverage] = useState(0);
  const navigation = useNavigate();
  return (
    <Anime>
      <section>
        <ImgLeftTopRedMedicine src="img/red.png" alt="" />
        <ImgRightTopRedMedicine src="img/red.png" alt="" />
        <ImgRightTopWhiteMedicine src="img/white.png" alt="" />
        <ImgLeftBottomRedMedicine src="img/red.png" alt="" />
        <ImgLeftBottomWhiteMedicine1 src="img/white.png" alt="" />
        <ImgLeftBottomWhiteMedicine2 src="img/white.png" alt="" />
        <ImgRightBottomWhiteMedicine1 src="img/white.png" alt="" />
        <ImgRightBottomWhiteMedicine2 src="img/white.png" alt="" />
        <ImgRightBottomWhiteMedicine3 src="img/white.png" alt="" />
      </section>
      <QuizeFrame>
        <TextBox>
          <QuizTitle>오늘의 퀴즈</QuizTitle>
          <h2>⭐ 건강한 지식 바로알기 ⭐</h2>
          <AverageText>{`지금 사람들은 ${average}문제 풀었어요`}</AverageText>
        </TextBox>
        <StartButton
          onClick={() => {
            navigation("/playQuiz");
          }}
        >
          START
        </StartButton>
      </QuizeFrame>
    </Anime>
  );
}

const Anime = styled.section`
  position: relative;
  animation-name: move;
  animation-duration: 0.7s;
  animation-iteration-count: 1;

  @keyframes move {
    0% {
      opacity: 0;
      left: 10vw;
    }
    100% {
      left: 0vw;
      opacity: 1;
    }
  }
`;

const QuizeFrame = styled.section`
  width: 50vw;
  height: 73vh;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 3px 8px 15px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  background: rgba(255, 255, 255, 0.7);
`;

const TextBox = styled.section`
  width: 100%;
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  bottom: 5vh;
`;

const QuizTitle = styled.h1`
  @font-face {
    font-family: "ONE-Mobile-POP";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-POP.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }

  color: #ff4f4f;
  font-size: 60px;
  font-weight: 100;
  letter-spacing: 10px;
  font-family: "ONE-Mobile-POP";
`;

const AverageText = styled.p`
  color: #ff9748;
  font-size: 18px;
  font-weight: 900;
  position: relative;
  bottom: 1vh;
`;

const StartButton = styled.button`
  width: 15vw;
  height: 7vh;
  border: none;
  border-radius: 50px;
  color: #f9f9f9;
  font-size: 25px;
  font-weight: 900;
  letter-spacing: 2px;
  background-color: #ff9748;
  outline: none;
  cursor: pointer;
`;

const ImgLeftTopRedMedicine = styled.img`
  width: 13vw;
  position: absolute;
  top: -11vh;
  left: -6vw;
  transform: rotate(190deg);
  z-index: 3;
`;

const ImgRightTopRedMedicine = styled.img`
  width: 13vw;
  position: absolute;
  top: -11vh;
  right: -6vw;
  transform: rotate(115deg);
  z-index: 3;
`;

const ImgRightTopWhiteMedicine = styled.img`
  width: 5vw;
  position: absolute;
  top: 6vh;
  right: -2vw;
  z-index: 3;
`;

const ImgLeftBottomRedMedicine = styled.img`
  width: 13vw;
  position: absolute;
  bottom: -8vh;
  left: -5vw;
  transform: rotate(-250deg);
  z-index: 3;
`;

const ImgLeftBottomWhiteMedicine1 = styled.img`
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: -8vh;
  left: -3vw;
  z-index: 3;
`;

const ImgLeftBottomWhiteMedicine2 = styled.img`
  width: 60px;
  height: 60px;
  position: absolute;
  bottom: -9vh;
  left: 1vw;
  z-index: 3;
`;

const ImgRightBottomWhiteMedicine1 = styled.img`
  width: 8vw;
  position: absolute;
  bottom: -6vh;
  right: -4vw;
  z-index: 3;
`;

const ImgRightBottomWhiteMedicine2 = styled.img`
  width: 6vw;
  border-radius: 100%;
  position: absolute;
  bottom: -6vh;
  right: -9vw;
  z-index: 3;
  box-shadow: -3px 4px 5px 0px rgba(0, 0, 0, 0.129);
`;
const ImgRightBottomWhiteMedicine3 = styled.img`
  width: 5vw;
  border-radius: 100%;
  position: absolute;
  bottom: -9vh;
  right: -5vw;
  z-index: 3;
  box-shadow: -3px 4px 5px 0px rgba(0, 0, 0, 0.129);
`;
