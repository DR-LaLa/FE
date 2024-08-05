import Header from "../components/common/Header";
import MainFrame from "../components/common/MainFrame";
import MainProvider from "../provider/MainProvider";
import QuizMain from "../components/quiz/QuizMain";
import { useContext, useEffect } from "react";
import { IsLoginContext } from "../context/context";
import { useNavigate } from "react-router-dom";

export default function Quiz() {
  const { userData } = useContext(IsLoginContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userData.isLogin) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <MainProvider>
        <Header show={"false"} transform={"bigger"} />
      </MainProvider>
      <MainFrame>
        <QuizMain />
      </MainFrame>
    </>
  );
}
