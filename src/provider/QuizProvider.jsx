import { useState } from "react";
import { QuizContext } from "../context/context";
import { useImmer } from "use-immer";

export default function QuizProvider(props) {
  const QUIZINPO = "quizInpo";
  const parseObj = localStorage.getItem(QUIZINPO) ? JSON.parse(localStorage.getItem(QUIZINPO)) : obj;
  const [userCount, setUserCount] = useState(parseObj.userCount);
  const [question, setQuestion] = useState(parseObj.question);
  const [explanation, setExplanation] = useState(parseObj.explanation);
  const [userAnswer, updateUserAnswer] = useImmer(parseObj.userAnswer);
  const [answer, setAnswer] = useState(parseObj.answer);
  return (
    <QuizContext.Provider
      value={{
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
      }}
    >
      {props.children}
    </QuizContext.Provider>
  );
}

const obj = {
  userCount: 0,
  question: "",
  explanation: "",
  userAnswer: {
    answer: "",
    result: "",
  },
  answer: "",
};
