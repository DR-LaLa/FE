import { useState } from "react";
import FormFrame from "../components/common/FormFrame";
import styled from "styled-components";
import Header from "../components/common/Header";
import MainFrame from "../components/common/MainFrame";
import MainProvider from "../provider/MainProvider";
import InputBox from "../components/Signup/InputBox";
import SignupProvider from "../provider/SignupProvider";
import LoginProvider from "../provider/LoginProvider";

export default function SignUp() {
  return (
    <>
      <MainProvider>
        <Header show={"false"} />
      </MainProvider>
      <MainFrame>
        <SignupProvider>
          <LoginProvider>
            <FormFrame>
              <InputBox />
            </FormFrame>
          </LoginProvider>
        </SignupProvider>
      </MainFrame>
    </>
  );
}
