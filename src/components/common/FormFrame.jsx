import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { LoginContext, SignupContext } from "../../context/context";
import { useLocation, useNavigate } from "react-router-dom";
import { USERDATA } from "../common/key";

export default function FormFrame(props) {
  const { signUpInpo, duplication, duplicationState, setDuplicationState } = useContext(SignupContext);
  const { loginInpo } = useContext(LoginContext);
  const [show, setShow] = useState(false);
  const [disabled, setDisabled] = useState("false");

  const navigate = useNavigate();
  const currentPage = useLocation().pathname;

  useEffect(() => {
    if (currentPage == "/login") {
      setDuplicationState(true);
    }
  }, []);

  useEffect(() => {
    let tmp = currentPage == "/login" ? loginInpo : signUpInpo;
    let keys = Object.keys(tmp).sort();

    keys.forEach((x) => {
      if (x != "count" && x != "level") {
        if (tmp[x] !== "") {
          if (duplicationState && duplication) {
            setDisabled("true");
          } else {
            setDisabled("false");
          }
        } else {
          setDisabled("false");
        }
      }
    });
  }, [loginInpo, signUpInpo, duplication, duplicationState]);

  return (
    <>
      {show && (
        <LoginFailedBox>
          <LoginFailedText>
            {currentPage == "/login" ? "아이디 / 비밀번호를 다시 한번 확인해주세요" : ""}
          </LoginFailedText>
          <SubmitBtn
            $disabled={"true"}
            $width={"50%"}
            $margin={"2.5vh"}
            onClick={() => {
              setShow(false);
            }}
          >
            확인
          </SubmitBtn>
        </LoginFailedBox>
      )}
      <Form action="">
        {props.children}
        <SubmitBtn
          $disabled={disabled}
          $width={"50%"}
          $margin={"0"}
          onClick={(e) => {
            e.preventDefault();
            if (disabled == "true") {
              if (currentPage == "/signup") {
                fetchPost(signUpInpo, currentPage, USERDATA, navigate, setShow);
              } else {
                fetchPost(loginInpo, currentPage, USERDATA, navigate, setShow);
              }
            }
          }}
        >
          확인
        </SubmitBtn>
      </Form>
    </>
  );
}

async function fetchPost(body, currentPage, USERDATA, navigate, setShow) {
  try {
    const response = await fetch(
      `${currentPage == "/signup" ? "http://localhost:8080/signup" : "http://localhost:8080/signin"}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    if (response.status == 500) {
      throw new Error(404);
    }
    if (currentPage == "/login") {
      let data = await response.json();
      localStorage.setItem(USERDATA, JSON.stringify(data));
      navigate("/");
    } else {
      navigate("/login");
    }
  } catch (err) {
    if (currentPage == "/login") {
      setShow(true);
    }
    console.log(err);
  }
}

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

const SubmitBtn = styled.button`
  margin-bottom: ${(props) => props.$margin};
  width: ${(props) => props.$width};
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

const LoginFailedBox = styled.section`
  width: 23vw;
  height: 23vh;
  border: 3px solid #ff9748;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  position: absolute;
  top: 38vh;
  background-color: #f9f9f9;
  z-index: 3;
`;

const LoginFailedText = styled.p`
  font-size: 17px;
  position: absolute;
  top: 7vh;
`;
