import styled from "styled-components";
import Albumleft from "../components/album/AlbumLeft";
// import AlbumFrame from "../components/album/AlbumLeft";
import AlbumRight from "../components/album/AlbumRight";
import Collection from "../components/album/Collection";
import DetailedPage from "../components/album/DetailedPage";
import Header from "../components/common/Header";
import MainFrame from "../components/common/MainFrame";
import MainProvider from "../provider/MainProvider";
import AlbumProvider from "../provider/AlbumProvider";

export default function Album() {
  return (
    <>
      <MainProvider>
        <Header show={"true"} transform={"show"} />
      </MainProvider>
      <MainFrame>
        <Section>
          <Title>라라의 앨범</Title>
          <AlbumProvider>
            <AlbumBox>
              <Albumleft>
                <Collection />
              </Albumleft>
              <AlbumRight>
                <DetailedPage />
              </AlbumRight>
            </AlbumBox>
          </AlbumProvider>
        </Section>
      </MainFrame>
    </>
  );
}

const Section = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #6e4e35;
  font-size: 60px;
`;

const AlbumBox = styled.section`
  width: 60vw;
  height: 65vh;
  display: flex;
  justify-content: center;
  position: relative;
  top: 3vh;
`;
