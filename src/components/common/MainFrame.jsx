import styled from "styled-components";

export default function MainFrame(props) {
  return <Main>{props.children}</Main>;
}

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
