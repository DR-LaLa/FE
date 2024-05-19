import { useState } from "react";
import { QuizContext } from "../context/context";
import { useImmer } from "use-immer";

export default function QuizProvider(props) {
  const [userCount, setUserCount] = useState(0);
  const [question, setQuestion] = useState("q");
  const [explanation, setExplanation] = useState("");
  const [userAnswer, updateUserAnswer] = useImmer({});
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
      }}
    >
      {props.children}
    </QuizContext.Provider>
  );
}
