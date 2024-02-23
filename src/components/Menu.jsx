import styled from "styled-components"
import { MENU_ICON_HEIGHT_PIXELS, MENU_ICON_WIDTH_PIXELS } from "../config"

const StyledMenu = styled.article`
    position: absolute;
    width: ${props=>props.$width}px;
    height: ${props=>props.$height}px;

    /* background: rgb(232,232,232); */
    background: var(--modals-background);

    ${props=>props.$type === "top" ? "top: 0%;" : null};
    ${props=>props.$type === "bottom" ? "bottom: 0%;" : null};
    right: ${props=>props.$right};

    ${props=>props.$type === "top" ? "transform: translateY(-100%);" : null};
    ${props=>props.$type === "bottom" ? "transform: translateY(100%);" : null};
    
    transition: all .2s;

    z-index: 9;

    &:hover {
    transform: translateY(0%);
    z-index: 10;
    }
`

const StyledMenuContent = styled.div`
    width: 100%;
    height: 100%;

    text-shadow: var(--modals-text-shadow);
    
    background: transparent;

    overflow: hidden;
`

const StyledMenuIcon = styled.div`
    width: ${MENU_ICON_WIDTH_PIXELS}px;
    height: ${MENU_ICON_HEIGHT_PIXELS}px;
    padding: .3rem;

    background-color: inherit;
    background: inherit;
    
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    
    ${props=>props.$type === "top" ? "clip-path: polygon(0 0, 100% 0, 75% 100%, 25% 100%)" : null};
    ${props=>props.$type === "bottom" ? "clip-path: polygon(25% 0, 75% 0, 100% 100%, 0% 100%)" : null};
    ${props=>props.$type === "bottom" ? `top: -${MENU_ICON_HEIGHT_PIXELS}px` : null};
`

export default function Menu({ children, type="top", right, widthPx, heightPx }){


    if (type === "top") return (
        <StyledMenu $type={type} $right={right} $width={widthPx} $height={heightPx}>
            <StyledMenuContent>
                {children ? children[0] : null}
            </StyledMenuContent>
            <StyledMenuIcon $type={type}>
                {children ? children[1] : null}
            </StyledMenuIcon>
        </StyledMenu>
    )

    if (type === "bottom") return (
        <StyledMenu $type={type} $right={right} $width={widthPx} $height={heightPx}> 
            <StyledMenuIcon $type={type}>
                {children ? children[1] : null}
            </StyledMenuIcon>
            <StyledMenuContent>
                {children ? children[0] : null}
            </StyledMenuContent>
        </StyledMenu>
    )

    
}