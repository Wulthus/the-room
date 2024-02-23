import styled from "styled-components"
import { useLightLevel } from "../context/lightLevelContext";

import Wallpaper from "./Wallpaper";

const types = {
    top:`
    width: 100%;
    height: 200vh;
    height: 200dvh;
    background-color: red;

    left: 0%;

    transform-origin: top;
    transform:  rotateX(89deg); 
    z-index: 1`,
    
    bottom:`
    width: 100%;
    height: 200vh;
    height: 200dvh;
    background-color: yellow;

    top: 100%;

    transform-origin: top;
    transform: rotateX(90deg) rotateY(0deg);
    z-index: 3;`,

    left:`
    width: 100vw;
    width: 100dvw;
    height: 101%;
    background-color: green;

    left: 0;

    transform-origin: left;
    transform: rotateY(-90deg);
    
    z-index: 2;`
    ,
    
    right:`
    width: 100vw;
    width: 100dvw;
    height: 101%;
    background-color: rebeccapurple;

    right: 0%;

    transform-origin: right;
    transform: rotateY(90deg); 
    `,

    center:`
    width: 100%;
    height: 100%;
    background-color: blue;
    transform: rotateY(0deg);
    z-index: 3;
    `

}

const StyledWall = styled.aside.attrs(props=>({
    style: {
        filter: `${`brightness(${props.$brightness})`} ${`contrast(${props.$contrast})`}`,
    },
}))`
  position: absolute;
  transform-style: preserve-3d;

  cursor: pointer;

  ${props => props.$type === 'top' ? types.top : null};
  ${props => props.$type === 'bottom' ? types.bottom : null};
  ${props => props.$type === 'left' ? types.left : null};
  ${props => props.$type === 'right' ? types.right : null};
  ${props => props.$type === 'center' ? types.center : null};
`


export default function Wall({ type, children }){

    const { brightness, contrast } = useLightLevel();

    return (
        <StyledWall 
            $type={type} 
            $brightness={brightness} 
            $contrast={contrast} 
            data-object="wall"
        >
            {children}
            <Wallpaper type={type} data-object={type} />
        </StyledWall>
    )
    
}