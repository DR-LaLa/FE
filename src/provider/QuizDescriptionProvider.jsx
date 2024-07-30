import { useImmer } from "use-immer";
import { QuizDescriptionContext } from "../context/context";
import { useMemo } from "react";

export default function QuizDescriptionProvider({ children }) {
  const [quizObj, updateQuizObj] = useImmer(obj);
  const value = useMemo(() => ({ quizObj, updateQuizObj }), [quizObj, updateQuizObj]);
  return <QuizDescriptionContext.Provider value={value}>{children}</QuizDescriptionContext.Provider>;
}

const obj = {
  userAnswer: {
    answer: "",
    result: "",
  },
  question: "",
  explanation: "",
  userCount: 0,
  answer: "",
};
