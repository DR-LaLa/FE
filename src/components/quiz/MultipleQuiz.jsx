import { useContext, useEffect, useRef, useState } from "react";
import { QuizContext } from "../../context/context";
import styled from "styled-components";
import QuizFrame from "../common/QuizFrame";

export default function MultipleQuiz() {
  const { updateUserAnswer, setShowModal, answerArr, updateAnswerArr, question, selectedAns, setSlectedAns, answers } =
    useContext(QuizContext);

  let ref = useRef();
  useEffect(() => {
    let set = new Set();
    while (set.size != 4) {
      set.add(Math.floor(Math.random() * 4));
      ref.current = Array.from(set);
    }
  }, []);

  function select(n) {
    for (let i = 0; i < 4; i++) {
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
        <Question>{`Q.${question}`}</Question>
        <AnswerBox>
          {answerArr.map((a, n) => {
            return (
              <Answer
                ref={(el) => (answers.current[n] = el)}
                onClick={(e) => {
                  select(n);
                  console.log(answerArr[ref.current[n]]);
                  updateUserAnswer((obj) => {
                    obj.answer = answerArr[ref.current[n]].answer;
                    obj.result = answerArr[ref.current[n]].result;
                  });
                  setSlectedAns("true");
                }}
                key={n}
              >
                {answerArr[ref.current[n]].answer}
              </Answer>
            );
          })}
        </AnswerBox>
        <SelectButton
          $slectedState={selectedAns}
          onClick={() => {
            setShowModal(true);
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
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

const Answer = styled.p`
  width: 45%;
  height: 45%;
  border-radius: 20px;
  border: 3px solid #ffd1af;
  font-size: 23px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffeada;
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
