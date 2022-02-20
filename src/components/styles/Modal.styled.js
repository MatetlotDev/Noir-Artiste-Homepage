import styled from "styled-components"

export const StyledModal = styled.div`
    position: fixed;
    top: 0;
    z-index: 100;
    height: 100vh;
    width: 100vw;
    background: #000000ed;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    display: ${({state}) => state};

    img {
        min-height: -webkit-fill-available;
    }
    .close {
        position: absolute;
        z-index: 101;
        top: 5%;
        right: 5%;
    }
    & :nth-child(1), & :nth-child(3), & :last-child{
        cursor: pointer;
    }
`