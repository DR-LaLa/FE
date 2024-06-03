import { useContext } from "react";
import { AlbumContext } from "../../context/context";
import styled from "styled-components";

export default function DetailedPage() {
  const { selectPicture, updateSelectPicture } = useContext(AlbumContext);
  const textArr = [
    "백일이 지난 아기 사자 라라 \n돌잡이 때 청진기를 잡았다",
    "방금 유치원에 들어간 라라!",
    "벌써 초등학생이 된 라라! \n하교 후 피카츄를 먹는 것이 \n하루의 루틴이다",
    "중학교 2학년이 되며 사춘기에 접어든 라라 \n 라라는 세상의 모든 굴레와 \n구속들이 답답하게 느껴지는 것 같다",
    "벌써 고들학교 3학년이 된 라라!\n라라의 목표는 의대! \n라라는 목표를 위해 오늘도 \n밤샘공부를 한다...",
    "수능이 끝난 뒤 원하던 대로 의대에 진학하게 된 라라! \n라라의 앞날에는 어떤 일들이 \n기다리고 있을까?",
    "드디어 인턴이 된 라라! \n라라는 담당 교수님과 함께 \n오늘도 행복한 인턴 생활을 한다",
    "기나긴 인턴 생활을 마치고 라라는 의사가 되었다! \n라라의 꿈은 개인 병원을 차리는 것! \n라라는 목표를 위해 오늘도 열심히 달린다",
    "오늘 첫 수술을 하게 된 라라 \n라라는 이번 수술을 잘 마치고 \n교수님께 칭찬을 받기위해 정신을 집중하고 있다",
  ];
  const subText = [
    "커서 의사가 되려는 걸까?",
    "유치원을 제패하는게 라라의 꿈이다",
    "매일 피카츄를 사먹는 것은\n엄마에게는 비밀☆",
    "라라는 세상이 자신을 받아들이기에는 아직 이르다고 생각한다",
    "라라가 오늘 마신 핫식스는 \n모두 몇 캔일까?",
    "성인이 된 기념으로 라라는 \n오늘도 술을 마신다... \n라라의 주량을 몇 병일까?",
    "라라는 정말로 행복하다...\n라라는 행복해하고 있다...",
    "라라는 어떤 과를 선택했을까?",
    "라라의 풍성한 머리카락을 담기에 수술모는 너무나도 작아 보인다",
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
  margin-left: 4vw;
  width: 10vw;
`;

const TextBox = styled.section`
  width: 50%;
  height: 80%;
  display: flex;
  flex-direction: column;
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
  margin-bottom: 1vh;
  width: 95%;
  color: #6e4e35;
  font-size: 15px;
  white-space: pre-wrap;
  line-height: 25px;
  /* background-color: whitesmoke; */
`;

const SubText = styled.p`
  width: 90%;
  color: #c4b5a9;
  font-size: 15px;
  white-space: pre-wrap;
  display: flex;
  /* justify-content: center; */
  /* background-color: yellow; */
`;
