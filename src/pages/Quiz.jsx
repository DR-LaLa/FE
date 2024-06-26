import Header from "../components/common/Header";
import MainFrame from "../components/common/MainFrame";
import MainProvider from "../provider/MainProvider";
import QuizMain from "../components/quiz/QuizMain";
import styled from "styled-components";

export default function Quiz() {
  return (
    <>
      <MainProvider>
        <Header show={"false"} anime={"quiz"} />
      </MainProvider>
      <MainFrame>
        <QuizMain />
      </MainFrame>
    </>
  );
}
