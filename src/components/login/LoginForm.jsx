import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IsLoginContext, LoginContext } from "../../context/context";

export default function LoginForm() {
  const { loginInpo, updateLoginInpo } = useContext(LoginContext);
  const { updateUserData } = useContext(IsLoginContext);
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState("false");

  useEffect(() => {
    if (loginInpo.loginid && loginInpo.password) {
      setDisabled("true");
    } else {
      setDisabled("false");
    }
  }, [loginInpo]);

  return (
    <Form>
      <Title>LOGIN</Title>
      <InputBoxStyled>
        <Section>
          <Label htmlFor="">ID</Label>
          <Input
            type="text"
            placeholder="id를 적어주세요"
            required
            autoComplete="off"
            onChange={(e) => {
              updateLoginInpo((obj) => {
                obj.loginid = e.target.value;
              });
            }}
          />
        </Section>
        <Section>
          <Label htmlFor="">PASSWORD</Label>
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            required
            autoComplete="off"
            onChange={(e) => {
              updateLoginInpo((obj) => {
                obj.password = e.target.value;
              });
            }}
          />
        </Section>
        <LoginMore>
          <Span>아이디 찾기</Span>
          <Span>비밀번호 찾기</Span>
          <span
            onClick={() => {
              navigate("/signup");
            }}
          >
            회원가입
          </span>
        </LoginMore>
      </InputBoxStyled>
      <SubmitBtn
        $disabled={disabled}
        onClick={(e) => {
          e.preventDefault();
          if (disabled == "true") {
            loginFunction(loginInpo, updateUserData, navigate);
          }
        }}
      >
        확인
      </SubmitBtn>
    </Form>
  );
}

async function loginFunction(loginInpo, updateUserData, navigate) {
  try {
    const response = await fetch("http://15.164.128.251/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInpo),
    });

    const data = await response.json();

    if (response.status == 500) {
      throw new Error(404);
    }

    updateUserData((obj) => {
      obj.loginid = data.loginid;
      obj.nickname = data.nickname;
      obj.isLogin = true;
    });
    navigate("/");
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

const InputBoxStyled = styled.section`
  width: 25vw;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  bottom: 5vh;
`;

const Section = styled.section`
  margin-top: 3vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 17px;
`;

const Input = styled.input`
  margin: 5px 0 10px 0;
  width: 25vw;
  height: 30px;
  border: none;
  border-bottom: 1px solid black;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  text-indent: 10px;
  background-color: #f9f9f9;
  outline: none;
`;

const LoginMore = styled.section`
  width: 100%;
  height: 3vh;
  color: #ff9748;
  font-size: 13px;
  display: flex;
  justify-content: end;
  align-items: center;
  span {
    cursor: pointer;
  }
`;

const Span = styled.p`
  margin-right: 0.8vw;
  display: flex;
  align-items: center;
  justify-content: center;
  &&::after {
    content: "";
    margin-left: 0.3vw;
    width: 5.5px;
    height: 15px;
    border-right: 2px solid #ff9748;
    display: inline-block;
  }
`;

const SubmitBtn = styled.button`
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
