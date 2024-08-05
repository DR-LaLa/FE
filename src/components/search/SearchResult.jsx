import { useState } from "react";
import { HiSearch } from "react-icons/hi";
import styled from "styled-components";
import { useImmer } from "use-immer";
export default function SearchResult() {
  const [serchKeyword, setSearchKeyword] = useState("");
  const [searchObj, updateSearchObj] = useImmer(obj);
  const [empty, setEmpty] = useState(false);
  return (
    <>
      <InputBox>
        <Input
          type="text"
          placeholder="약품의 이름으로 검색할 수 있습니다"
          onChange={(e) => {
            setSearchKeyword(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              getMedicineInpo(serchKeyword, updateSearchObj, setEmpty);
            }
          }}
        />
        <Icon
          onClick={() => {
            getMedicineInpo(serchKeyword, updateSearchObj, setEmpty);
          }}
        />
      </InputBox>
      <SearchResultBox>
        {empty ? (
          <p>검색 결과가 없습니다</p>
        ) : (
          searchObj.map((arr, n) => (
            <Result key={n}>
              <Margin>
                <Span>제품명: </Span>
                <P>{arr.itemName}</P>
              </Margin>
              <Margin>
                <Span>업체명: </Span>
                <P>{arr.entpName}</P>
              </Margin>
              <Margin>
                <Span>효능: </Span>
                <P>{arr.efcyQesitm}</P>
              </Margin>
              <Margin>
                <Span>사용법: </Span>
                <P>{arr.useMethodQesitm}</P>
              </Margin>
              <Margin>
                <Span $warnning={"warnning"}>주의사항: </Span>
                <P $warnning={"warnning"}>{arr.atpnQesitm}</P>
              </Margin>
              <Margin>
                <Span>보관법: </Span>
                <P>{arr.depositMethodQesitm}</P>
              </Margin>
            </Result>
          ))
        )}
      </SearchResultBox>
    </>
  );
}

const obj = [];

async function getMedicineInpo(serchKeyword, updateSearchObj, setEmpty) {
  try {
    const response = await fetch(`http://15.164.128.251:8080/main/search/${serchKeyword}`);
    const data = await response.json();
    if (data.length == 0) {
      setEmpty(true);
    }
    updateSearchObj((arr) => (arr = []));
    data.forEach((obj) => {
      updateSearchObj((arr) => {
        arr.push(obj);
      });
    });
  } catch (err) {
    console.log(err);
  }
}

const InputBox = styled.section`
  width: 80%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  padding: 0 10% 0 5%;
  width: 65%;
  height: 45%;
  border: 3px solid #ff9748;
  border-radius: 40px;
  font-size: 20px;
  outline: none;
`;

const Icon = styled(HiSearch)`
  color: #ff9748;
  font-size: 20px;
  position: relative;
  right: 2.5vw;
  cursor: pointer;
`;

const SearchResultBox = styled.section`
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;

  &&::-webkit-scrollbar {
    width: 7px;
  }
  &&::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #ff9748;
  }
`;

const Result = styled.section`
  padding: 1vw 1vw 1vw 1vw;
  margin-bottom: 5vh;
  width: 90%;
  border: 5px solid #ffcda6;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-shrink: 0;
  background-color: #f9f9f9;
`;

const Margin = styled.section`
  margin-bottom: 1vh;
  width: 100%;
  display: flex;
`;

const Span = styled.span`
  width: 4.5vw;
  font-weight: 600;
  color: ${(props) => (props.$warnning == "warnning" ? "red" : "")};
`;
const P = styled.p`
  width: 85%;
  color: ${(props) => (props.$warnning == "warnning" ? "red" : "")};
`;
