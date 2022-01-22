import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html{
  font-size: 18px;
  @media all and (max-width: 925px) {
  font-size: 80%;
	}
  @media all and (max-width: 400px) {
  font-size: 50%;
	}
}
  * {
    margin: 0;
    padding: 0;
    box-size: border-box !important;
    font-family: 'Poppins', sans-serif;
    ::-webkit-scrollbar {
    display: none;
    font-size: 10px;
}
body{
    background: #f5f5f5;

}
  }
`;

export default GlobalStyle;
