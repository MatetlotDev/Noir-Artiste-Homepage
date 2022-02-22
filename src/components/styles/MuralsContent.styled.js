import styled from 'styled-components'

export const StyledMuralsContent = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4vh 4vw;
`

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 2rem;

    img {
        border: 3px solid ${({theme}) => theme.colors.white};
        width: 22vw;
        max-width: 200px;
        object-fit: cover;
        object-position: center;
        cursor: pointer;

        @media(max-width: ${({theme}) => theme.mobile}) {
            width: 100%;
            max-width: 600px;
        }
    }

    @media(max-width: ${({theme}) => theme.mobile}) {
        grid-template-columns: repeat(1, 1fr);
    }
`