import { useContext, useState } from "react";
import styled from "styled-components";
import { LoginContext, SignupContext } from "../../context/context";

export default function InputBox() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const { loginInpo, updateLoginInpo } = useContext(LoginContext);
  return (
    <InputBoxStyled>
      <section>
        <Label htmlFor="">ID</Label>
        <Input
          type="text"
          placeholder="id를 적어주세요"
          required
          autoComplete="off"
          onInput={(e) => {
            updateLoginInpo((obj) => {
              obj.loginid = e.target.value;
            });
          }}
        />
      </section>
      <section>
        <Label htmlFor="">PASSWORD</Label>
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          required
          autoComplete="off"
          onInput={(e) => {
            updateLoginInpo((obj) => {
              obj.password = e.target.value;
            });
          }}
        />
        <LoginMore>
          <Span>아이디 찾기</Span>
          <Span>비밀번호 찾기</Span>
          <span>회원가입</span>
        </LoginMore>
      </section>
    </InputBoxStyled>
  );
}

async function loginFunction(body) {
  try {
    // const
  } catch (err) {}
}

const InputBoxStyled = styled.section`
  width: 380px;
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  bottom: 7vh;
`;

const Label = styled.label`
  font-size: 17px;
`;

const Input = styled.input`
  margin: 5px 0 10px 0;
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

const LoginMore = styled.section`
  width: 15vw;
  height: 3vh;
  color: #ff9748;
  font-size: 13px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  bottom: -30px;
  right: -15px;
`;

const Span = styled.span`
  &&::after {
    content: "";
    width: 5.5px;
    height: 15px;
    border-right: 2px solid #ff9748;
    display: inline-block;
    position: absolute;
  }
`;
