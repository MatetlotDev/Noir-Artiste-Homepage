import styled from 'styled-components'

export const StyledDiscovery = styled.section`
    display: flex;
    justify-content: center;
    padding: 4rem;

    div {
        text-align: center;
        margin: 1rem;

        img {
            max-width: 240px;
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
`