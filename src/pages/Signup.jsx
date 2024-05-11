import { useState } from "react";
import FormFrame from "../components/common/FormFrame";
import styled from "styled-components";
import HeaderClose from "../components/common/HeaderClose";

export default function SignUp() {
  let [passwordCheck, setPasswordCheck] = useState("a");
  return (
    <>
      <HeaderClose />
      <main>
        <FormFrame>
          <InputBox>
            <Span>NAME</Span>
            <Input type="text" />
            <IdBox>
              <Span>ID</Span>
              <DuplicationCheck>중복확인</DuplicationCheck>
            </IdBox>
            <Input type="text" />
            <Span>PASSWORD</Span>
            <Input type="password" />
            <Span>PASSWORD CHECK</Span>
            <Input type="password" name="" id="" />
            <PasswordCheckTxt $flag={passwordCheck}>
              {!passwordCheck != "true  " ? "비밀번호가 틀립니다" : "."}
            </PasswordCheckTxt>
          </InputBox>
        </FormFrame>
      </main>
    </>
  );
}

const InputBox = styled.section`
  width: 380px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Span = styled.span`
  /* margin-bottom: 7px; */
  font-size: 17px;
`;

const Input = styled.input`
  /* margin-bottom: 15px; */
  width: 380px;
  height: 30px;
  border: none;
  border-bottom: 1px solid black;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  text-indent: 10px;
  background-color: #f9f9f9;
  outline: none;
`;

const PasswordCheckTxt = styled.p`
  font-size: 11px;
  position: relative;
  bottom: 1vh;
  color: red;
  visibility: ${(props) => (props.$flag == "true" ? "hidden" : "visible")};
`;

const IdBox = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const DuplicationCheck = styled.button`
  width: 50px;
  height: 25px;
  border: none;
  border-radius: 8px;
  color: #f9f9f9;
  font-size: 11px;
  outline: none;
  background-color: #ff9748;
  cursor: pointer;
`;
