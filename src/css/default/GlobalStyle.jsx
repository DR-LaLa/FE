import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Pretendard-Regular';
  src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

  *{
    margin: 0;
    padding: 0;
    font-family: Pretendard-Regular;
    z-index: 2;
  }

  body{
    width: 100%;
    height: 100vh;
    position: relative;
    background-color: #c6ebff;
  }
  body::after{
    content: "";
    width: 100%;
    height: 25vh;
    display: block;
    position: absolute;
    bottom: 0;
    background-color: #D6E578;
    z-index: 0;
  }
  
  #root{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyle;
