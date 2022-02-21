import styled from 'styled-components'

export const StyledFooter = styled.footer`

`

export const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    & > * {
        margin: 0 .5rem 1rem 0;
    }

    &:nth-of-type(2) {
        background: ${({theme}) => theme.colors.black};
        flex-direction: column;
        color: ${({theme}) => theme.colors.white};
        padding: 4rem;

        p {
            text-transform: uppercase;
        }

        a {
            color: ${({theme}) => theme.colors.white};
        }
    }
`