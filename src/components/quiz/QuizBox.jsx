import { useContext, useEffect, useState } from "react";
import { QuizContext } from "../../context/context";
import { useImmer } from "use-immer";
import styled from "styled-components";

export default function QuizBox() {
  const { userCount, setUserCount, question, setQuestion, explanation, setExplanation, userAnswer, updateUserAnswer } =
    useContext(QuizContext);
  const [answerArr, updateAnswerArr] = useImmer([]);

  useEffect(() => {
    GetQuizQuestion(setUserCount, setQuestion, updateAnswerArr, setExplanation, userAnswer);
  }, []);
  return (
    <QuizSection>
      <Question>{`Q.${question}`}</Question>
      <h1> 이것에 대한 정답은 무엇일까요?</h1>
      <AnswerBox>
        {answerArr.map((a, n) => (
          <Answer
            onClick={() => {
              updateUserAnswer((obj) => {
                obj = a;
              });
            }}
            key={n}
          >
            {a.answer}
          </Answer>
        ))}
      </AnswerBox>
      <button>선택했어요</button>
    </QuizSection>
  );
}

const QuizSection = styled.section`
  width: 50vw;
  height: 73vh;
  border: 8px solid #ffcda6;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f9f9f9;
  backdrop-filter: blur(40px);
`;
const Question = styled.h1`
  /* margin-top: 5vh; */
  font-size: 40px;
`;

const AnswerBox = styled.section`
  width: 80%;
  height: 30%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  background-color: yellowgreen;
`;

const Answer = styled.p`
  width: 45%;
  height: 45%;
  border-radius: 30px;
  border: 3px solid #ffbc89;
  background: #ffeada;
`;

async function GetQuizQuestion(userCount, question, answerArr, explanation) {
  const response = await fetch(`json/quiz.json`);
  const data = await response.json();

  userCount(data.user.count);

  question(data.quiz.problem);

  for (let e in data.quiz.example) {
    let obj = {
      answer: "",
      result: "",
    };
    obj.answer = data.quiz.example[e];
    if (e == "answer") {
      obj.result = true;
    } else {
      obj.result = false;
    }
    answerArr((arr) => {
      if (arr.length < 4) {
        arr.push(obj);
      }
    });
  }

  explanation(data.quiz.explanation);
}
