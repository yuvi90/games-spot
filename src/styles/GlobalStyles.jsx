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
            font-family: 'Poppins', sans-serif;
            background: #151515;
        }
        h2 {
            color: #fff;
            font-family: 'Poppins', sans-serif;
            font-size: 4rem;
            font-weight: bold;
        }
        h3 {
            color: #fff;
            font-size: 1.3rem;
        }
        p {
            color: #fff;
            font-size: 1.2rem;
            line-height: 200%;
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
        position: relative;
        display: flex;
    }

    .content-wrapper {
        margin-top: 10vh;
        margin-left: 280px;
        position: relative;
        width: 100%;
        min-height: 100vh;
    }

    @media screen and (max-width:650px) {
        body h2 {
            font-size: 2rem;
        }
    }
    @media screen and (max-width:980px) {
        body h2 {
            font-size: 3rem;
        }
        .content-wrapper {
            margin-left: 0;
        }
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