import styled from 'styled-components'

export const StyledDiscover = styled.section`
    display: flex;
    justify-content: center;
    padding: 4rem;

    div {
        text-align: center;
        margin: 1rem;

        img {
            width: 20vw;
            max-width: 240px;

            @media(max-width: ${({theme}) => theme.mobile}) {
                width: 90%;
            }
        }
        h6 {
            font-size: 1rem;
            font-weight: 300;
            margin: 0.6rem 0;
        }
        p {
            color: ${({theme}) => theme.colors.lightGrey}
        }
    }

    @media(max-width: ${({theme}) => theme.mobile}) {
        flex-direction: column;
        padding: 1rem;
    }
`