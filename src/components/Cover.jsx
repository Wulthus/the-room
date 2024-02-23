import { useRef } from "react";
import { useEffect } from "react";
import { COVER_ANIMATION_SECONDS } from "../config";

import styled from "styled-components";

const StyledElement = styled.div`
    width: 100%;
    height: 100%;

    background-image: var(--wall-gradient), url(${props=>props.$texture});

    transform-origin: top;

    box-shadow: 0rem 0rem 1.6rem .7rem #fff;


    visibility: hidden;

    transition: all .2s;
`

const cover = [
    {height: "0%"},
    {height: "100%"}
]


export default function Cover({ passedState, passedSetter }){

    const fakeElementRef = useRef(null);
    const isFirstRenderRef = useRef(true);
    let animationTimerRef = useRef(null);


    useEffect(function(){
        
        if (isFirstRenderRef.current === true) return
        
        clearTimeout(animationTimerRef.current);

        fakeElementRef.current.style.visibility = "visible";
        fakeElementRef.current.animate(cover, COVER_ANIMATION_SECONDS*1000)

        animationTimerRef.current = setTimeout(function(){
            fakeElementRef.current.style.visibility = "hidden";
            passedSetter(passedState);

        }, COVER_ANIMATION_SECONDS*1000)

    }, [passedState, passedSetter, isFirstRenderRef])


    useEffect(function(){
        if (isFirstRenderRef.current === false) return
        isFirstRenderRef.current = false;
    }, []);


    return (
        <StyledElement ref={fakeElementRef} $texture={passedState}/>
    )
    
}