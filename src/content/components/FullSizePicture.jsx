import styled, { css } from "styled-components"

const showImage = css`

    visibility: visible;

    opacity: 1;
`

const StyledFigure = styled.figure`
    position: absolute;
    padding: 1rem;

    width: 100%;
    height: 100%;

    top: 0%;
    left: 0%;

    opacity: 0;

    z-index: 8;

    cursor: zoom-out;

    transition: all .4s;
    visibility: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    ${props=> props.$show ? showImage : null}
`



const StyledImage = styled.img`
    max-width: 75%;
    border: 6px solid #fff;
    border-radius: 10px;
`

export default function FullSizePicture({ state, handleClick }){

    return (
        <StyledFigure $show={state.show} onClick={handleClick}>
            <StyledImage title="Return" src={state.src} alt={state.alt} />
        </StyledFigure>
    )
    
}