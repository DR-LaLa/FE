import styled from "styled-components";
import Header from "../components/common/Header";
import MainFrame from "../components/common/MainFrame";
import RankBox from "../components/rank/RankBox";
import TopRank from "../components/rank/TopRank";
import MainProvider from "../provider/MainProvider";
import RankProvider from "../provider/RankProvider";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { IsLoginContext } from "../context/context";

export default function Rank() {
  const { userData } = useContext(IsLoginContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userData.isLogin) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <MainProvider>
        <Header show={"true"} transform={"show"} />
      </MainProvider>
      <MainFrame>
        <RankProvider>
          <Section>
            <TopRank />
            <RankBox />
          </Section>
        </RankProvider>
      </MainFrame>
    </>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;
