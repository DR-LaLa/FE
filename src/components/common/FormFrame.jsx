import styled from "styled-components";

export default function FormFrame(props) {
  return (
    <>
      <Form action="">
        {props.children}
        <SubmitBtn>확인</SubmitBtn>
      </Form>
    </>
  );
}

const Form = styled.form`
  padding: 35px;
  width: 400px;
  height: 420px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.66);
  box-shadow: 3px 8px 15px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(25px);
`;

const SubmitBtn = styled.button`
  width: 180px;
  height: 45px;
  border: none;
  border-radius: 50px;
  color: #f9f9f9;
  font-size: 20px;
  font-weight: 900;
  /* position: relative; */
  /* top: 12vh; */
  outline: none;
  background-color: #ff9748;
  cursor: pointer;
`;
