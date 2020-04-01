import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0 ;
        padding: 0;
        box-sizing: border-box;
       

    }
    body{
        background: #e7e8e9 ;
        text-rendering: optimizeLegibility !important;
        margin: 0 ;
    }
`;

export default GlobalStyle;