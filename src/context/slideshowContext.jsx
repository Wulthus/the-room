import { useRef } from "react";
import { useCallback } from "react";
import { createContext, useContext, useState } from "react";
import { NUM_SLIDES } from "../content";


const slideshowContext = createContext(null);


function SlideshowProvider({ children }){

    //----------------------------------------------------------------STATE

    const [slideshow, setSlideshow] = useState(false);
    const [slide, setSlide] = useState(0);
    const slideRef = useRef();
    slideRef.current = slide

    //----------------------------------------------------------------NEXT SLIDE

    const nextSlide = useCallback(function(){
      
        if(slideRef.current >= NUM_SLIDES - 1) return;
        setSlideshow(false);
        setSlide((lastSlide)=>lastSlide + 1);
      
      }, [slideRef]);
    
    
    //----------------------------------------------------------------PREVIOUS SLIDE

      const previousSlide = useCallback(function(){
        
        if(slideRef.current <= 0) return;
        setSlideshow(false);
        setSlide((lastSlide)=>lastSlide - 1);
      
      }, [slideRef])

    
    

    //----------------------------------------------------------------COMPONENT STRUCTURE

    return (
        <slideshowContext.Provider value={{slideshow, setSlideshow, slide, setSlide, nextSlide, previousSlide}}>
            {children}
        </slideshowContext.Provider>
    )
}



function useSlideshow(){
    const context = useContext(slideshowContext);
    if (context === null) {
        throw new Error("Error: slideshowContext used outisde of slideshowContext.Provider.")
    }
    return context;
}

export { useSlideshow, SlideshowProvider }