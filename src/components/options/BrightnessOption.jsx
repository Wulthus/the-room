import styled from "styled-components";
import { useLightLevel } from "../../context/lightLevelContext";
import { MoonIcon, SunIcon } from "../Icons";
import { DIMMER_MAX_RANGE, DIMMER_MIN_RANGE } from "../../config.jsx";
import CenteringFlexContainer from "../CenteringFlexContainer.jsx";


const StyledOption = styled.div`
    font-size: 1rem;
    text-align: center;
    text-shadow: inherit;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .5rem;

`

const StyledDimmer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
`

const StyledLabel = styled.label`
    font-size: 1.2rem;
    font-weight: 600;
`

export default function BrightnessOption(){

    const { lightLevel, setLightLevel } = useLightLevel()

    function handleChange(e){
        setLightLevel(e.target.value)
    }

    return (
        <CenteringFlexContainer>
            <StyledOption>
                <StyledLabel>Dimmer</StyledLabel>
                <StyledDimmer>
                    <MoonIcon widthString="10" heightString="10" />
                        <input type="range" id="light" name="light" min={DIMMER_MIN_RANGE} max={DIMMER_MAX_RANGE} value={lightLevel} onChange={handleChange} />
                    <SunIcon widthString="10" heightString="10" ></SunIcon>
                </StyledDimmer>
            </StyledOption>
        </CenteringFlexContainer>
    )
    
}