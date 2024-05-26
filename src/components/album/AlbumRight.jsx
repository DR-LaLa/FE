import styled from "styled-components";

export default function AlbumRight(props) {
  let tmp = [0, 1, 2, 3, 4, 5];
  return (
    <>
      <CoverOut2>
        <CoverInside2>
          <InnerPageOut2>
            <InnerPageInside2>
              <WholeBox>
                {tmp.map((x) => (
                  <Whole key={"key2" + x}></Whole>
                ))}
              </WholeBox>
              <section>{props.children}</section>
            </InnerPageInside2>
          </InnerPageOut2>
        </CoverInside2>
      </CoverOut2>
      <RingBox>
        {tmp.map((x, n) => (
          <Ring key={"key3" + n}></Ring>
        ))}
      </RingBox>
    </>
  );
}

const CoverOut2 = styled.section`
  width: 30vw;
  height: 65vh;
  border-radius: 50px;
  flex-shrink: 0;
  background: #f18839;
  position: relative;
`;
const CoverInside2 = styled.section`
  width: 30vw;
  height: 60vh;
  border-radius: 50px;
  flex-shrink: 0;
  background: #ff9748;
  position: absolute;
  top: 0;
  left: 0;
`;

const InnerPageOut2 = styled.section`
  width: 28vw;
  height: 57vh;
  border-radius: 50px;
  flex-shrink: 0;
  background: #e0e0e0;
  position: absolute;
  top: 0;
  left: 0;
`;
const InnerPageInside2 = styled.section`
  width: 28vw;
  height: 54vh;
  border-radius: 50px;
  flex-shrink: 0;
  background: #f7f7f7;
  position: absolute;
  top: 0;
  left: 0;
`;
const WholeBox = styled.section`
  margin: 0 1vw 0 1vw;
  width: 30px;
  height: 54vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
  top: 0;
  left: 0;
`;

const Whole = styled.section`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: #d9d9d9;
`;

const RingBox = styled.section`
  width: 80px;
  height: 55vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
  bottom: 10.5vh;
`;

const Ring = styled.section`
  width: 80px;
  height: 15px;
  border-radius: 20px;
  background-color: #fcbf90;
`;
