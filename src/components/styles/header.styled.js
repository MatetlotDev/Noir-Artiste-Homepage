import styled from 'styled-components'

export const StyledHeader = styled.header`
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    position: relative;

    &::before{
        content: "";
        position: absolute;
        top: 0; 
        left: 0;
        width: 100%; 
        height: 100%;
        background: url('https://images.squarespace-cdn.com/content/v1/5b37edcfaf20967da76a2a29/1640609617961-HLKE58CLJ9JU4RQI86XH/20211207_132324.jpg?format=2500w');
        background-position: center;
        background-size: cover;
        filter: sepia(30%) brightness(0.35);
        z-index: -10;
    }

    h1 {
        color: ${({theme}) => theme.colors.white};
        font-size: 5.3rem;
        font-weight: 300;
    }
    h4 {
        font-size: 2.3rem;
        color: ${({theme}) => theme.colors.lightGrey};
        margin: 1rem;
    }
    a {
        font-size: 2.3rem;
        font-weight: 300;
        color: ${({theme}) => theme.colors.lightGrey};
        margin-bottom: 4rem;
    }
`