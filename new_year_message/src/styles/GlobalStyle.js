import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 10;
        padding: 10;
    }
    body {
        width: 100%;
    }
    @media only screen and (min-width: 375px) {
        body {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #B9ADFF;
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
