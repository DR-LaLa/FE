import { useContext } from "react";
import { QuizContext, QuizDescriptionContext } from "../../context/context";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function ConfirmChoice() {
  const { setShowModal } = useContext(QuizContext);
  const navigate = useNavigate();

  const { updateQuizObj, quizObj } = useContext(QuizDescriptionContext);

  return (
    <ModalBox>
      <h3>{`"${quizObj.userAnswer.answer}"을/를 답으로 선택하시겠습니까?`}</h3>
      <section>
        <ButtonStyle
          $use={"cancel"}
          onClick={() => {
            setShowModal(false);
          }}
        >
          취소
        </ButtonStyle>
        <ButtonStyle
          $use={"confirm"}
          onClick={() => {
            updateQuizObj((obj) => {
              obj.userCount = obj.userCount + 1;
            });
            setShowModal(false);
            navigate("/explanation");
          }}
        >
          확인
        </ButtonStyle>
      </section>
    </ModalBox>
  );
}

const ModalBox = styled.section`
  width: 25vw;
  height: 20vh;
  border: 5px solid #ff9748;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  background-color: #f9f9f9;
  z-index: 3;
`;

const ButtonStyle = styled.button`
  margin: 0 0.5vw 0 0.5vw;
  width: 8vw;
  height: 5vh;
  border: none;
  border-radius: 10px;
  color: ${(props) => (props.$use == "cancel" ? "#494949" : "#f9f9f9")};
  background-color: ${(props) => (props.$use == "cancel" ? "#DBD5D0" : "#ff9748")};
  outline: none;
  cursor: pointer;
`;
