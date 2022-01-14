import '../styles/globals.css'
import { createGlobalStyle, ThemeProvider } from "styled-components";

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
  return <>
    <GlobalStyle />
      <Component {...pageProps} />
  </>
}

export default MyApp
