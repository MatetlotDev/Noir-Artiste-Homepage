import styled from "styled-components"

export const StyledSectionHeader = styled.div`
    padding: 10rem;
    text-align: center;
    position: relative;
    color: ${({theme}) => theme.colors.white};
    font-size: 3rem;

    &::before {
        content: "";
        position: absolute;
        top: 0; 
        left: 0;
        width: 100%; 
        height: 100%;
        background: url(${({image}) => image});
        background-position: center;
        background-size: cover;
        filter: sepia(30%) brightness(0.35);
        z-index: -10;
    }
    h2 {
        font-weight: 300;
    }
`