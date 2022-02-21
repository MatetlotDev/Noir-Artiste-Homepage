import styled from "styled-components"

export const StyledAboutContent = styled.section`
    padding: 4vh 4vh;
    display: flex;
    justify-content: center;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80%;
        max-width: 600px;
    }
    p {
        text-align: center;
        margin-bottom: 1rem;

    }
    h6 {
        font-weight: 300;
        font-size: 1rem;
        align-self: flex-start;
    }
`