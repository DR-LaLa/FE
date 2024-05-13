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
  width: 35vw;
  position: relative;
  top: 5vh;
`;
