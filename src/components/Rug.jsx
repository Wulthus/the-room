import styled from "styled-components"
import { useRug } from "../context/rugContext";
import { useRoundModal } from "../context/roundModalContext";
import { useAnimation } from "../hooks/useAnimation";
import { useRef } from "react";
import { flashBoxShadow } from "../keyframes";

const StyledRug = styled.article`

    width: 80%;
    
    top: 10%;
    left: 10%;
    
    position: absolute;

    cursor: pointer;
    display: flex;
    align-items: end;
    justify-content: center;

    filter: saturate(75%);

    transition: all .2s;

    opacity: 0.95;

    &:hover{
        box-shadow: var(--box-shadow-hover);
    }
`

const StyledImage = styled.img`
    max-width: 100%;
`

export default function Rug(){

    const { rug } = useRug();
    const { dispatch } = useRoundModal();
    const rugRef = useRef(null);

    useAnimation(rugRef.current, rug, flashBoxShadow, 0.4);

    function handleClick(e){
        dispatch({type: "rug-open", payload: [e.pageX, e.pageY]})
    }

    return (
        <StyledRug title="Change rug" data-type="rug" onClick={handleClick}>
             <StyledImage src={rug} alt="A rug"  ref={rugRef}/>
        </StyledRug>
    )
    
}