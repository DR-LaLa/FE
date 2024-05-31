import styled from "styled-components";
import Header from "../components/common/Header";
import MainFrame from "../components/common/MainFrame";
import RankBox from "../components/rank/RankBox";
import TopRank from "../components/rank/TopRank";
import MainProvider from "../provider/MainProvider";
import RankProvider from "../provider/RankProvider";

export default function Rank() {
  return (
    <>
      <MainProvider>
        <Header show={"true"} anime={"none"} />
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
