import { useEffect, useState } from "react";
import MainProvider from "../../provider/MainProvider";
import Header from "../common/Header";
import MainFrame from "../common/MainFrame";
import QuizProvider from "../../provider/QuizProvider";
import QuizBox from "./QuizBox";

export default function QuizPlay() {
  return (
    <>
      <MainProvider>
        <Header show={"false"} anime={"none"} />
      </MainProvider>
      <MainFrame>
        <QuizProvider>
          <QuizBox />
        </QuizProvider>
      </MainFrame>
    </>
  );
}
