import styled from 'styled-components'

export const StyledPaintingsDiscovery = styled.section`
    display: flex;
    justify-content: center;
    padding: 4rem 0 1rem 0;

    figure {
        margin: 0 3rem;

        img {
            width: 25vw;
            max-width: 300px;

            @media(max-width: ${({theme}) => theme.mobile}) {
                width: 90%;
            }
        }
        div {
            padding: 2vw;
            background: ${({theme}) => theme.colors.black};
            color: ${({theme}) => theme.colors.white};
            transform: translate(10%, -60%);
            font-weight: 700;

            h6 {
                font-size: 1.2rem;
                font-weight: 300;
                margin-bottom: 1rem;
                text-transform: uppercase;
            }
            p{
                cursor: pointer;
                width: fit-content;

                &:hover {
                    color: ${({theme}) => theme.colors.darkGrey}
                }
            }
        }
    }

    @media(max-width: ${({theme}) => theme.mobile}) {
        flex-direction: column;
        align-items: center;
    }
`