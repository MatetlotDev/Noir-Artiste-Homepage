import styled from 'styled-components'

export const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    position: fixed;
    z-index: 10;
    top: 0;
    width: 100%;
    color: ${({theme}) => theme.colors.white};

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
            margin-left: 2rem;
            text-transform: uppercase;
            cursor: pointer;

            &:hover {
                color: ${({theme}) => theme.colors.darkGrey};
            }
        }
    }
`