import styled from "styled-components";

const StyledBackground = styled.img`
    
    width: 75%;

    top: -2rem;
    left: -5rem;

    position: absolute;

    transform: scaleX(-1);
    pointer-events: none;
    user-select: none;

`

export default function RotatedBackground(){
    return (
        <StyledBackground  src="bryozoa.svg" aria-hidden="true"/>
    )
    
}