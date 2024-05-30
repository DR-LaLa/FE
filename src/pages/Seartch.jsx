import styled from "styled-components";
import Header from "../components/common/Header";
import MainFrame from "../components/common/MainFrame";
import MainProvider from "../provider/MainProvider";
import { HiSearch } from "react-icons/hi";

export default function Search() {
  return (
    <>
      <MainProvider>
        <Header show={"true"} anime={"none"} />
      </MainProvider>
      <MainFrame>
        <SearchBox>
          <input type="text" />
          <HiSearch />
          <section></section>
        </SearchBox>
      </MainFrame>
    </>
  );
}

const SearchBox = styled.section`
  width: 45vw;
  height: 80%;
  background-color: yellowgreen;
`;
