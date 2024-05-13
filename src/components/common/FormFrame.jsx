import { useContext, useState } from "react";
import styled from "styled-components";
import { LoginContext, SignupContext } from "../../context/context";
import { useLocation, useNavigate } from "react-router-dom";

export default function FormFrame(props) {
  const { signUpInpo, updateSignUpInpo } = useContext(SignupContext);
  const { loginInpo, updateLoginInpo } = useContext(LoginContext);
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();
  const currentPage = useLocation().pathname;

  return (
    <>
      <Form action="">
        {props.children}
        <SubmitBtn
          onClick={(e) => {
            e.preventDefault();

            if (currentPage == "/signup") {
              fetchPost(signUpInpo, navigate, currentPage);
            } else {
              // fetchPost(loginInpo);
            }
          }}
        >
          확인
        </SubmitBtn>
      </Form>
    </>
  );
}
const USERNAME = "userName";
async function fetchPost(body, navigate, currentPage) {
  try {
    const response = await fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    let data = await response.json();
    localStorage.setItem(USERNAME, data.nickname);
    if (currentPage == "/signup") {
      navigate("/login");
    } else {
      navigate("/");
    }
  } catch (err) {
    console.log(err);
  }
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
  right: 3.5vw;
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
