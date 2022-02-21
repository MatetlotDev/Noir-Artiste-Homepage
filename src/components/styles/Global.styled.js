import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Sulphur+Point:wght@300;400;700&display=swap');

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Sulphur Point', sans-serif;
    }

    body {
        overflow-x: hidden;
    }
`

export default GlobalStyle