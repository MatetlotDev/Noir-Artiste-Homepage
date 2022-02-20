import styled from "styled-components"

export const StyledLastWork = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h3 {
        text-transform: uppercase;
        margin-bottom: 2rem;
        font-size: 1.5rem;
        font-weight: 300;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 48vw;

    img {
        border: 2px solid ${({theme}) => theme.colors.white};
        max-width: 16vw;
        cursor: pointer;
    }
`

export const Flex = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-around;
    margin: 2rem;
`
