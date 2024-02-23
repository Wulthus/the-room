import styled, { css } from "styled-components"

const visibleOverlay = css`
    opacity: 1;
    visibility: visible;
`

const StyledOverlay = styled.article`
    width: 100%;
    height: 100%;

    top: 0%;
    left: 0%;

    background-color: transparent;

    z-index: 7;

    opacity: 0;

    background-color: aliceblue;

    transition: all .4s;

    position: absolute;

    visibility: hidden;

    ${props=>props.$show ? visibleOverlay : null};
`


export default function Overlay({ state }){
    return (
        <StyledOverlay $show={state.show}/>
    )
    
}