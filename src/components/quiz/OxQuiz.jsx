import styled from "styled-components";
import QuizFrame from "../common/QuizFrame";
import { useContext } from "react";
import { QuizContext, QuizDescriptionContext } from "../../context/context";

export default function OxQuiz() {
  const { setShowModal, answerArr, question, selectedAns, setSlectedAns, answers, explanation, userCount, answer } =
    useContext(QuizContext);

  const { updateQuizObj } = useContext(QuizDescriptionContext);
  function select(n, ans) {
    let tmp = answerArr.filter((x) => x.answer == ans)[0];
    updateQuizObj((obj) => {
      obj.userAnswer.answer = tmp.answer;
      obj.userAnswer.result = tmp.result;
    });
    for (let i = 0; i <= 1; i++) {
      if (i == n) {
        answers.current[i].style.setProperty("border", "3px solid #FF9748");
      } else {
        answers.current[i].style.setProperty("border", "3px solid #ffd1af");
      }
    }
  }
  return (
    <>
      <QuizFrame>
        <Question>{`Q.  ${question}`}</Question>
        <AnswerBox>
          <Answer
            $color={"blue"}
            ref={(el) => (answers.current[0] = el)}
            onClick={() => {
              select(0, "o");
              setSlectedAns("true");
            }}
          >
            {"o"}
            <SubText>{"맞아요"}</SubText>
          </Answer>
          <Answer
            $color={"red"}
            ref={(el) => (answers.current[1] = el)}
            onClick={() => {
              select(1, "x");
              setSlectedAns("true");
            }}
          >
            {`x`}
            <SubText>{"아니에요"}</SubText>
          </Answer>
        </AnswerBox>
        <SelectButton
          $slectedState={selectedAns}
          onClick={() => {
            setShowModal(true);

            updateQuizObj((obj) => {
              obj.question = question;
              obj.explanation = explanation;
              obj.userCount = userCount;
              obj.answer = answer;
            });
          }}
        >
          {selectedAns == "false" ? "답을 선택해주세요" : "선택했어요"}
        </SelectButton>
      </QuizFrame>
    </>
  );
}

const Question = styled.p`
  width: 80%;
  font-size: 40px;
`;

const AnswerBox = styled.section`
  width: 80%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Answer = styled.p`
  padding-left: 10%;
  width: 75%;
  height: 35%;
  border-radius: 20px;
  border: 3px solid #ffd1af;
  color: ${(props) => props.$color};
  font-size: 23px;
  font-weight: 900;
  display: flex;
  justify-content: start;
  align-items: center;
  background: #ffeada;
`;

const SubText = styled.span`
  margin-left: 2vw;
  color: black;
  font-size: 17px;
`;

const SelectButton = styled.button`
  width: 30%;
  height: 12%;
  border-radius: 20px;
  border: 3px solid ${(props) => (props.$slectedState == "false" ? "#DBD5D0" : "#ffbc89")};
  color: ${(props) => (props.$slectedState == "false" ? "#6D6D6D" : "#f9f9f9")};
  font-size: 20px;
  font-weight: 900;
  background-color: ${(props) => (props.$slectedState == "false" ? "#DBD5D0" : "#ff9748")};
  outline: none;
`;
