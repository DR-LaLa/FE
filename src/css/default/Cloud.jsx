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
  top: 2vh;
  left: 15vw;
`;

const CloudBox2 = styled.div`
  width: 280px;
  height: 160px;
  position: absolute;
  top: 20vh;
`;

const CloudBox3 = styled.div`
  width: 280px;
  height: 160px;
  position: absolute;
  top: 7vh;
  right: 0;
  z-index: 3;
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
