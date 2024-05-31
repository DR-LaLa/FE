import styled from "styled-components";
import FormFrame from "../components/common/FormFrame";
import Header from "../components/common/Header";
import MainFrame from "../components/common/MainFrame";
import MainProvider from "../provider/MainProvider";
import SignupProvider from "../provider/SignupProvider";
import InputBox from "../components/login/InputBox";
import LoginProvider from "../provider/LoginProvider";
import { USERDATA } from "../components/common/key";

export default function Login() {
  localStorage.setItem(
    USERDATA,
    JSON.stringify({
      id: "seyerin",
      nickname: "라틴킹",
    })
  );
  return (
    <>
      <MainProvider>
        <Header show={"false"} anime={"none"} />
      </MainProvider>
      <MainFrame>
        <SignupProvider>
          <LoginProvider>
            <FormFrame>
              <Title>LOGIN</Title>
              <InputBox />
            </FormFrame>
          </LoginProvider>
        </SignupProvider>
      </MainFrame>
    </>
  );
}

const Title = styled.h1`
  font-size: 35px;
  letter-spacing: 5px;
  color: #ff9748;
`;
