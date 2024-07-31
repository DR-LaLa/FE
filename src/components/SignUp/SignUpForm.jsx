import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useImmer } from "use-immer";

export default function SignUpForm() {
  const signUpObj = {
    loginid: "",
    password: "",
    nickname: "",
    count: 0,
    level: 0,
  };
  const [signUpInpo, updateSignUpInpo] = useImmer(signUpObj);
  const [userPassWord, setUserPassWord] = useState("");
  const [duplication, setDuplication] = useState(true);
  const [duplicationState, setDuplicationState] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState("true");
  const [isEmpty, setIsEmpty] = useState(false);
  const [disabled, setDisabled] = useState("false");

  const navigate = useNavigate();

  useEffect(() => {
    // console.log(duplicationState);
    if (duplicationState && passwordCheck == "true" && signUpInpo.password === userPassWord) {
      setDisabled("true");
    } else {
      setDisabled("false");
    }
  }, [duplicationState, passwordCheck, signUpInpo, userPassWord]);

  return (
    <Form action="">
      <Title>SIGNUP</Title>
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
              {duplication != true ? "중복된 아이디 입니다" : isEmpty ? "아이디를 입력해주세요" : ""}
            </DuplicationText>
            <DuplicationCheck
              onClick={(e) => {
                e.preventDefault();
                if (signUpInpo.loginid != "") {
                  // console.log(duplication);
                  duplicationCheck(signUpInpo.loginid, setDuplication, setDuplicationState);
                  // console.log(duplication);
                } else {
                  setIsEmpty(true);
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
            {passwordCheck != "true" ? "비밀번호가 틀립니다" : "."}
          </PasswordCheckTxt>
        </section>
      </InputBoxStyle>
      <SubmitBtn
        $disabled={disabled}
        onClick={(e) => {
          e.preventDefault();
          if (disabled == "true") {
            signUpFunction(signUpInpo, navigate);
          }
        }}
      >
        확인
      </SubmitBtn>
    </Form>
  );
}

async function duplicationCheck(body, setDuplication, setDuplicationState) {
  try {
    const response = await fetch("http://15.164.128.251:8080/signup/confirmid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    let data = await response.json();
    setDuplication(data.isSuccess);
    setDuplicationState(true);
    console.log("a");
  } catch (err) {
    console.log(err);
  }
}

async function signUpFunction(body, navigate) {
  try {
    const response = await fetch("http://15.164.128.251:8080/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (response.status == 500) {
      throw new Error(404);
    }
    navigate("/login");
  } catch (err) {
    console.log(err);
  }
}

const Title = styled.h1`
  font-size: 35px;
  letter-spacing: 5px;
  color: #ff9748;
`;

const Form = styled.form`
  padding: 35px;
  width: 33vw;
  height: 50vh;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-color: rgba(255, 255, 255, 0.66);
  box-shadow: 3px 8px 15px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(25px);
`;

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
  font-size: 10px;
  color: red;
  visibility: ${(props) => (props.$flag == "true" ? "hidden" : "visible")};
`;

const IdBox = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const SubmitBtn = styled.button`
  margin-bottom: 0;
  width: 50%;
  height: 6vh;
  border: none;
  border-radius: 50px;
  color: #f9f9f9;
  font-size: 20px;
  font-weight: 900;
  outline: none;

  background-color: ${(props) => (props.$disabled == "true" ? "#ff9748" : "gray")};
  cursor: pointer;
`;
