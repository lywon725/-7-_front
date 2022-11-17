import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    html {
        -webkit-touch-callout:none;
        -webkit-user-select:none;
        -webkit-tap-highlight-color:rgba(0,0,0,0);
        font-size: 0.9rem;
    }
    *{
        margin: 10;
        padding: 10;
    }
    body {
        width: 100%;
        display: center;
        overflow: scroll;
    }
    @media only screen and (min-width: 375px) {
        body {
            background-color: #F2F0F5;
            display: flex;
            overflow: scroll;
        }
        .App {
            width: 375px;
            color: #FFF;
            & > {
            float: left;
            }
        }
    }

`;
