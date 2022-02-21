import styled from 'styled-components'

export const StyledContactContent = styled.section`
    padding: 4rem 25vw;
    display: flex;
    flex-direction: column;
    
    label {
        display: block;
    }
    input {
        min-width: 24.2vw;
        width: 100%;
        min-height: 2rem;
        margin-bottom: 1rem;
    }
    p {
        color: ${({theme}) => theme.colors.lightGrey};
        font-size: 0.7rem;
        margin-bottom: 0;
    }
    div {
        margin-right: 1rem;
    }       
    textarea {
        width: 100%;
    }
    
`

export const Flex = styled.div`
    display: flex;

    input {
        margin-bottom: 0;
    }
    p {
        margin-bottom: 1rem;
    }
`