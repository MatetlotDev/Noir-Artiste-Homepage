import styled from "styled-components"

export const StyledPaintingsHeader = styled.div`
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
        background: url('https://images.squarespace-cdn.com/content/v1/5b37edcfaf20967da76a2a29/1632763849105-AVQAZV6SBCXM0RT7E2YL/NOIR+artist+-+Broken+Dreams+-+200x160cm.jpg?format=2500w');
        background-position: center;
        background-size: cover;
        filter: sepia(30%) brightness(0.35);
        z-index: -10;
    }
    h2 {
        font-weight: 300;
    }
`