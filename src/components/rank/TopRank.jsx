import { useContext, useEffect } from "react";
import { USERDATA } from "../common/key";
import { RankContext } from "../../context/context";
import styled from "styled-components";

export default function TopRank() {
  const userData = JSON.parse(localStorage.getItem(USERDATA));
  const { users, updateUsers, myData, updateMyData, topRank, updateTopRank } = useContext(RankContext);

  useEffect(() => {
    getUsersData(updateUsers, updateMyData, userData, updateTopRank);
  }, []);

  return (
    <ShadowBox>
      <RankBox $left={6.5}>
        <span>{topRank[1].nickname}</span>
        <SeveralRankBox $height={10} $borderRadious={17} $left={12} $rank={2}>
          <span>2</span>
        </SeveralRankBox>
      </RankBox>
      <RankBox $left={19.5}>
        <span>{topRank[0].nickname}</span>
        <SeveralRankBox $height={17} $borderRadious={20} $rank={1}>
          <span>1</span>
        </SeveralRankBox>
      </RankBox>
      <RankBox $left={32.5}>
        <span>{topRank[2].nickname}</span>
        <SeveralRankBox $height={7} $borderRadious={15} $rank={3}>
          <span>3</span>
        </SeveralRankBox>
      </RankBox>
    </ShadowBox>
  );
}

async function getUsersData(updateUsers, updateMyData, userData, updateTopRank) {
  try {
    const response = await fetch("http://15.164.128.251:8080/main/rank");
    // const response = await fetch("json/rank.json");
    const data = await response.json();
    updateUsers((arr) => {
      data.forEach((obj) => {
        arr.push(obj);
      });
    });
    let lank = 4;
    let tmp = 0;
    let myLank;
    data.forEach((x, n) => {
      if (tmp != x.count) {
        tmp = x.count;
        lank = n;
      }
      if (userData.loginid == x.loginid) {
        myLank = lank;
      }
    });

    updateMyData((obj) => {
      const tmp = data.filter((x, n) => x.loginid == userData.loginid)[0];
      const lank = data.findIndex((x, n) => x.loginid == userData.loginid);
      obj.lank = lank;
      obj.nickname = tmp.nickname;
      obj.count = tmp.count;
      obj.level = tmp.level;
    });
    updateTopRank((arr) => {
      const tmp = data.filter((x, n) => n < 3);
      for (let i = 0; i < 3; i++) {
        arr[i].nickname = tmp[i].nickname;
        arr[i].count = tmp[i].count;
        arr[i].level = tmp[i].level;
      }
    });
  } catch (err) {
    console.log(err);
  }
}

const ShadowBox = styled.section`
  margin-bottom: 3vh;
  width: 39vw;
  display: flex;
  filter: drop-shadow(0px 6px 10px rgba(0, 0, 0, 0.25));
`;

const SeveralRankBox = styled.section`
  margin-top: 3vh;
  width: 13vw;
  height: ${(props) => props.$height + "vh"};
  border-top-right-radius: ${(props) => (props.$rank == 2 ? "0" : props.$borderRadious + "px")};
  border-top-left-radius: ${(props) => (props.$rank == 3 ? "0" : props.$borderRadious + "px")};
  border-bottom-left-radius: ${(props) => (props.$rank != 2 ? "0" : props.$borderRadious + "px")};
  border-bottom-right-radius: ${(props) => (props.$rank != 3 ? "0" : props.$borderRadious + "px")};
  color: #f9f9f9;
  font-size: ${(props) => (props.$rank == 1 ? "80px" : props.$rank == 2 ? "60px" : "40px")};
  font-weight: 900;
  display: flex;
  justify-content: center;
  background-color: rgb(255, 151, 72);
`;

const RankBox = styled.section`
  width: 15vw;
  height: auto;
  font-size: 35px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  /* position: absolute; */
  /* left: ${(props) => props.$left + "vw"}; */
  /* bottom: 18vh; */
`;
