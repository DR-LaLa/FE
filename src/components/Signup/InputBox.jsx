import { useContext, useState } from "react";
import styled from "styled-components";
import { SignupContext } from "../../context/context";
import { useNavigate } from "react-router-dom";

export default function InputBox() {
  const { signUpInpo, updateSignUpInpo } = useContext(SignupContext);
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
          placeholder="ex) 라틴킹"
          onInput={(e) => {
            setUserName(e.target.value);
          }}
          required
          autoComplete="off"
          maxLength={5}
        />
      </section>
      <section>
        <IdBox>
          <Label>ID</Label>
          <DuplicationCheck
            onClick={(e) => {
              e.preventDefault();
              fetchGet(userId);
            }}
          >
            중복확인
          </DuplicationCheck>
        </IdBox>
        <Input
          type="text"
          placeholder="id를 적어주세요"
          onInput={(e) => {
            setUserId(e.target.value);
          }}
          required
          autoComplete="off"
        />
      </section>
      <section>
        <Label>PASSWORD</Label>
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onInput={(e) => {
            setUserPassWord(e.target.value);
          }}
          required
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
          onInput={(e) => {
            if (e.target.value == userPassWord) {
              updateSignUpInpo((obj) => {
                obj.loginid = userId;
                obj.password = userPassWord;
                obj.nickname = userName;
              });
              setPasswordCheck("true");
            } else {
              setPasswordCheck("false");
            }
          }}
          required
          autoComplete="off"
        />
        <PasswordCheckTxt $flag={passwordCheck}>
          {!passwordCheck != "true" ? "비밀번호가 틀립니다" : "."}
        </PasswordCheckTxt>
      </section>
    </InputBoxStyle>
  );
}
async function fetchGet(body) {
  try {
    const response = await fetch("http//localhost:/signup/8080confirmid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    let data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

const InputBoxStyle = styled.section`
  width: 380px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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

const PasswordCheckTxt = styled.p`
  font-size: 11px;
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
