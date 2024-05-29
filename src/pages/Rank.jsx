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
          <TopRank />
          <RankBox />
        </RankProvider>
      </MainFrame>
    </>
  );
}
