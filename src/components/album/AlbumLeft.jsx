import styled from "styled-components";

export default function Albumleft(props) {
  let tmp = [0, 1, 2, 3, 4, 5];
  return (
    <>
      <CoverOut1>
        <CoverInside1>
          <InnerPageOut1>
            <InnerPageInside1>
              <WholeBox>
                {tmp.map((x) => (
                  <Whole key={"key" + x}></Whole>
                ))}
              </WholeBox>
              <section>{props.children}</section>
            </InnerPageInside1>
          </InnerPageOut1>
        </CoverInside1>
      </CoverOut1>
    </>
  );
}

const CoverOut1 = styled.section`
  margin-right: 1vw;
  width: 30vw;
  height: 65vh;
  border-radius: 50px;
  flex-shrink: 0;
  background: #f18839;
  position: relative;
`;

const CoverInside1 = styled.section`
  width: 30vw;
  height: 60vh;
  border-radius: 50px;
  flex-shrink: 0;
  background: #ff9748;
  position: absolute;
  top: 0;
  right: 0;
`;

const InnerPageOut1 = styled.section`
  width: 28vw;
  height: 57vh;
  border-radius: 50px;
  flex-shrink: 0;
  background: #e0e0e0;
  position: absolute;
  top: 0;
  right: 0;
`;
const InnerPageInside1 = styled.section`
  width: 28vw;
  height: 54vh;
  border-radius: 50px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  background: #f7f7f7;
  position: absolute;
  top: 0;
  right: 0;
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
  right: 0;
`;

const Whole = styled.section`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: #d9d9d9;
`;
