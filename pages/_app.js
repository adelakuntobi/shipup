import '../styles/globals.css'
import { createGlobalStyle, ThemeProvider } from "styled-components";


import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const GlobalStyle = createGlobalStyle`
*{
  font-family: 'Lato', sans-serif  !important;
}

body{
  font-size: 14px;

  @media screen {
    
  }
}

input{
  outline: none;
  border: 0;
}
`;



function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      // easing: "ease-out-cubic",
      // once: true,
      // offset: 50,
    });
  }, []);

  return <>
    <GlobalStyle />
      <Component {...pageProps} />
  </>
}

export default MyApp
