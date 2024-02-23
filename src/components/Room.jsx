import { useRef } from "react";
import { useEffect } from "react";
import styled from "styled-components"
import { useCamera } from "../context/cameraContext";

const presentation = [
    {transform: `translateX(0%) translateY(0%)`},
    {transform: `translateX(10%) translateY(0%)`},
    {transform: `translateX(10%) translateY(10%)`},
    {transform: `translateX(0%) translateY(10%)`},
    {transform: `translateX(0%) translateY(0%)`},
]

const presentationOptions = {
  id: "presentation",
  duration: 120*1000,
  iterations: Infinity,
}

const StyledRoom = styled.main`

  /* height: 90%; */
  min-width: 65%;
  width: 800px;
  max-width: 83.5%;
  
  min-height: 70%;
  height: 400px;
  max-height: 88%;

  position: relative;

  perspective: 1000px;
  perspective-origin: 50% 50%;
  
  transition: all .5s;
`

export default function Room({ children }){

    const { auto, X, Y } = useCamera();
    const roomRef = useRef(null);

    useEffect(function(){

        const animations = roomRef.current.getAnimations()

      if (auto) {
        roomRef.current.animate(presentation, presentationOptions)
      }

      if (!auto) {
        animations?.forEach(
          animation=>animation.cancel()
        )
      }
    }, [auto])

    return (
        <StyledRoom ref={roomRef} style={{
          transform: `translate(${X}%, ${Y}%)`,
          backgroundColor: "red",
        }}>
             {children}
        </StyledRoom>
    )
    
}

