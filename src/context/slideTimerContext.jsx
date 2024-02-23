import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { SLIDER_TIMER_INTERVAL, SLIDER_TIMER_SECONDS } from "../config";
import { NUM_SLIDES } from "../content";
import { useSlideshow } from "./slideshowContext";
import { useRef } from "react";


const slideTimerContext = createContext(null);

function SlideTimerProvider({ children }){

    //-------------------------------------------------------------------------------STATE

    const { slideshow, slide, setSlide } = useSlideshow();
    const slideRef = useRef();
    const [timePassed, setTimePassed] = useState(0);

    //-------------------------------------------------------------------------------SETTING SLIDE

    useEffect(function(){
        slideRef.current = slide;
    }, [slide])

    //-------------------------------------------------------------------------------TIMER FUNCTION

    useEffect(function(){
        const slideTimeout = setTimeout(function(){
          if (!slideshow) return
          
          if (timePassed >= SLIDER_TIMER_SECONDS) {
            if(slideRef.current < NUM_SLIDES - 1) setSlide((lastSlide)=>lastSlide + SLIDER_TIMER_INTERVAL);
            if(slideRef.current === NUM_SLIDES - 1) setSlide(0);
            setTimePassed(0)
          } else {
            setTimePassed(time=>time+SLIDER_TIMER_INTERVAL)
          }
        }, SLIDER_TIMER_INTERVAL * 1000)
    
        return function(){
          clearTimeout(slideTimeout)
        };
    
      }, [slideshow, timePassed, setSlide])

    //-------------------------------------------------------------------------------COMPONENT STRUCTURE
    
    return (
        <slideTimerContext.Provider value={{timePassed, setTimePassed}}>
            {children}
        </slideTimerContext.Provider>
    )
}

function useSlideTimer(){
    const context = useContext(slideTimerContext)
    if (context === null) {
        throw new Error("Error: slideTimerContext used outisde of slideTimerContext.Provider.")
    }
    return context;
}

export { useSlideTimer, SlideTimerProvider}