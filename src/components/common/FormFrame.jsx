import { useContext, useState } from "react";
import styled from "styled-components";
import { LoginContext, SignupContext } from "../../context/context";
import { useLocation, useNavigate } from "react-router-dom";
import { USERDATA } from "../common/key";

export default function FormFrame(props) {
  const { signUpInpo, updateSignUpInpo } = useContext(SignupContext);
  const { loginInpo, updateLoginInpo } = useContext(LoginContext);
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();
  const currentPage = useLocation().pathname;

  async function fetchPost(body) {
    try {
      const response = await fetch("json/login.json", {
        // const response = await fetch(`${currentPage == "/signup" ? "" : "http://localhost:8080/signin"}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      let data = await response.json();
      localStorage.setItem(USERDATA, JSON.stringify(data));
      if (currentPage == "/login") navigate("/");
      else {
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Form action="">
        {props.children}
        <SubmitBtn
          onClick={(e) => {
            e.preventDefault();
            if (currentPage == "/signup") {
              console.log(signUpInpo);
              fetchPost(signUpInpo);
              navigate("/login");
            } else {
              fetchPost(loginInpo);
            }
          }}
        >
          확인
        </SubmitBtn>
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
  position: relative;
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
