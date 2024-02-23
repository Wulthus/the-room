import styled from "styled-components"

const StyledSlide = styled.div`
    min-width: 100%;
    height: 99%;

    position: relative;
    top: 0%;
    left: ${props=>props.$percentageLeft}%;
    opacity: 0.8;
    overflow: hidden;

    transition: ease-out all 2s;
`



export default function Slide({ children, slide }){

    const percentageLeft = (200 - (slide*100)).toString();

    return (
        <StyledSlide data-object="slide" $percentageLeft={percentageLeft}>
            {children}
        </StyledSlide>

    )
    
}