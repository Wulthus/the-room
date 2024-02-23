import styled from "styled-components"
import { useSlideTimer } from "../context/slideTimerContext"
import { SLIDER_TIMER_INTERVAL, SLIDER_TIMER_SECONDS } from "../config";
import { useSlideshow } from "../context/slideshowContext";

const StyledMask = styled.div`
    Width: 100%;
    height: 100%;

    cursor: help;

    background-color: ${props=>props.$width === 0 ? props.colorFull : "transparent"};
`

const StyledProgressIndicator = styled.div`

    height: 100%;
    width: ${props=>props.$width}%;

    transition: all 1s linear;

    visibility: ${props=>props.$width === 100 || props.$width === 0 ? "hidden" : "visible"};

    border-radius: 2px;

    background-color: ${props=>props.$color};
`

export default function ProgressIndicator({ color, colorFull }){

    const { timePassed } = useSlideTimer();

    const progress = timePassed > 0 ? (timePassed/SLIDER_TIMER_SECONDS * 100 ): 0;

    return (
        <StyledMask $width={progress} $colorFull={colorFull} title={`Slide changes in: ${SLIDER_TIMER_SECONDS - timePassed}s.`}>
            <StyledProgressIndicator $width={progress} $color={color} $transition={SLIDER_TIMER_INTERVAL}/>
        </StyledMask>
    )
    
}