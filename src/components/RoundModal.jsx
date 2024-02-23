import styled from "styled-components";
import { useRoundModal } from "../context/roundModalContext";
import { Close } from "./Icons";

const StyledModal = styled.menu.attrs(props=>({
    style: {
        width: `${props.$open ? props.$diameter: 0}px`,
        height: `${props.$open ? props.$diameter: 0}px`,
        top: `${props.$positionY}px`,
        left: `${props.$positionX}px`,
    },
}))`
    list-style: none;

    border-radius: 50%;

    background: var(--modals-background);
    position: fixed;
    overflow: hidden;

    z-index: 11;

    transform: translateX(-50%) translateY(-50%) ${props=> props.$open ? null : "rotate(-110deg)"};

    transition: width .25s, height .25s, transform .5s;
`

const StyledModalOption = styled.li.attrs(props=>({
    style: {
        transform: `${`rotate(${props.$rotation}deg)`}`,

    },
}))`
    width: 0px;
    height: 0px;

    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;

    transform-origin: center;
    background-color: orange;
    position: absolute;
    
    z-index: 12;
`

const StyledOptionContent = styled.div.attrs(props=>({
    style: {
        transform: `${`translateY(-${props.$translation}px)`} translateX(-50%) ${`rotate(-${props.$rotation}deg)`} `,
        width: `${props.$size}px`,
        height: `${props.$size}px`,
    },
}))`

    transform-origin: center;

    left: 0;
    right: 0;
    bottom: 0;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto; 

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    z-index: 13;
`

const StyledModalButton = styled.button`
    width: 20%;
    height: 20%;
    padding: 1rem;
    color: var(--color-font);
    background-color:#fff;
    
    transform: translateX(-50%) translateY(-50%);
    
    position: relative;
    top: 50%;
    left: 50%;

    z-index: 13;

    border-radius: 50%;
    
    border: none;
    
    cursor: pointer;

    transition: all .2s;

    &:hover{
        color: var(--color-hover);
    }

    &:active{
        color: var(--color-hover);
        transform: scale(0.90) translateX(-50%) translateY(-50%);
        top: 51%;
        left: 49%;
    }
`

export default function RoundModal(){

    //---------------------------------------------------STATE MANAGEMENT

    const { state, dispatch } = useRoundModal();

    const content = state.content;
    const diameter = state.modalSizePixels;
    const translation = state.contentOffsetPixels;
    const size = state.contentSizePixels;
    const open = state.open;
    const [positionX, positionY] = state.position;

    //--------------------------------------------------POSITION CORRECTION
    
    let correctedPosX = positionX;
    let correctedPosY = positionY;
    
    if (positionX < diameter){
        correctedPosX = diameter/2;
    }
    if (positionY < diameter){
        correctedPosY = diameter/2;
    }
    if (positionY > window.innerHeight - (diameter/2)){
        correctedPosY = window.innerHeight - (diameter/2);
    }
    if (positionX > window.innerWidth - (diameter/2)){
        correctedPosX = window.innerWidth - (diameter/2);
    }

    //---------------------------------------------------------CALCULATING ANGLES
    
    const numElements = content.length;
    const anglePortion = 360 / numElements;

    //---------------------------------------------------------EVENT HANDLER FUNCTIONS

    function handleClick(){
        dispatch({type: "close", payload: null,});
    }

    //---------------------------------------------------------COMPONENT STRUCTURE
    
    return (
        <StyledModal $diameter={diameter} $open={open} $positionX={correctedPosX} $positionY={correctedPosY}>
            {content.map(element=>(
                <StyledModalOption $rotation={anglePortion * content.indexOf(element)} key={Math.random()}>
                    <StyledOptionContent $rotation={anglePortion * content.indexOf(element)} $translation={translation} $size={size} key={anglePortion * content.indexOf(element)}>
                        {element}
                    </StyledOptionContent>
                </StyledModalOption>))}
            <StyledModalButton onClick={handleClick} title="Close palette">
                <Close />
            </StyledModalButton>
        </StyledModal>
    )
    
};