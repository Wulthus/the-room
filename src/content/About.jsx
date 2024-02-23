import styled from "styled-components"
import RotatedBackground from "./components/RotatedBackground"

const StyledAbout = styled.section`
    width: 100%;
    height: 100%;

    padding: 4%;
    display: flex;

    overflow: hidden;
`

const StyledHgroup = styled.hgroup`
    width: 50%;
    height: 100%;
    
    font-size: var(--font-l);
    opacity: 1;
    text-align: top;
    position: relative;
`

const StyledH2 = styled.h2`
    width: 100%;
    height: 100%;

    position: absolute;
    top: -2rem;
    left: 0rem;

    color: transparent;

    text-align: left;
    text-shadow: 15px 15px 4px #000;

    opacity: 0.25;

    z-index: 5;

    filter: blur(1px);
`

const ParagraphContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;

`

const StyledParagraph = styled.p`
    padding: 1rem;
    font-size: var(--font-s);
    font-weight: 600;
    text-align: start;
    color: #000;

    align-self: flex-end;
    z-index: 5;
    border-bottom: solid 4px #fff;
    transition: all 1s;
`

export default function About(){
    return (
        <StyledAbout>
             <StyledHgroup>
                <StyledH2>Reimagine your space</StyledH2>
             </StyledHgroup>
             <ParagraphContainer>
                <StyledParagraph>Here at <i>Cameleon</i>, we will get to know you deeply and craft home tailored to your lifestyle and personalitiy.</StyledParagraph>
            </ParagraphContainer>
            <RotatedBackground />
        </StyledAbout>
    )
    
}