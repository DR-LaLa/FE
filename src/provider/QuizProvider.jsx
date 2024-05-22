import { useState } from "react";
import { QuizContext } from "../context/context";
import { useImmer } from "use-immer";

export default function QuizProvider(props) {
  const [userCount, setUserCount] = useState(0);
  const [question, setQuestion] = useState("");
  const [explanation, setExplanation] = useState("");
  const [userAnswer, updateUserAnswer] = useImmer(obj);
  const [answer, setAnswer] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
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
        showModal,
        setShowModal,
        showExplanation,
        setShowExplanation,
      }}
    >
      {props.children}
    </QuizContext.Provider>
  );
}

const obj = {
  answer: "a",
  result: "b",
};
