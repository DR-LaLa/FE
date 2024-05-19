import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function QuizeMain() {
  const [average, setAverage] = useState(0);
  const navigation = useNavigate();
  return (
    <>
      <ImgLeftTopRedMedicine src="img/red.png" alt="" />
      <ImgRightTopRedMedicine src="img/red.png" alt="" />
      <ImgRightTopWhiteMedicine src="img/white.png" alt="" />
      <ImgLeftBottomRedMedicine src="img/red.png" alt="" />
      <ImgLeftBottomWhiteMedicine1 src="img/white.png" alt="" />
      <ImgLeftBottomWhiteMedicine2 src="img/white.png" alt="" />
      <ImgRightBottomWhiteMedicine1 src="img/white.png" alt="" />
      <ImgRightBottomWhiteMedicine2 src="img/white.png" alt="" />
      <ImgRightBottomWhiteMedicine3 src="img/white.png" alt="" />
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
    </>
  );
}

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
  font-size: 50px;
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
  top: 3vh;
  left: 19vw;
  transform: rotate(190deg);
  z-index: 3;
`;

const ImgRightTopRedMedicine = styled.img`
  width: 13vw;
  position: absolute;
  top: 2vh;
  right: 19vw;
  transform: rotate(115deg);
  z-index: 3;
`;

const ImgRightTopWhiteMedicine = styled.img`
  width: 4vw;
  position: absolute;
  top: 20vh;
  right: 23vw;
  z-index: 3;
`;

const ImgLeftBottomRedMedicine = styled.img`
  width: 13vw;
  position: absolute;
  bottom: 4vh;
  left: 19vw;
  transform: rotate(-250deg);
  z-index: 3;
`;

const ImgLeftBottomWhiteMedicine1 = styled.img`
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 5vh;
  left: 21vw;
  z-index: 3;
`;

const ImgLeftBottomWhiteMedicine2 = styled.img`
  width: 60px;
  height: 60px;
  position: absolute;
  bottom: 4vh;
  left: 18.5vw;
  z-index: 3;
`;

const ImgRightBottomWhiteMedicine1 = styled.img`
  width: 8vw;
  position: absolute;
  bottom: 10vh;
  right: 22vw;
  z-index: 3;
`;

const ImgRightBottomWhiteMedicine2 = styled.img`
  width: 6vw;
  border-radius: 100%;
  position: absolute;
  bottom: 10vh;
  right: 18vw;
  z-index: 3;
  box-shadow: -3px 4px 5px 0px rgba(0, 0, 0, 0.129);
`;
const ImgRightBottomWhiteMedicine3 = styled.img`
  width: 5vw;
  border-radius: 100%;
  position: absolute;
  bottom: 5vh;
  right: 22vw;
  z-index: 3;
  box-shadow: -3px 4px 5px 0px rgba(0, 0, 0, 0.129);
`;
