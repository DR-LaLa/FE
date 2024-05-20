import { useContext, useEffect, useState } from "react";
import { QuizContext } from "../../context/context";
import { useImmer } from "use-immer";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import QuizFrame from "../common/QuizFrame";

export default function QuizBox() {
  const {
    userCount,
    setUserCount,
    question,
    setQuestion,
    explanation,
    setExplanation,
    userAnswer,
    updateUserAnswer,
    answer,
    setAnswer,
  } = useContext(QuizContext);
  const [answerArr, updateAnswerArr] = useImmer([]);
  const navigate = useNavigate();
  const QUIZINPO = "quizInpo";
  useEffect(() => {
    GetQuizQuestion(setUserCount, setQuestion, updateAnswerArr, setExplanation, setAnswer);
  }, []);
  return (
    <QuizFrame>
      <Question>{`Q.  ${question} 이것에 대한 정답은 무엇일까요?`}</Question>
      <AnswerBox>
        {answerArr.map((a, n) => (
          <Answer
            onClick={() => {
              setUserCount((prev) => (prev = Number(prev) + 1));
              updateUserAnswer((obj) => {
                obj.answer = a.answer;
                obj.result = a.result;
              });
            }}
            key={n}
          >
            {a.answer}
          </Answer>
        ))}
      </AnswerBox>
      <SelectButton
        onClick={() => {
          console.log(userCount);
          const obj = {
            userCount: userCount,
            question: question,
            explanation: explanation,
            userAnswer: userAnswer,
            answer: answer,
          };
          localStorage.setItem(QUIZINPO, JSON.stringify(obj));
          navigate("/explanation");
        }}
      >
        선택했어요
      </SelectButton>
    </QuizFrame>
  );
}

const Question = styled.p`
  width: 80%;
  font-size: 40px;
`;

const AnswerBox = styled.section`
  width: 80%;
  height: 40%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  /* background-color: yellowgreen; */
`;

const Answer = styled.p`
  width: 45%;
  height: 45%;
  border-radius: 20px;
  border: 3px solid #ffbc89;
  font-size: 23px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffeada;
`;

const SelectButton = styled.button`
  width: 30%;
  height: 12%;
  border-radius: 20px;
  border: 3px solid #ffbc89;
  color: #f9f9f9;
  font-size: 20px;
  font-weight: 900;
  background-color: #ff9748;
  outline: none;
`;

async function GetQuizQuestion(userCount, question, answerArr, explanation, answer) {
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
      answer(data.quiz.example[e]);
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