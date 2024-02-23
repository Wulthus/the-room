import styled from "styled-components";

const StyledHero = styled.header`
width: 100%;
height: 99%;
padding: 4%;

text-align: center;
font-family: 'Julius Sans One', sans-serif;
position: relative;

display: flex;
justify-content: center;
`

const StyledHgroup = styled.hgroup`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const StyledH1 = styled.h1`
font-size: var(--font-xl);
font-weight: 600;
letter-spacing: 1px;
text-align: end;
`
const StyledSlogan = styled.p`
text-align: end;
font-size: var(--font-m);
`
const StyledLogo = styled.figure`

`
const StyledImage = styled.img`
    position: relative;
    top: 10%;
    width: 120%;
    /* transform: scale(1.1);
    filter: drop-shadow(1rem 1rem .1rem rgba(0, 0, 0, 0.2)); */
    transition: all 5s;

    &:hover {
        transform: scale(1.2);
        filter: drop-shadow(1rem 1rem .1rem rgba(0, 0, 0, 0.2));
    }
`

export default function Hero(){

    return (
        <StyledHero>
            <StyledLogo>
                <StyledImage src="chameleon-logo2.webp" alt="company logo"></StyledImage>
            </StyledLogo>
            <StyledHgroup>
                <StyledH1>
                    Chameleon
                </StyledH1>
                <StyledSlogan>
                    Interior Design Studio
                </StyledSlogan>
            </StyledHgroup>
        </StyledHero>
    )
    
}