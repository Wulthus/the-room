import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import styled from "styled-components"


const StyledHelpOption = styled.div`
    padding: 1rem;
    font-size: 1rem;
    font-weight: 600;
`

export default function HelpOption(){

    const [mouse, setMouse] = useState(false);

    const pointerHandler = useCallback(function(e){
        const pointerType = e.pointerType;
        mouse === false && pointerType === "mouse" ? setMouse(true): null;
        mouse === true && pointerType !== "mouse" ? setMouse(false): null;
    }, [mouse, setMouse]);

    useEffect(function(){
        window.addEventListener("pointermove", pointerHandler)
        return function(){
          window.removeEventListener("pointermove", pointerHandler)
        }
      }, [pointerHandler]);


    return (
        <StyledHelpOption>
             <p>
                {mouse === true ? 
                "Use scrollwheel to change slides manually." : 
                "Touch and move to change slides manually."}
             </p>
             <br />
             <p>
                {mouse === true ? 
                "Hover and click on an element to change decor." : 
                "Tap on element to change decor."}

             </p>
            <br />
             <p>
                Explore more options by visiting other menus!
             </p>
        </StyledHelpOption>
    )
    
}