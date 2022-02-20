import styled from 'styled-components'

export const StyledMuralsContent = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem;
    
`

export const Wrapper = styled.div`
    max-width: 52vw;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 2rem;

    img {
        border: 3px solid ${({theme}) => theme.colors.white};
        max-width: 13vw;
        object-fit: cover;
        object-position: center;
        cursor: pointer;
    }
`