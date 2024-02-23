import styled from "styled-components"

const StyledAbout = styled.section`
    width: 100%;
    height: 100%;

    padding: 4%;
    display: flex;

    overflow: hidden;
    background-image: url("bryozoa.svg");
    background-repeat: no-repeat;
    background-position: right;
`

const StyledHgroup = styled.hgroup`
    width: 50%;
    height: 100%;
    
    font-size: var(--font-l);
    opacity: 1;
    position: relative;
`

const StyledH2 = styled.h2`
    width: 100%;
    height: 100%;

    position: absolute;
    top: -2rem;
    left: -2rem;

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
    /* background-color: rgba(255, 255, 255, 0.705); */
    border-bottom: solid 4px #fff;
`


export default function About(){
    return (
        <StyledAbout>
            <ParagraphContainer>
                <StyledParagraph>We are a multidisciplinary interior design company based in Fictionalcity, Fictionalplace.</StyledParagraph>
            </ParagraphContainer>
             <StyledHgroup>
                <StyledH2>What is Cameleon?</StyledH2>
             </StyledHgroup>
        </StyledAbout>
    )
    
}