import styled from "styled-components"

const StyledGalleryImage = styled.img`
    width: 100%;
    height: auto;

    border: 3px solid #ffffff;

    border-radius: 10px;

    position: relative;

    transition: all .27s;

    cursor: zoom-in;

    transform: scale(2);

    &:hover{
        transform: scale(2.7);

        filter: saturate(150%);

        box-shadow: 0rem 0rem 1.5rem 1.5rem #ffffff;

        z-index: 10;
    }
`


export default function GalleryImage({ src, alt, className, handleClick }){
    return (
        <StyledGalleryImage loading="lazy" title="View full size" src={src} alt={alt} className={className} onClick={handleClick}/>
    )
    
}