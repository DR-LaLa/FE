import { useLocation } from "react-router-dom";
import styled from "styled-components";

export default function MainFrame(props) {
  const currentPage = useLocation().pathname;
  return <Main $currentPage={currentPage}>{props.children}</Main>;
}

const Main = styled.main`
  width: ${(props) =>
    props.$currentPage == "/login" ||
    props.$currentPage == "/signup" ||
    props.$currentPage == "/quiz" ||
    props.$currentPage == "/playquiz"
      ? "100%"
      : props.$currentPage == "/setting"
      ? "70%"
      : "85%"};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
