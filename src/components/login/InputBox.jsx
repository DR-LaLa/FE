import { useContext, useState } from "react";
import styled from "styled-components";
import { LoginContext, SignupContext } from "../../context/context";
import { useNavigate } from "react-router-dom";

export default function InputBox() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const { loginInpo, updateLoginInpo } = useContext(LoginContext);
  const navigate = useNavigate();
  return (
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
  );
}

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
  /* position: absolute;
  bottom: -30px;
  right: -15px; */

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
    /* position: absolute; */
  }
`;
