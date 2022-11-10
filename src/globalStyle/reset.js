import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --background-black: #444444;
        --board-background: #2F2F2F;
        --solid-blue: #7ED1DC;
        --shadow-blue: #63B8B8;
        --solid-red: #E71E1E;
        --shadow-red: #CA3A3A;
        --solid-green: #82D033;
        --shadow-green: #62D938;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style-type: none;
        font-family: 'Inter', sans-serif;
    }

    body {
        background-color: var(--background-black);
        min-height: 100vh;
    }
`;

export default GlobalStyle;