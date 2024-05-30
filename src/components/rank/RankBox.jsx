import { useContext } from "react";
import styled from "styled-components";
import { RankContext } from "../../context/context";
import { USERDATA } from "../common/key";
import MyRank from "./MyRank";

export default function RankBox() {
  const { users, updateMyData } = useContext(RankContext);
  const userData = JSON.parse(localStorage.getItem(USERDATA));

  return (
    <>
      <RankBoxStyle>
        <SubText>
          <Txt $size={3}>순위</Txt>
          <Txt $size={3}>레벨</Txt>
          <Txt $size={8}>닉네임</Txt>
          <Txt $size={6}>맞춘 문제 개수</Txt>
        </SubText>
        <Box>
          {users.map((x, n) => {
            if (n > 3) {
              return (
                <SeveralRank key={n}>
                  <Txt $size={3}>{n}</Txt>
                  <Txt $size={3}>
                    <span>Lv</span>
                    {x.level}
                  </Txt>
                  <Txt $size={8}>{x.nickname}</Txt>
                  <Txt $size={6}>{`${x.count}개`}</Txt>
                </SeveralRank>
              );
            }
          })}
        </Box>
        <MyRank />
      </RankBoxStyle>
    </>
  );
}

const RankBoxStyle = styled.section`
  width: 40vw;
  height: 57vh;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  /* top: 12vh; */
  /* left: 7vw; */
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(40px);
`;

const Box = styled.section`
  width: 95%;
  height: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;

  &&::-webkit-scrollbar {
    width: 7px;
  }
  &&::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #ff9748;
  }
`;

const SubText = styled.section`
  margin-right: 2vw;
  width: 75%;
  height: 5vh;
  color: #ccb09b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: #e3f4c1; */
`;

const SeveralRank = styled.section`
  margin: 0.5vh 0 0.5vh 0;
  width: 95%;
  height: 5vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-shrink: 0;
  border-radius: 20px;
  background: #f9f9f9;
  filter: drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.15));
`;

const Txt = styled.p`
  width: ${(props) => props.$size + "vw"};
  display: flex;
  justify-content: ${(props) => (props.$size == 6 ? "center" : "")};
  align-items: end;

  span {
    font-size: 12px;
  }
`;
