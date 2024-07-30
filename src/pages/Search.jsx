import styled from "styled-components";
import Header from "../components/common/Header";
import MainFrame from "../components/common/MainFrame";
import MainProvider from "../provider/MainProvider";
import SearchResult from "../components/search/SearchResult";

export default function Search() {
  return (
    <>
      <MainProvider>
        <Header show={"true"} transform={"show"} />
      </MainProvider>
      <MainFrame>
        <SearchBox>
          <SearchResult />
        </SearchBox>
      </MainFrame>
    </>
  );
}

const SearchBox = styled.section`
  width: 40vw;
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 50px;
  box-shadow: 3px 8px 15px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
`;
