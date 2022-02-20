import styled from 'styled-components'

export const StyledPaintingsDiscovery = styled.section`
    display: flex;
    justify-content: center;
    padding: 4rem 0 1rem 0;

    figure {
        margin: 0 3rem;

        div {
            padding: 2rem;
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
`