import styled from 'styled-components'

export const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    position: fixed;
    z-index: 10;
    top: 0;
    width: 100%;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ bg }) => bg};
    transition: all .5s;

    img {
        height: auto;
        max-height: 100px;
        width: auto;
        max-width: 100%;
        cursor: pointer;
    }
    
    ul {
        display: flex;
        align-items: center;

        li {
            list-style: none;
            margin: 1rem;
            text-transform: uppercase;
            cursor: pointer;
    
            &:hover {
                color: ${({ theme }) => theme.colors.darkGrey};
            }
        }

        @media(max-width: ${({ theme }) => theme.tablet}) {
            display: none;
        }
    }

    @media(max-width: ${({ theme }) => theme.tablet}) {
        position: absolute;
        width: fit-content;
    }
`
