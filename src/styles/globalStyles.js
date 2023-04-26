import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body, html{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #577d86;
        overflow: hidden;
        font-family: 'Lato', sans-serif;
    }
`
export default GlobalStyle