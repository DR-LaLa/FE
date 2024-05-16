import { useState } from "react";
import Header from "../components/common/Header";
import MainFrame from "../components/common/MainFrame";
import MainProvider from "../provider/MainProvider";
import QuizMain from "../components/quiz/QuizMain";

export default function Quiz() {
  const [state, setState] = useState("start");
  return (
    <>
      <MainProvider>
        <Header show={"false"} />
      </MainProvider>
      <MainFrame>
        <QuizMain></QuizMain>
      </MainFrame>
    </>
  );
}
