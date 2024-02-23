import styled from "styled-components"

const StyledFooter = styled.div`
    font-size: .8rem;
    font-weight: 600;
    text-align: center;

    width: 100%;
    height: 100%;

    padding: 1rem;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
`

const StyledLink = styled.a`
    text-decoration: none;
    color: inherit;

    transition: all .2s;

    &:link {
        text-decoration: none;
        color: inherit;
    }

    &:visited {
        text-decoration: none;
        color: inherit;
    }

    &:hover{
        color: var(--color-hover);
    }

    &:active{
        color: var(--color-hover);
        transform: scale(0.9) translateY(3px)
    }
`

export default function SignatureOption(){
    return (
        <StyledFooter>
            <h3>Baked and cooked by <i>Michal Zywicki</i></h3>
             <StyledLink href="https://github.com/Wulthus">https://github.com/Wulthus</StyledLink>
             
        </StyledFooter>
    )
    
}