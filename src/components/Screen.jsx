import styled, { keyframes } from "styled-components";

import { useEffect } from "react";
import { useCallback } from "react";

import { useSlideshow } from "../context/slideshowContext";
import { useLightLevel } from "../context/lightLevelContext";
import { DIMMER_MAX_RANGE, DIMMER_MIN_RANGE, LIGHTS_ON_ANIMATION_DELAY_SECONDS, LIGHT_INCRIMENT_INTERVAL_SECONDS, SCREEN_BOX_SHADOW_LENGTH, SCROLL_MIN_MOVEMENTX, SLIDER_TIMER_INTERVAL, SLIDER_TIMER_SECONDS } from "../config.jsx";
import { useCamera } from "../context/cameraContext.jsx";
import {  PAGE_CONTENT } from "../content.jsx";
import { useSlideTimer } from "../context/slideTimerContext.jsx";
import { checkFirst, checkLast } from "../helpers.js";

import Slide from "./Slide";
import ProgressIndicator from "./ProgressIndicator.jsx";


const lightsOn = keyframes`
  0% {
    box-shadow: none;
    background-image: none;
  }

  90% {
    box-shadow: none;
    background-image: none;
  }
  100% {
    box-shadow: 0rem 0rem 10rem var(--color-screen),
                0rem 0rem .7rem .1rem var(--color-screen-half) ;
    background-image: url("../public/canvas.webp");
  }
`

const StyledScreen = styled.div.attrs(props=>({
  style: {
    filter: `${`brightness(${props.$brightness})`} ${`contrast(${props.$contrast})`}`,
    boxShadow: `0rem 0rem ${props.$shadowLength}rem 0.05rem var(--color-screen), 0rem 0rem .7rem .1rem var(--color-screen-half)`,
  },
}))`

background-image: url("canvas.webp");

width: 75%;
height: 75%;

position: absolute;

z-index: 4;

right: 50%;
top:50%;

transform-origin: center;
transform: translateX(50%) translateY(-50%);

display: flex;
align-items: center;
justify-content: center;
overflow: hidden;

border-radius: 7px;

animation: ${lightsOn} 1.5s;
`

const IndicatorBox = styled.article`
    top: 98.5%;
    width: 100%;
    height: 1.5%;
    
    position: absolute;
`

//------------------------------------------------------COMPONENT FUNCTION

export default function Screen({ children }){

  //-----------------------------------------------------STATE
    
    const { setSlideshow, slide, previousSlide, nextSlide } = useSlideshow();
    const { setTimePassed } = useSlideTimer();
    const { lightLevel, setLightLevel } = useLightLevel();
    const { setAuto } = useCamera();

    //----------------------------------------------------OPENING ANIMATION

      function handleAnimationEnd(){
        
        let j = DIMMER_MIN_RANGE

        setTimeout(() => {
          const lightInterval = setInterval(function(){
            if (j >= DIMMER_MAX_RANGE){
              setSlideshow(true);
              setAuto(true);
              clearInterval(lightInterval);
            } 
            j++;
            setLightLevel(j);
          }, LIGHT_INCRIMENT_INTERVAL_SECONDS * 1000)
        }, LIGHTS_ON_ANIMATION_DELAY_SECONDS * 1000);
      }
  

  //---------------------------------------------------CHANGING SLIDES SCROLL
  
    const changeSlideScroll = useCallback(function(e){
      if (e?.deltaY > 0 && !checkLast(slide)) {
        setTimePassed(0)
        nextSlide()
      }
      if (e?.deltaY < 0 && !checkFirst(slide)) {
        setTimePassed(0)
        previousSlide()
      }
    }, [nextSlide, previousSlide, setTimePassed, slide])

  
    function showEvent(e){
      console.log(e);
    }

    //---------------------------------------------------CHANGING SLIDES POINTER
  
    const changeSlidePointer = useCallback(function(e){
      if (
        e?.nativeEvent.movementX <= -SCROLL_MIN_MOVEMENTX 
        && e.pressure >= 0.5 
        && e.pointerType !== "mouse"
        && !checkLast(slide)
        ) {
        setTimePassed(0)
        nextSlide()
      }
      if (
        e?.nativeEvent.movementX >= SCROLL_MIN_MOVEMENTX 
        && e.pressure >= 0.5 
        && e.pointerType !== "mouse"
        && !checkFirst(slide)
        ) {
        setTimePassed(0)
        previousSlide()
      }
    }, [nextSlide, previousSlide, setTimePassed, slide]);
  
    //------------------------------------------------SCROLLWHEEL WINDOW EVENT LISTENER
  
    useEffect(function(){
      window.addEventListener("wheel", changeSlideScroll)
      return function(){
        window.removeEventListener("wheel", changeSlideScroll)
      }
    }, [changeSlideScroll]);

    //-----------------------------------------------CLICK HANDLER FUNCTION

    function handleClick(){
      setSlideshow(false);
    };

    //-----------------------------------------SCREEN BRIGHTNESS/CONTRAST UPDATE

    const briConIncrement = (0.2/(DIMMER_MAX_RANGE-DIMMER_MIN_RANGE))*(lightLevel-30);
    const brightness = 0.8 + briConIncrement;
    const contrast = 1.2 - briConIncrement;

    //-----------------------------------------SCREEN BOX-SHADOW UPDATE

    const shadowIncriment = ((SCREEN_BOX_SHADOW_LENGTH-0.7)/(DIMMER_MAX_RANGE-DIMMER_MIN_RANGE))*(lightLevel-30);
    const shadowLength = SCREEN_BOX_SHADOW_LENGTH - shadowIncriment;

    //-----------------------------------------COMPONENT STRUCTURE

    return (
        <StyledScreen 
        data-object="screen" 
        onAnimationEnd={handleAnimationEnd} 
        $brightness={brightness} 
        $contrast={contrast} 
        $shadowLength={shadowLength} 
        onClick={handleClick}
        onPointerMove={changeSlidePointer}
        >
          <IndicatorBox>
            <ProgressIndicator color="#fff" colorFull="#fff" />
          </IndicatorBox>
          {PAGE_CONTENT.map((page)=><Slide slide={slide} key={page.props.id}>{page}</Slide>)}
        </StyledScreen>
    )
    
}