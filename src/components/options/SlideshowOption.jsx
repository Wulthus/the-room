import styled, { css } from "styled-components"
import { useSlideshow } from "../../context/slideshowContext"
import { DoubleLeftIcon, DoubleRightIcon,  LeftThinIcon, PauseIcon, PlayIcon, RightThinIcon } from "../Icons";
import { NUM_SLIDES } from "../../content";
import ProgressIndicator from "../ProgressIndicator";
import { useSlideTimer } from "../../context/slideTimerContext";
import { checkFirst, checkLast } from "../../helpers";

const StyledOption = styled.div`
    font-size: 1rem;
    text-align: center;

    width: 100%;
    height: 100%;
`

const StyledControls = styled.div`
    padding: 1rem;

    min-height: 96%;

    display: flex;
    gap: .5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const StyledButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const illuminateRed = css`
    color: var(--color-hover);
    transform: scale(1.2);
`

const greyedOut = css`
color: var(--color-greyed-out);
transform: scale(1) translateY(0px);
cursor: default;
`

const activeRed = css`
    color: var(--color-hover);
    transform: scale(0.95) translateY(3px);
`

const StyledButton = styled.button`
    border: none;
    color: var(--color-font);
    background-color: transparent;
    width: 20%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: all .2s;
    cursor: pointer;

    &:hover{
        ${illuminateRed}
    }

    &:active{
        ${activeRed}
    }
`

const StyledPreviousButton = styled(StyledButton)`
    &:hover{
         ${props=>props.$isFirst === true ? greyedOut : illuminateRed};
     }

     &:active{
        ${props=>props.$isFirst === true ? greyedOut : activeRed};
    }
`

const StyledNextButton = styled(StyledButton)`
    &:hover{
         ${props=>props.$isLast === true ? greyedOut : illuminateRed};
     }

     &:active{
        ${props=>props.$isLast === true ? greyedOut : activeRed};
    }
`

const StyledProgressBar = styled.div`
    height: 4%;
    opacity: .7;
    background-color: #fff;
`


export default function SlideshowOption(){

    const { slideshow, setSlideshow, nextSlide, previousSlide, setSlide, slide } = useSlideshow();
    const { setTimePassed } = useSlideTimer();

    function gotoFirstSlide(){
        setSlide(0);
        setTimePassed(0);
        setSlideshow(false);

    }

    function gotoLastSlide(){
        setSlide(NUM_SLIDES-1);
        setTimePassed(0);
        setSlideshow(false);

    }

    function handleNextSlide(){
        nextSlide();
        setTimePassed(0);
    }

    function handlePreviousSlide(){
        previousSlide();
        setTimePassed(0);
    }

    function handleClick(){
        setTimePassed(0);
        setSlideshow((slideshow)=>!slideshow)
    }

    return (
        <StyledOption data-type="styled-option">
            <StyledControls data-type="styled-controls">
                <h3>Slide Control</h3>
                <StyledButtons data-type="styled-buttons">
                    <StyledPreviousButton title="First Slide" onClick={gotoFirstSlide} $isFirst={checkFirst(slide)}>
                        <DoubleLeftIcon widthString="70" heightString="70"/>
                    </StyledPreviousButton>
                    <StyledPreviousButton title="Previous slide (Mouse wheel up)" onClick={handlePreviousSlide} $isFirst={checkFirst(slide)}>
                        <LeftThinIcon widthString="70" heightString="70"/>
                    </StyledPreviousButton>
                    <StyledButton title={!slideshow ? "Play slideshow" : "Pause slideshow"} onClick={handleClick}>
                        {slideshow ? <PauseIcon /> : <PlayIcon/>}
                    </StyledButton>
                    <StyledNextButton title="Next Slide (Mouse wheel down)" onClick={handleNextSlide} $isLast={checkLast(slide)}>
                        <RightThinIcon   widthString="80" heightString="80"/>
                    </StyledNextButton>
                    <StyledNextButton title="Last Slide" onClick={gotoLastSlide} $isLast={checkLast(slide)}>
                        <DoubleRightIcon widthString="70" heightString="70"/>
                    </StyledNextButton>
                </StyledButtons>
            </StyledControls>
            <StyledProgressBar data-type="progress-bar">
                {slideshow && <ProgressIndicator color="var(--color-hover)" colorFull="#fff"/>}
            </StyledProgressBar>
        </StyledOption>
    )
    
}