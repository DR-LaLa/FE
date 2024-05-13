import styled from "styled-components";
import Header from "../components/common/Header";
import MainFrame from "../components/common/MainFrame";
import MainProvider from "../provider/MainProvider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Main() {
  const navigate = useNavigate();
  const USERNAME = "userName";
  const userName = localStorage.getItem(USERNAME) ? localStorage.getItem(USERNAME) : "";
  useEffect(() => {
    if (userName == "") {
      navigate("/login");
    }
  }, []);
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
