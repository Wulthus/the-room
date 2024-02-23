import styled, { css } from "styled-components"
import { CenterIcon, CheckIcon, DownIcon, LeftIcon, RightIcon, UpIcon } from "../Icons"
import { useCamera } from "../../context/cameraContext"
import { useRef } from "react"
import { PAN_INTERVAL_MILISECONDS, PAN_X_LIMIT_PERCENT, PAN_Y_LIMIT_PERCENT } from "../../config"
import CenteringFlexContainer from "../CenteringFlexContainer"

const StyledCameraOption = styled.div`
    font-size: 1rem;
    text-align: center;

`

const StyledCameraButtons = styled.div`
    margin-top: .3rem;
    padding: .3rem;
    
    width: 60%;
    height: 60%;
    padding: .4rem;

    background-color: rgba(0, 0, 0, 0.03);
    
    border: solid 1px rgba(0, 0, 0, 0.1);

    border-radius: 50%;

    display: grid;
    grid-gap: .3rem;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
`

const StyledCameraControls = styled.div`
    display: flex;
    gap: 1.5rem;
`

const buttonTypes = {
    pitchUp: css`
        grid-column: 2;
        grid-row: 1;
    `,
    pitchDown: css`

        grid-column: 2;
        grid-row: 3;
    `,
    center: css`
        grid-column: 2;
        grid-row: 2;
    `,
    panLeft: css`
        grid-column: 1;
        grid-row: 2;
    `,
    panRight: css`
        grid-column: 3;
        grid-row: 2;
    `,

}

const StyledCameraButton = styled.button`
    width: 30px;
    height: 30px;
    
    padding: .3rem;

    border-radius: 5px;
    border: none;
    background-color: transparent;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all .2s;

    cursor: pointer;

    &:hover {
        background-color: #fff;
        transform: scale(1.01) translateY(-2px);
        box-shadow: 0 0 30px 5px #fcedd6;
        
    }

    &:active {
        transform: scale(0.95) translateY(3px);
        box-shadow: 0 0 12px 1px #fcedd6;
    }

    ${props=>props.$type && buttonTypes[props.$type]}
`

const StyledAutoControls = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
`

const StyledAutoLabel = styled.p`
    height: 30%;
    font-size: 1rem;
    text-align: center;

    display: flex;
    align-items: center;

`

const StyledAutoButton = styled.button`
    width: 20px;
    height: 20px;

    background-color: transparent;
    color: var(--color-hover);

    border-radius: 3px;
        
    border: 3px solid rgba(0, 0, 0, 0.55);

    cursor: pointer;

    transition: all .2s;

    &:hover {

    }

    &:active {
        transform: scale(0.95) translateY(3px);
    }
    `


export default function CameraOption(){

    const { auto, setAuto, setX, setY, X, Y } = useCamera();

    const panInterval = useRef();
    const pitchUp = 'Pitch up';
    const pitchDown = 'Pitch down';
    const panLeft='Pan left';
    const panRight = 'Pan right';

    function pan(e){
        setAuto(false)

        const action = e.target.closest("button").title;

        switch (action) {
            case pitchUp:

                panInterval.current = setInterval(function(){
                    setY(y => y < PAN_Y_LIMIT_PERCENT ? y+1 : y);
                }, PAN_INTERVAL_MILISECONDS)

            break;
            case pitchDown:

                panInterval.current = setInterval(function(){
                    setY(y=>y > -PAN_Y_LIMIT_PERCENT ? y-1 : y);
                }, PAN_INTERVAL_MILISECONDS)

            break;
            case panLeft:

                panInterval.current = setInterval(function(){
                    setX(x => x < PAN_X_LIMIT_PERCENT ? x+1 : x);
                }, PAN_INTERVAL_MILISECONDS)
            
            break;
            case panRight:
                
                panInterval.current = setInterval(function(){
                    setX(x => x > -PAN_X_LIMIT_PERCENT ? x-1 : x);
                }, PAN_INTERVAL_MILISECONDS)
            
            break;
            default:
            throw new Error(`pan function switch statement did not recognise key "${action}"`);
        }
    }

    function cancelPan(){
        clearInterval(panInterval.current);
    }

    function handleAutoClick(){
        setX(0);
        setY(0);
        setAuto(auto=>!auto);
    }

    function centerFocus(){
        setAuto(false);
        setX(0);
        setY(0);
    }

    return (
        <CenteringFlexContainer>
            <StyledCameraOption>
                <h3>Camera</h3>
                <StyledCameraControls>
                    <StyledCameraButtons>
                        <StyledCameraButton 
                            $type="pitchUp" 
                            title={pitchUp}
                            onTouchStart={pan} 
                            onTouchEnd={cancelPan} 
                            onMouseDown={pan} 
                            onMouseUp={cancelPan} 
                            onMouseLeave={cancelPan} 
                            $X={X} 
                            $limitX={PAN_X_LIMIT_PERCENT}
                        >
                            <UpIcon />
                        </StyledCameraButton>
                        <StyledCameraButton 
                            $type="pitchDown" 
                            title={pitchDown} 
                            onMouseDown={pan} 
                            onTouchStart={pan} 
                            onTouchEnd={cancelPan}
                            onMouseUp={cancelPan} 
                            onMouseLeave={cancelPan} 

                        >
                            <DownIcon />
                        </StyledCameraButton>
                        <StyledCameraButton 
                            $type="center" 
                            title="Center" 
                            onTouchStart={pan} 
                            onTouchEnd={cancelPan}
                            onClick={centerFocus} 
                            onMouseLeave={cancelPan}
                        >
                            <CenterIcon />
                        </StyledCameraButton>
                        <StyledCameraButton 
                            $type="panLeft" 
                            title={panLeft} 
                            onMouseDown={pan}
                            onTouchStart={pan} 
                            onTouchEnd={cancelPan} 
                            onMouseUp={cancelPan} 
                            onMouseLeave={cancelPan}
                        >
                            <LeftIcon />
                        </StyledCameraButton>
                        <StyledCameraButton 
                            $type="panRight" 
                            title={panRight} 
                            onTouchStart={pan} 
                            onTouchEnd={cancelPan}
                            onMouseDown={pan} 
                            onMouseUp={cancelPan} 
                            onMouseLeave={cancelPan}
                        >
                            <RightIcon />
                        </StyledCameraButton>
                    </StyledCameraButtons>
                    <StyledAutoControls>
                        <StyledAutoButton title={auto ? "Turn off automatic camera control" : "Turn on automatic camera control"} onClick={handleAutoClick}>
                        {auto && <CheckIcon widthString="300" heightString="300" offsetX={-20}  offsetY={-55}/>}
                        </StyledAutoButton>
                        <StyledAutoLabel >
                            Auto
                        </StyledAutoLabel>
                    </StyledAutoControls>
                </StyledCameraControls>
            </StyledCameraOption>
        </CenteringFlexContainer>
    )
    
}