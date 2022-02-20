import styled from 'styled-components'

export const Button = styled.button`
    border: 2px solid ${({color}) => color};
    padding: 0.8rem 1.3rem;
    text-transform: uppercase;
    background: transparent;
    color: ${({color}) => color};
    font-size: ${({font}) => font || '1rem'};
    cursor: pointer;

    &:hover {
        background: ${({color}) => color};
        color: ${({theme}) => theme.colors.darkGrey};
    }
`