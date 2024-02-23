import DecorImage from "./DecorImage";

import { useWallpaper } from "../../context/wallpaperContext";
import { useFloor } from "../../context/floorContext";
import { usePainting } from "../../context/paintingContext";
import { usePlant } from "../../context/plantContext";
import { useRug } from "../../context/rugContext";
import { PLANT_MODAL_PADDING } from "../../config";

function WallOption({ image, tooltip }){
    const { setFakeWallpaper, fakeWallpaper } = useWallpaper();
    
    return (
        <DecorImage  passedState={fakeWallpaper} passedSetter={setFakeWallpaper} image={image} tooltip={tooltip}/>
    )
}

function FloorOption({ image, tooltip }){
    const { setFakeFloor, fakeFloor } = useFloor();

    return (
        <DecorImage passedState={fakeFloor} passedSetter={setFakeFloor} image={image} tooltip={tooltip}/>
    )
}

function PaintingOption({ image, tooltip }){
    const { painting, setPainting } = usePainting();

    return (
        <DecorImage passedState={painting} passedSetter={setPainting} image={image} tooltip={tooltip}/>
    )
}

function PlantOption({ image, tooltip }){
    const { plant, setPlant } = usePlant();

    return (
        <DecorImage passedState={plant} passedSetter={setPlant} image={image} tooltip={tooltip} padding={PLANT_MODAL_PADDING}/>
    )
}

function RugOption({ image, tooltip }){
    const { rug, setRug } = useRug();

    return (
        <DecorImage passedState={rug} passedSetter={setRug} image={image} tooltip={tooltip}/>
    )
}

export default function DecorOption({ image, tooltip, changedElement }){
    switch (changedElement) {
        
        case "wallpaper":
            return <WallOption image={image} tooltip={tooltip}/>; 
       
        case "floor":
            return <FloorOption image={image} tooltip={tooltip}/>;
        
        case "painting":
            return <PaintingOption image={image} tooltip={tooltip}/>;
        
        case "plant":
            return <PlantOption image={image} tooltip={tooltip}/>;
        
        case "rug":
            return <RugOption image={image} tooltip={tooltip}/>;              
        
        default:
            throw new Error(`DecorOption swich statement did not recognise following element: "${changedElement}"`)
    }
}