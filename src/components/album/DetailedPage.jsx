import { useContext } from "react";
import { AlbumContext } from "../../context/context";
import styled from "styled-components";

export default function DetailedPage() {
  const { selectPicture, updateSelectPicture } = useContext(AlbumContext);
  const textArr = [
    "백일이 지난 아기 사자 라라 \n돌잡이 때 청진기를 잡았다",
    "방금 유치원에 들어간 라라!",
    "벌써 초등학생이 된 라라! \n하교 후 피카츄를 먹는 것이 \n하루의 루틴이다",
  ];
  const subText = [
    "커서 의사가 되려는 걸까?",
    "파란 유치원 복이 잘 어울린다!",
    "매일 피카츄를 사먹는 것은\n엄마에게는 비밀☆",
  ];
  return (
    <DetailBox>
      <Img src={selectPicture.img} alt="" />
      <TextBox>
        <LalaName>{selectPicture.name}</LalaName>
        <LalaExplain>{textArr[selectPicture.albumNum]}</LalaExplain>
        <SubText>{subText[selectPicture.albumNum]}</SubText>
      </TextBox>
    </DetailBox>
  );
}

const DetailBox = styled.section`
  width: 100%;
  height: 54vh;
  display: flex;
  align-items: center;
  position: relative;
`;

const Img = styled.img`
  width: 20vw;
`;

const TextBox = styled.section`
  width: 48%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 0;
`;

const LalaName = styled.span`
  margin-bottom: 3vh;
  color: #34261b;
  font-size: 25px;
  font-weight: 900;
`;

const LalaExplain = styled.p`
  margin-bottom: 2vh;
  color: #6e4e35;
  white-space: pre-wrap;
  line-height: 25px;
`;

const SubText = styled.p`
  width: 80%;
  color: #c4b5a9;
  font-size: 15px;
  white-space: pre-wrap;
  display: flex;
  justify-content: center;
`;
