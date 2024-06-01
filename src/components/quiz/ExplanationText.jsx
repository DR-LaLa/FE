import { useContext } from "react";
import { QuizContext } from "../../context/context";
import QuizFrame from "../common/QuizFrame";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { USERDATA } from "../common/key";
import { QUIZDATA } from "../common/key";

export default function ExplanationText() {
  const { userCount, question, explanation, userAnswer, answer, setShowExplanation, showExplanation } =
    useContext(QuizContext);
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem(USERDATA));
  const quizObj = JSON.parse(localStorage.getItem(QUIZDATA));

  return (
    <QuizFrame>
      <ScrollSection>
        <Question>{`Q. ${quizObj.question} 이것에 대한 답은 무엇인가?`}</Question>
        <AnswerBox>
          <Answer $ansCheck={"none"}>{`정답: ${quizObj.answer}`}</Answer>
          <Answer $ansCheck={quizObj.userAnswer.result}>{`내가 고른 답: ${quizObj.userAnswer.answer}`}</Answer>
        </AnswerBox>
        <ExplanationBox>
          <ExplanationTitle>해설</ExplanationTitle>
          <Explanation>{quizObj.explanation}</Explanation>
        </ExplanationBox>
        <ButtonBox>
          <Button
            onClick={() => {
              sendCount(userData, quizObj.userCount, navigate);
              localStorage.removeItem(QUIZDATA);
            }}
          >
            나가기
          </Button>
          <Button
            onClick={() => {
              sendCount(userData, quizObj.userCount, navigate);
              navigate("/playquiz");
            }}
          >
            다음 퀴즈
          </Button>
        </ButtonBox>
      </ScrollSection>
    </QuizFrame>
  );
}

async function sendCount(userData, body, navigate) {
  try {
    const response = await fetch(`http://localhost:8080/main/update/${userData.loginid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    navigate("/");
  } catch (err) {
    console.log(err);
  }
}

const ScrollSection = styled.section`
  width: 96%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-y: auto;

  &&::-webkit-scrollbar {
    width: 7px;
  }
  &&::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #ff9748;
  }
`;

const Question = styled.p`
  margin-top: 5vh;
  padding: 30px;
  width: 40vw;
  border-radius: 20px;
  font-size: 35px;
  background-color: #ffeada;
`;

const AnswerBox = styled.section`
  margin: 3vh 0 3vh 0;
  width: 42vw;
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-shrink: 0;
`;

const Answer = styled.p`
  font-size: 17px;
  font-weight: 900;
  color: ${(props) => (props.$ansCheck == "none" ? "black" : props.$ansCheck == "true" ? "blue" : "red")};
`;

const ExplanationBox = styled.section`
  margin-bottom: 3vh;
  width: 42vw;
  height: auto;
  flex-shrink: 0;
`;

const ExplanationTitle = styled.span`
  color: #d8ad8c;
`;

const Explanation = styled.p`
  padding: 3vh 3% 3vh 3%;
  width: 94%;
  height: auto;
  flex-shrink: 0;
  border-radius: 20px;
  border: 3px solid #ffbc89;
  background: #f9f9f9;
  word-wrap: break-word;
`;

const ButtonBox = styled.section`
  width: 80%;
  height: 15vh;
  flex-shrink: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Button = styled.button`
  width: 10vw;
  height: 7vh;
  border: none;
  border-radius: 10px;
  color: #f9f9f9;
  font-size: 20px;
  font-weight: 900;
  flex-shrink: 0;
  background-color: #ff9748;
  outline: none;
`;
