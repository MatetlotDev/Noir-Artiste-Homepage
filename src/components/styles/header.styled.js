import styled from 'styled-components'

export const StyledHeader = styled.header`
    display: flex;
    transform: translateX(${({transform}) => transform});
    transition: all .5s;

    h1 {
        color: ${({theme}) => theme.colors.white};
        font-size: 5.3rem;
        font-weight: 300;

        @media(max-width: ${({theme}) => theme.mobile}) {
            font-size: 3.3rem
        }
    }
    h4 {
        font-size: 2.3rem;
        color: ${({theme}) => theme.colors.lightGrey};
        margin: 1rem;

        @media(max-width: ${({theme}) => theme.mobile}) {
            font-size: 1.8rem
        }
    }
    a {
        font-size: 2.3rem;
        font-weight: 300;
        color: ${({theme}) => theme.colors.lightGrey};
        margin-bottom: 4rem;

        @media(max-width: ${({theme}) => theme.mobile}) {
            font-size: 1.8rem
        }
    }
`

export const HeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 80vh;
    position: relative;
    justify-content: center;
    text-transform: uppercase;
    min-width: 100%;

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
`

export const MobileMenu = styled.div`
    padding: 2rem;
    background: ${({theme}) => theme.colors.black};
    color: ${({theme}) => theme.colors.white};
    height: 100vh;
    min-width: 20vw;
`

export const MenuContent = styled.div`

    li {
        list-style: none;
        margin: 1rem;
        text-transform: uppercase;
        cursor: pointer;
    
        &:hover {
            color: ${({ theme }) => theme.colors.darkGrey};
        }
    }
`

export const Icons = styled.div`
    transform: translateX(-100px);
    cursor: pointer;
`
