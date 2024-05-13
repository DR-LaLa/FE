import styled from "styled-components";
import Header from "../components/common/Header";
import MainFrame from "../components/common/MainFrame";
import MainProvider from "../provider/MainProvider";

export default function Main() {
  return (
    <MainProvider>
      <Header show={"true"} />
      <MainFrame>
        <Img src="img/유딩.png" alt="" />
      </MainFrame>
    </MainProvider>
  );
}

const Img = styled.img`
  width: 35vw;
  position: relative;
  top: 5vh;
`;
