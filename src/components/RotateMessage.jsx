import styled, { keyframes } from "styled-components"
import { RotateIcon } from "./Icons"


const StyledRotateMessage = styled.article`
    width: 100vw;
    width: 100dvw;
    height: 100vh;
    height: 100dvh;
    position: absolute;
    left: 0%;
    right: 0%;

    background-color: rgba(40, 40, 40, 0.5);

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 10;

  @media (orientation: landscape) {
    display: none;
    user-select: none;
  }
`

const StyledMessage = styled.div`
    width: 80%;
    padding: 1rem;
    border-radius: 10px;
    background-image: url("bryozoa.svg"), linear-gradient(133deg, #f3f3f3 0%, rgba(253, 253, 253, 0.7) 70%, rgba(232, 232, 232, 0.5) 100%);

    background-position: right;
    background-repeat: no-repeat;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StyledHgroup = styled.hgroup`
    text-shadow: var(--modals-text-shadow);
    z-index: 10;
`

const StyledH2 = styled.h2`
    font-size: 1.8rem;
`

const StyledP = styled.p`
    font-size: 1.0rem;
    font-weight: 600;
`

const jumpAndRotate = keyframes`
    0%{
        transform: translateY(0%) rotate(-90deg);
    }

    10%{
        transform: translateY(-17%) rotate(-90deg);
    }

    20%{
        transform: translateY(0%);
        transform: rotate(-450deg);
    }

    57%{
        transform: rotate(-90deg);
    }

    100%{
    }
`

const StyledIcon = styled.figure`
    width: 50%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    transform: rotate(-90deg);
    filter: drop-shadow( 0rem 0rem 1.5rem rgb(255, 255, 255));

    animation: 2.5s infinite ${jumpAndRotate};
`


export default function RotateMessage(){
    return (
        <StyledRotateMessage data-type="RotateMessage">
             <StyledMessage>
                <StyledHgroup>
                    <StyledH2>Welcome!</StyledH2>
                    <StyledP>Please rotate your device</StyledP>
                </StyledHgroup>
                <StyledIcon>
                    <RotateIcon />
                </StyledIcon>
             </StyledMessage>
        </StyledRotateMessage>
    )
    
}