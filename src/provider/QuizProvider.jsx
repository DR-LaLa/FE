import { useRef, useState } from "react";
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
  const [answerArr, updateAnswerArr] = useImmer([]);
  const [quizType, setQuizType] = useState("m");
  const [selectedAns, setSlectedAns] = useState("false");
  const answers = useRef([]);
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
        answerArr,
        updateAnswerArr,
        quizType,
        setQuizType,
        selectedAns,
        setSlectedAns,
        answers,
      }}
    >
      {props.children}
    </QuizContext.Provider>
  );
}

const obj = {
  answer: "",
  result: "",
};
