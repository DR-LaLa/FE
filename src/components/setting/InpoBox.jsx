import styled from "styled-components";
import { USERDATA } from "../common/key";
import { useNavigate } from "react-router-dom";

export default function InpoBox(props) {
  const navigate = useNavigate();
  return (
    <>
      <InpoBoxStyle>
        {props.children}
        <ButtonBox>
          {props.state == "logout" && (
            <Button
              $bgColor={"#ff9748"}
              onClick={() => {
                localStorage.removeItem(USERDATA);
                navigate("/");
              }}
            >
              확인
            </Button>
          )}
          <Button
            $bgColor={props.state == "logout" ? "gray" : "#ff9748"}
            onClick={() => {
              props.close("none");
            }}
          >
            닫기
          </Button>
        </ButtonBox>
      </InpoBoxStyle>
    </>
  );
}

const InpoBoxStyle = styled.section`
  width: 23vw;
  height: 27vh;
  border: 3px solid #ff9748;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 900;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  right: 28vw;
  background-color: #f9f9f9;
  z-index: 3;
`;

const ButtonBox = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const Button = styled.button`
  width: 40%;
  height: 7vh;
  border: none;
  border-radius: 20px;
  color: #f9f9f9;
  font-size: 20px;
  font-weight: 900;
  background-color: ${(props) => props.$bgColor};
  outline: none;
  cursor: pointer;
`;
