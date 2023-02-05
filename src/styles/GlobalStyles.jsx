import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        user-select: none;

        &::-webkit-scrollbar {
            width: 5px;
        }
 
        &::-webkit-scrollbar-track {
        background: #ddd;
        }
        
        &::-webkit-scrollbar-thumb {
        background: #666; 
        }
    }

    html {
        body {
            font-family: 'Segoe UI';
            background: #151515;
        }
        h2 {
            color: #fff;
            font-family: 'Segoe UI';
            font-size: 3rem;
            font-weight: bold;
        }
        h3 {
            font-size: 1.3rem;
            color: #fff;
        }
        p {
            font-size: 1.2rem;
            line-height: 200%;
            color: #696969;
        }
        a {
            text-decoration: none;
        }
        img {
            display: block;
        }        
    }

    .main-container {
        margin: 0 auto;
        max-width: 1600px;
        height: 100vh;
        display: flex;
    }

    .content-wrapper {
        position: relative;
        width: 100%;
        overflow-y: scroll;
    }

    .content {
    }

    .loader {
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
`
export default GlobalStyle;