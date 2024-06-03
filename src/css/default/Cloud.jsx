import styled from "styled-components";

export default function Cloud() {
  return (
    <>
      <CloudBox>
        <Cloud1></Cloud1>
        <Cloud2></Cloud2>
        <Cloud3></Cloud3>
        <Cloud4></Cloud4>
      </CloudBox>
      <CloudBox2>
        <Cloud1></Cloud1>
        <Cloud2></Cloud2>
        <Cloud3></Cloud3>
        <Cloud4></Cloud4>
      </CloudBox2>
      <CloudBox3>
        <Cloud1></Cloud1>
        <Cloud2></Cloud2>
        <Cloud3></Cloud3>
        <Cloud4></Cloud4>
      </CloudBox3>
    </>
  );
}

const CloudBox = styled.div`
  width: 280px;
  height: 160px;
  position: absolute;
  top: 5vh;
  left: 15vw;
  animation-name: move1;
  animation-duration: 5s;
  animation-iteration-count: infinite;

  @keyframes move1 {
    0% {
      top: 5vh;
    }
    50% {
      top: 10vh;
    }
    100% {
      top: 5vh;
    }
  }
`;

const CloudBox2 = styled.div`
  width: 280px;
  height: 160px;
  position: absolute;
  top: 5vh;
  animation-name: move2;
  animation-duration: 5s;
  animation-iteration-count: infinite;

  @keyframes move2 {
    0% {
      top: 15vh;
    }
    50% {
      top: 20vh;
    }
    100% {
      top: 15vh;
    }
  }
`;

const CloudBox3 = styled.div`
  width: 280px;
  height: 160px;
  position: absolute;
  top: 7vh;
  right: 63vh;
  animation-name: move3;
  animation-duration: 5s;
  animation-iteration-count: infinite;

  @keyframes move3 {
    0% {
      top: 7vh;
    }
    50% {
      top: 12vh;
    }
    100% {
      top: 7vh;
    }
  }
`;

const Cloud1 = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 100%;
  position: absolute;
  left: 50px;
  background-color: #f9f9f9;
`;

const Cloud2 = styled.div`
  width: 100px;
  height: 80px;
  border-radius: 100%;
  position: absolute;
  top: 50px;
  left: 10px;
  background-color: #f9f9f9;
`;
const Cloud3 = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  position: absolute;
  bottom: 0px;
  left: 80px;
  background-color: #f9f9f9;
`;
const Cloud4 = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  position: absolute;
  top: 30px;
  right: 30px;
  background-color: #f9f9f9;
`;
