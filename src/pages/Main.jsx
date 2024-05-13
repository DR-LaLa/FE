import styled from "styled-components";
import Header from "../components/common/Header";

export default function Main() {
  return (
    <>
      <Header show={"true"} />
      <main>
        <Img src="../../public/유딩.png" alt="" />
      </main>
    </>
  );
}

const Img = styled.img`
  width: 40vw;
  position: relative;
  /* top: 5vh; */
  animation-name: move;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  transition-duration: 0.5s;

  @keyframes move {
    0% {
      top: 5vh;
    }
    50% {
      top: -3vh;
    }
    100% {
      top: 5vh;
    }
  }
`;
