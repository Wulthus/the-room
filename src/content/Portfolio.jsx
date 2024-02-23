import styled, { css } from "styled-components"
import GalleryImage from "./components/GalleryImage"
import FullSizePicture from "./components/FullSizePicture"

import { useState } from "react"


const StyledPortfolio = styled.section`
width: 100%;
height: 100%;
padding: 4%;

text-align: center;
background-image: url("bryozoa.svg");
background-repeat: no-repeat;
background-position: right;
`

const blur = css`
    opacity: 0;
`

const StyledHgroup = styled.hgroup`
    width: 100%;
    height: 30%;
    ${props=>props.$blur ? blur : null};
`

const StyledH2 = styled.h2`
    text-align: left;
    font-size: var(--font-l);
`

const StyledSlogan = styled.p`
    text-align: left;
    font-size: var(--font-s);
`

const StyledGallery = styled.div`
    width: 100%;
    height: 70%;

    display: flex;
    ${props=>props.$blur ? blur : null}
`

const StyledGalleryFigure = styled.figure`
    width: 33%;
`

const Image1 = styled(GalleryImage)`
    left: 70%;
    top: 31%;
    z-index: 3;
`

const Image2 = styled(GalleryImage)`
    left: 52%;
    top: 42%;
    z-index: 4;
`

const Image3 = styled(GalleryImage)`
    left: 37%;
    top: 49%;
    z-index: 5;
`

const Image4 = styled(GalleryImage)`
    left: 42%;
    top: 36%;
    z-index: 6;
`
const Image5 = styled(GalleryImage)`
    left: 10%;
    top: 11%;
    z-index: 7;
`

const Image6 = styled(GalleryImage)`
    left: -73%;
    top: -19%;
    z-index: 8;
`

export default function Portfolio(){

    const [bigPicture, setBigPicture] = useState({
        src: "",
        alt: "",
        show: false,
    });

    const bedroomAlt = "Bedroom designed by the studio";
    const kitchenAlt= "Kitchen designed by the studio";
    const livingroomAlt= "Living Room designed by the studio";

    function handleImageClick(e){
        const src = e.target.attributes.src.nodeValue;
        const alt = e.target.attributes.alt.nodeValue;

        setBigPicture({
            src: src,
            alt: alt,
            show: true,
        });
    }

    function handleReturn(){
        setBigPicture((state)=>({
            ...state, 
            show: false,
        }));
    }


    return (
        <StyledPortfolio>
            {/* <Overlay state={bigPicture}/> */}
            <FullSizePicture state={bigPicture} handleClick={handleReturn}/>
            <StyledHgroup $blur={bigPicture.show}>
                <StyledH2>Portfolio</StyledH2>
                <StyledSlogan>
                    Dreams we made reality
                </StyledSlogan>
             </StyledHgroup>
            <StyledGallery $blur={bigPicture.show}>
                <StyledGalleryFigure>
                    <Image1 src="room-1.webp" alt={bedroomAlt} handleClick={handleImageClick}/>
                </StyledGalleryFigure>
                <StyledGalleryFigure>
                    <Image2 src="room-2.webp" alt={livingroomAlt} handleClick={handleImageClick}/>
                </StyledGalleryFigure>
                <StyledGalleryFigure>
                    <Image3 src="room-3.webp" alt={kitchenAlt} handleClick={handleImageClick}/>
                </StyledGalleryFigure>
                <StyledGalleryFigure>
                    <Image4 src="room-4.webp" alt={kitchenAlt} handleClick={handleImageClick}/>
                </StyledGalleryFigure>
                <StyledGalleryFigure>
                    <Image5 src="room-5.webp" alt={kitchenAlt} handleClick={handleImageClick}/>
                </StyledGalleryFigure>
                <StyledGalleryFigure>
                    <Image6 src="room-6.webp" alt={kitchenAlt} handleClick={handleImageClick}/>
                </StyledGalleryFigure>
            </StyledGallery>

        </StyledPortfolio>
    )
    
}