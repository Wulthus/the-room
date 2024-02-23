import styled from "styled-components"
import { useLightLevel } from "../context/lightLevelContext";
import { usePlant } from "../context/plantContext";
import { useRoundModal } from "../context/roundModalContext";
import { useRef } from "react";
import { useAnimation } from "../hooks/useAnimation";
import { flashDropShadow } from "../keyframes";

const StyledPlant = styled.article.attrs(props=>({
    style: {
        filter: `saturate(40%) ${`brightness(${props.$brightness})`} ${`contrast(${props.$contrast})`}`,
    },
}))`
    position: absolute;

    left: 96%;
    bottom: -22%;
    width: 27%;
    z-index: 20;

    display: flex;
    justify-content: center;

    border-radius: 50%;
    border: solid 3px transparent;

    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: .5rem;

    transition: all .2s;
        
    &:hover {
        box-shadow: var(--box-shadow-hover);
    }


`
const StyledImage = styled.img`
    max-width: 100%;
    z-index: 10;

    transition: all .2s;
    
    cursor: pointer;
`

const StyledShadow = styled.img`
    position: absolute;

    left: -1%;
    bottom: -2%;

    filter: brightness(0) blur(9px);
    opacity: .4;
    pointer-events: none;
    
    transform-origin: bottom right;
    transform: scale(1, .7) rotate(25deg);
    z-index: 9;
`


export default function Plant(){

    const { dispatch } = useRoundModal();
    const { brightness, contrast } = useLightLevel();
    const { plant } = usePlant();
    const plantRef = useRef(null);

    useAnimation(plantRef.current, plant, flashDropShadow, 0.4);

    function handleClick(e){
        dispatch({type: "plant-open", payload: [e.pageX, e.pageY]})
    }

    return (
        <StyledPlant $brightness={brightness} $contrast={contrast} title="Change plant">
             <StyledImage ref={plantRef} src={plant} alt="Houseplant on the floor" onClick={handleClick}/>
             <StyledShadow src={plant} aria-hidden="true"/>
        </StyledPlant>
    )
    
}