// import { useRef } from "react";
import { useEffect, useRef } from "react";

export function useAnimation(element, state, animation, timeSeconds){

    const firstRenderRef = useRef(true);
    const elementRef = useRef(null);

    useEffect(function(){
        elementRef.current = element
    },[element])


    useEffect(function(){
        if (firstRenderRef.current !== true) {
            elementRef.current?.animate(animation, timeSeconds * 1000);
        }

        firstRenderRef.current = false
        
    }, [firstRenderRef, animation, state, timeSeconds])
}