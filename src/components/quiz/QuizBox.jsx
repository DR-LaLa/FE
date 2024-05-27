import { useContext, useEffect, useRef, useState } from "react";
import { QuizContext } from "../../context/context";
import { useImmer } from "use-immer";
import styled from "styled-components";
import QuizFrame from "../common/QuizFrame";
import Explanation from "./Explanation";
import ConfirmChoice from "./ConfirmChoice";
import { USERDATA } from "../common/key";
import MultipleQuiz from "./MultipleQuiz";
import OxQuiz from "./OxQuiz";

export default function QuizBox() {
  const {
    setUserCount,
    question,
    setQuestion,
    setExplanation,
    updateUserAnswer,
    setAnswer,
    showModal,
    setShowModal,
    showExplanation,
    updateAnswerArr,
    quizType,
    setQuizType,
  } = useContext(QuizContext);

  const userData = JSON.parse(localStorage.getItem(USERDATA));

  useEffect(() => {
    GetQuizQuestion(setUserCount, setQuestion, updateAnswerArr, setExplanation, setAnswer, userData, setQuizType);
  }, []);

  return (
    <>
      {showModal && <ConfirmChoice />}
      {!showExplanation ? quizType == "m" ? <MultipleQuiz /> : <OxQuiz /> : <Explanation />}
    </>
  );
}
async function GetQuizQuestion(userCount, question, answerArr, explanation, answer, userData, setQuizType) {
  const response = await fetch(`http://localhost:8080/main/quiz/${userData.id}`);
  // const response = await fetch("json/quiz.json");
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
      obj.result = "true";
    } else {
      if (data.quiz.example[e] == null) {
        setQuizType("o");
      }
      obj.result = "false";
    }
    answerArr((arr) => {
      if (arr.length < 4) {
        arr.push(obj);
      }
    });
  }
  explanation(data.quiz.explanation);
}
