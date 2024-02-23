import styled, { css } from "styled-components";

const hover = css`
    filter: brightness(1);
    transform: scale(1.1);
`

const active = css`
    transform: scale(0.90) translateY(3px);
    filter: brightness(1.03);
`


export const StyledOption = styled.img`
    width: 100%;
    height: 100%;
    background-color: #fff;
    
    padding: ${props=>props.$padding};

    border-radius: 50%;

    transition: all .2s;

    cursor: pointer;
    filter: brightness(0.9);

    ${props=>props.$selected ? "filter: brightness(1.1)" : null};
    ${props=>props.$selected ? "box-shadow: 0rem 0rem 5px 7px #FFF;" : null};
    ${props=>props.$selected ? "cursor: default" : "cursor: pointer"};

    &:hover {
        ${props=>props.$selected ? null : hover}
    }

    &:active {
        ${props=>props.$selected ? null : active}
    }

`

export default function DecorImage({ image, passedState, passedSetter, tooltip, padding="0rem" }) {

    const alredySelected = (passedState === image);

    function handleClick() {
        passedSetter(image);
    }

    return (
        <StyledOption $selected={alredySelected} $padding={padding} src={image} title={tooltip} onClick={handleClick} />
    );
}
