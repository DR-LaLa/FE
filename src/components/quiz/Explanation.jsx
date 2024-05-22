import MainProvider from "../../provider/MainProvider";
import QuizProvider from "../../provider/QuizProvider";
import Header from "../common/Header";
import MainFrame from "../common/MainFrame";
import ExplanationText from "./ExplanationText";

export default function Explanation() {
  return (
    <>
      <MainProvider>
        <Header show={"false"} anime={"none"} />
      </MainProvider>
      <ExplanationText />
    </>
  );
}
