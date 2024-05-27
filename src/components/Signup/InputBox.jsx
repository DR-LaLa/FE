import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { SignupContext } from "../../context/context";
import { useNavigate } from "react-router-dom";

export default function InputBox() {
  const { signUpInpo, updateSignUpInpo, duplication, setDuplication, duplicationState, setDuplicationState } =
    useContext(SignupContext);
  const [passwordCheck, setPasswordCheck] = useState("true");
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassWord, setUserPassWord] = useState("");

  return (
    <InputBoxStyle>
      <section>
        <Label>NAME</Label>
        <Input
          type="text"
          placeholder="서비스 내에서 사용할 닉네임을 5자 이내로 적어주세요"
          onChange={(e) => {
            updateSignUpInpo((obj) => {
              obj.nickname = e.target.value;
            });
          }}
          autoComplete="off"
          maxLength={5}
        />
      </section>
      <section>
        <IdBox>
          <Label>ID</Label>
          <DuplicationText>
            {duplication == true ? "" : duplication == "none" ? "아이디를 입력해주세요" : "중복된 아이디 입니다"}
          </DuplicationText>
          <DuplicationCheck
            onClick={(e) => {
              e.preventDefault();
              if (signUpInpo.loginid != "") {
                duplicationCheck(userId, setDuplication);
                setDuplicationState(true);
              } else {
                setDuplication("none");
              }
            }}
          >
            중복확인
          </DuplicationCheck>
        </IdBox>
        <Input
          type="text"
          placeholder="id를 적어주세요"
          onChange={(e) => {
            updateSignUpInpo((obj) => {
              obj.loginid = e.target.value;
            });
          }}
          autoComplete="off"
        />
      </section>
      <section>
        <Label>PASSWORD</Label>
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={(e) => {
            setUserPassWord(e.target.value);
          }}
          autoComplete="off"
        />
      </section>
      <section>
        <Label>PASSWORD CHECK</Label>
        <Input
          type="password"
          name=""
          id=""
          placeholder="비밀번호를 다시한번 입력해주세요"
          onChange={(e) => {
            if (e.target.value == userPassWord) {
              updateSignUpInpo((obj) => {
                obj.password = userPassWord;
              });
              setPasswordCheck("true");
            } else {
              setPasswordCheck("false");
            }
          }}
          autoComplete="off"
        />
        <PasswordCheckTxt $flag={passwordCheck}>
          {!passwordCheck != "true" ? "비밀번호가 틀립니다" : "."}
        </PasswordCheckTxt>
      </section>
    </InputBoxStyle>
  );
}
async function duplicationCheck(body, setDuplication) {
  try {
    const response = await fetch("json/dup.json", {
      // const response = await fetch("http//localhost:8080/signup/confirmid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    let data = await response.json();
    setDuplication(data.isSuccess);
  } catch (err) {
    console.log(err);
  }
}

const InputBoxStyle = styled.section`
  width: 25vw;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Label = styled.label`
  font-size: 17px;
`;

const Input = styled.input`
  margin: 5px 0 10px 0;
  width: 100%;
  height: 65%;
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
  color: red;
  visibility: ${(props) => (props.$flag == "true" ? "hidden" : "visible")};
`;

const IdBox = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const DuplicationText = styled.span`
  color: red;
  font-size: 13px;
  position: absolute;
  left: 1.5vw;
  bottom: 0.8vh;
`;
const DuplicationCheck = styled.button`
  width: 15%;
  height: 3vh;
  border: none;
  border-radius: 8px;
  color: #f9f9f9;
  font-size: 11px;
  outline: none;
  background-color: #ff9748;
  cursor: pointer;
`;
