import { useContext, useEffect } from "react";
import { IsLoginContext, QuizContext } from "../../context/context";
import ConfirmChoice from "./ConfirmChoice";
import MultipleQuiz from "./MultipleQuiz";
import OxQuiz from "./OxQuiz";

export default function QuizBox() {
  const { setUserCount, setQuestion, setExplanation, setAnswer, showModal, updateAnswerArr, quizType, setQuizType } =
    useContext(QuizContext);

  const { userData } = useContext(IsLoginContext);

  useEffect(() => {
    GetQuizQuestion(setUserCount, setQuestion, updateAnswerArr, setExplanation, setAnswer, userData, setQuizType);
  }, []);

  return (
    <>
      {showModal && <ConfirmChoice />}
      {quizType == "m" ? <MultipleQuiz /> : <OxQuiz />}
    </>
  );
}
async function GetQuizQuestion(userCount, question, answerArr, explanation, answer, userData, setQuizType) {
  try {
    const response = await fetch(`http://15.164.128.251:8080/main/quiz/${userData.loginid}`);
    const data = await response.json();
    console.log(data);
    userCount(data.user.count);

    question(data.quiz.problem);

    for (let e in data.quiz.example) {
      let obj = {
        answer: "",
        result: "",
      };

      obj.answer = data.quiz.example[e];

      if (e == "answer") {
        answer(data.quiz.example[e]); // 정답 체크
        obj.result = "true";
      } else {
        if (data.quiz.example[e] == null) {
          setQuizType("o"); // 퀴즈 타입 체크 3번째 답 부터 null이 나오면 퀴즈 타입은 ox
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
  } catch (e) {
    console.log(e);
  }
}
