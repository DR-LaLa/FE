import { useContext } from "react";
import { RankContext } from "../../context/context";
import styled from "styled-components";

export default function MyRank() {
  const { myData } = useContext(RankContext);
  return (
    <MyRankBox>
      <Txt $width={4} $size={25}>
        {myData.lank}
      </Txt>
      <Txt $width={3} $size={25}>
        <span>Lv</span>
        {myData.level}
      </Txt>
      <Txt $width={12} $size={25}>
        {myData.nickname}
      </Txt>
      <Txt $width={5} $size={25}>
        {`${myData.count}개`}
      </Txt>
    </MyRankBox>
  );
}

const MyRankBox = styled.section`
  /* padding: 0 5% 0 5%; */
  margin-top: 1vh;
  width: 90%;
  height: 8vh;
  border-radius: 20px;
  color: #f9f9f9;
  font-weight: 900;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 25px;
  background-color: #ff9748;
`;

const Txt = styled.p`
  width: ${(props) => props.$width + "vw"};
  font-size: ${(props) => props.$size + "px"};
  span {
    font-size: 15px;
  }
`;
