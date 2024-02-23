import { useWallpaper } from "../context/wallpaperContext";
import { useFloor } from "../context/floorContext";
import Cover from "./Cover";


function FakeWall(){
    
    const { fakeWallpaper, setWallpaper } = useWallpaper();

    return (
        <>
            <Cover passedState={fakeWallpaper} passedSetter={setWallpaper} />
        </>
    )
}

function FakeFloor(){
    
    const { fakeFloor, setFloor } = useFloor();

    return (
        <>
            <Cover passedState={fakeFloor} passedSetter={setFloor} />
        </>
    )
}


export default function FakeElement({ element }){
    switch (element) {
        case "floor":
          return  <FakeFloor />
        case "wall":
          return <FakeWall />
        default:
            throw new Error(`FakeElement swich statement did not recognise following element: "${element}"`)
    }
}
