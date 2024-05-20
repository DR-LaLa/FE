import styled from "styled-components";

export default function QuizFrame(props) {
  return <QuizSection>{props.children}</QuizSection>;
}
const QuizSection = styled.section`
  width: 50vw;
  height: 73vh;
  border: 8px solid #ffcda6;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f9f9f9;
  backdrop-filter: blur(40px);
`;
