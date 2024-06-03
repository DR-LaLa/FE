import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AlbumContext } from "../../context/context";
import { USERDATA } from "../common/key";

export default function Collection() {
  let imgArr = [
    "img/애기.png",
    "img/유딩.png",
    "img/초딩.png",
    "img/중딩.png",
    "img/고3.png",
    "img/대1.png",
    "img/인턴.png",
    "img/의사.png",
    "img/수술의사.png",
  ];

  const { selectPicture, updateSelectPicture } = useContext(AlbumContext);
  const [count, setCount] = useState(0);
  const userData = JSON.parse(localStorage.getItem(USERDATA));
  useEffect(() => {
    getCount(setCount, userData);
  }, []);

  return (
    <CollectionBox>
      {imgArr.map((x, n) => {
        if (Math.floor(count / 10) - 1 > n) {
          return (
            <SeveralCollection
              key={n}
              onClick={(e) => {
                updateSelectPicture((obj) => {
                  obj.img = x;
                  obj.name = x.replace(/["img", "/", ".png"]/g, "") + " 라라";
                  obj.albumNum = n;
                });
              }}
            >
              <ImgBox>
                <Img src={x} alt="" />
              </ImgBox>
              <p>{x.replace(/["img", "/", ".png"]/g, "") + " 라라"}</p>
            </SeveralCollection>
          );
        } else {
          return (
            <MysteryBox key={n}>
              <QuestionMark>?</QuestionMark>
              <MysteryText>{`해금까지 ${(n + 1) * 10 - count}문제`}</MysteryText>
            </MysteryBox>
          );
        }
      })}
    </CollectionBox>
  );
}

async function getCount(setCount, userData) {
  // const response = await fetch("json/set.json");
  const response = await fetch(`http://localhost:8080/main/quizcount/${userData.loginid}`);
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

const ImgBox = styled.section`
  width: 7vw;
  height: 6vw;
  border: 1px solid #ffd1ad;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 43%;
`;

const MysteryBox = styled.section`
  width: 7vw;
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
