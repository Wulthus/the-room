import styled from "styled-components"

const StyledFlexContainer = styled.div`

    padding: ${props=>props.$padding};

    width: 100%;
    height: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
`

export default function CenteringFlexContainer({ padding = "0rem", children }){
    return (
        <StyledFlexContainer $padding={padding}>
             {children}
        </StyledFlexContainer>
    )
    
}