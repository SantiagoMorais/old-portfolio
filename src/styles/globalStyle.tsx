import { createGlobalStyle } from "styled-components"
import { fonts } from "./variables"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        border: none;
        font-family: ${fonts.fontFamily};
    }

    html {
        font-size: 62.5%;
        font-weight: 300;
        scroll-behavior: smooth;
    }

    body {
        font-size: ${fonts.fontSizeSmall};
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
`