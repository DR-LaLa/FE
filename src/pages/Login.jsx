import styled from "styled-components";
import FormFrame from "../components/common/FormFrame";
import Header from "../components/common/Header";

export default function Login() {
  return (
    <>
      <Header show={"false"} />
      <main>
        <FormFrame>
          <Title>LOGIN</Title>
          <InputBox>
            <section>
              <Label htmlFor="">ID</Label>
              <Input type="text" placeholder="id를 적어주세요" />
            </section>
            <section>
              <Label htmlFor="">PASSWORD</Label>
              <Input type="password" placeholder="비밀번호를 입력해주세요" />
              <LoginMore>
                <Span>아이디 찾기</Span>
                <Span>비밀번호 찾기</Span>
                <span>회원가입</span>
              </LoginMore>
            </section>
          </InputBox>
        </FormFrame>
      </main>
    </>
  );
}

const Title = styled.h1`
  font-size: 35px;
  letter-spacing: 5px;
  color: #ff9748;
`;

const InputBox = styled.section`
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
