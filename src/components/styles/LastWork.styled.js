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
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    img {
        border: 2px solid ${({theme}) => theme.colors.white};
        width: 30vw;
        max-width: 300px;
        cursor: pointer;
        min-height: -webkit-fill-available;
    }
`

export const Flex = styled.div`
    display: flex;
    width: 100%;
    max-width: 800px;
    justify-content: space-around;
    margin: 2rem;
`
