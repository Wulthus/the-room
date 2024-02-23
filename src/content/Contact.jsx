import styled from "styled-components"
import RotatedBackground from "./components/RotatedBackground"
import { DribbbleIcon, FacebookIcon, InstagramIcon, PinterestIcon, YoutubeIcon } from "./Icons"

const StyledContact = styled.footer`
    width: 100%;
    height: 99%;

    display: flex;
`

const StyledHgroup = styled.hgroup`
    font-size: var(--font-s);
    position: relative;
    z-index: 10;
`

const StyledContent = styled.div`
    flex: 65;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
`

const StyledIcons = styled.div`

    color: #828282;

    padding: 5%;
    height: 100%;
    width: 100%;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3%;

    z-index: 10;
`

const StyledLink = styled.a`
    width: 15%;
    min-width: 40px;
    display: inline-block;
    border-radius: 50%;
    transition: all .3s;
    background-color: #fff;

    &:link {
        color: #828282;
    }

    
    &:visited {
        color: #828282;
    }

    &:hover{
        background-color: #fff;
        color: ${props=>props.$color};
        box-shadow: 0rem 0rem 20rem 2.2rem ${props=>props.$color}, 0rem 0rem .7rem .1rem ${props=>props.$color};
        z-index: 11;
        transform: scale(1.2);
    }
    

`

const StyledFold = styled.div`
    flex: 35;

    font-size: var(--font-s);
    font-weight: 600;

    padding: 1rem;

    background-color: #fff;


    opacity: 0.65;

    clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 100%);

    position: relative;

    z-index: 10;

    display: flex;
    flex-direction: column;
    align-items: center;

    transition: all 1.2s ease-out;

    &:hover {
        flex: 55;
        background-image: var(--modals-background);
        text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.15);
        opacity: 1;
    }
`

const StyledAdressBook = styled.address`
    padding-left: 1rem;
    font-style: normal;
    text-align: right;
`

const StyledAddressLink = styled.a`
    display: inline-block;
    text-decoration: none;
    color: inherit;
    transition: all .3s;
    padding: 4px;
    border-radius: 10px;
    transition: all .2s;

    &:link {
        text-decoration: none;
        color: inherit;
    }
    
    &:visited {
        text-decoration: none;
        color: inherit;
    }
    &:hover {
        color: #fff;
        background-color: #bbb7b7;
    }

`

const StyledLogo = styled.figure`
    width: 100%;
    padding: 1rem;
`

export default function Contact(){
    return (
        <StyledContact>
            <StyledContent>
                <StyledHgroup>
                    <h2>Ready for change?</h2>
                    <p>Let's connect!</p>
                </StyledHgroup>
                <StyledIcons>
                    <StyledLink href="#" $color="#1877f2">
                        <FacebookIcon />
                    </StyledLink>
                    <StyledLink href="#" $color="#c13584">
                        <InstagramIcon />
                    </StyledLink>
                    <StyledLink href="#" $color="#e60023">
                        <PinterestIcon />
                    </StyledLink>
                    <StyledLink href="#" $color="#ea4c89">
                        <DribbbleIcon />
                    </StyledLink>
                    <StyledLink href="#" $color="#ff0000">
                        <YoutubeIcon />
                    </StyledLink>
                </StyledIcons>
            </StyledContent>
            <StyledFold>
                <StyledAdressBook>
                    <p>
                        Town, Country
                    </p>
                    <p>
                        Street, number
                    </p>
                    <br />
                    <StyledAddressLink href="mailto:company@message.com">
                        company@message.com
                    </StyledAddressLink>
                    <br />
                    <StyledAddressLink href="tel:+12 345 678 910">
                        +12 345 678 910
                    </StyledAddressLink>
                    <br />

                </StyledAdressBook>
                <StyledLogo>
                    <img src="chameleon-logo2.webp" alt="Company logo" />
                </StyledLogo>
            </StyledFold>
            <RotatedBackground />
        </StyledContact>
    )
    
}