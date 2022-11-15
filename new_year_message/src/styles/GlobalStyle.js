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
    }
    @media only screen and (min-width: 375px) {
        body {
            background-color: #F2F0F5;
            display: flex;
        }
        .App {
            width: 375px;
            height: 100vh;
            color: #FFF;
            & > {
            float: left;
            }
        }
    }
`;
