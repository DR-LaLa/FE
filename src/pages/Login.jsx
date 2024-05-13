import styled from "styled-components";
import FormFrame from "../components/common/FormFrame";
import Header from "../components/common/Header";
import MainFrame from "../components/common/MainFrame";
import MainProvider from "../provider/MainProvider";
import SignupProvider from "../provider/SignupProvider";
import InputBox from "../components/login/InputBox";
import LoginProvider from "../provider/LoginProvider";

export default function Login() {
  return (
    <>
      <MainProvider>
        <Header show={"false"} />
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
