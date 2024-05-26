import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Collection() {
  let imgArr = [
    "img/애기.png",
    "img/유딩.png",
    "img/초딩.png",
    "img/중딩.png",
    "img/고3.png",
    "img/대1.png",
    "img/대학원생.png",
    "img/의사.png",
    "img/수술의사.png",
  ];

  const [count, setCount] = useState(0);

  useEffect(() => {
    getCount(setCount);
  }, []);

  return (
    <CollectionBox>
      {imgArr.map((x, n) => {
        if (count / 10 - 1 > n) {
          return (
            <SeveralCollection key={n}>
              <Img src={x} alt="" />
              <p>{x.replace(/["img", "/", ".png"]/g, "") + " 라라"}</p>
            </SeveralCollection>
          );
        } else {
          return (
            <MysteryBox key={n}>
              <QuestionMark>?</QuestionMark>
              <MysteryText>{`해금까지 ${(count % 10) + (n - Math.floor(count / 10)) * 10}문제`}</MysteryText>
            </MysteryBox>
          );
        }
      })}
    </CollectionBox>
  );
}

async function getCount(setCount) {
  const response = await fetch("json/set.json");
  const data = await response.json();
  setCount(data.count);
}

const CollectionBox = styled.section`
  margin-left: 1vw;
  width: 24vw;
  height: 50vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const SeveralCollection = styled.section`
  width: 30%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  margin-bottom: 1vh;
  width: 85%;
  border: 1px solid #ffd1ad;
  border-radius: 10px;
`;

const MysteryBox = styled.section`
  width: 30%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const QuestionMark = styled.p`
  width: 90%;
  height: 80%;
  border-radius: 10px;
  font-size: 55px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffd1ad;
`;

const MysteryText = styled.p`
  color: #ccb09b;
  font-size: 15px;
`;
