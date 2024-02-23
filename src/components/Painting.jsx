import styled from "styled-components"
import { useRoundModal } from "../context/roundModalContext"
import { usePainting } from "../context/paintingContext"
import { useRef } from "react"
import { useAnimation } from "../hooks/useAnimation"
import { flashBoxShadow } from "../keyframes"

const StyledPainting = styled.article`
    position: absolute;

    background-color: rgb(250, 250, 250);

    top: 12%;
    left: 8%;

    max-width: 14%;

    padding: .5rem;

    border: 2px solid rgba(0, 0, 0, 0.4);

    transition: all .2s;

    &:hover {
        box-shadow: var(--box-shadow-hover);
    }
`

const StyledImage = styled.img`
    max-width: 100%;
    transform-style: preserve-3d;
    transform: rotateY(180deg);
    opacity: 0.8;
    filter: saturate(70%);
`

export default function Painting(){

    const { painting } = usePainting();
    const { dispatch } = useRoundModal();
    const paintingRef = useRef(null);

    useAnimation(paintingRef.current, painting, flashBoxShadow, 0.4);

    function handleClick(e){
        dispatch({type: "painting-open", payload: [e.pageX, e.pageY]})
    }

    return (
        <StyledPainting data-object="Painting" title="Change image" onClick={handleClick}>
             <StyledImage src={painting} alt="Painting on the wall" ref={paintingRef}/>
        </StyledPainting>
    )
    
}