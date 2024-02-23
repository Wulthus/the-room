import styled from "styled-components"
import FakeElement from "./FakeElement"
import { useWallpaper } from "../context/wallpaperContext";
import { useFloor } from "../context/floorContext";
import { useRoundModal } from "../context/roundModalContext";

const StyledWallpaper = styled.div.attrs(props=>({
    style: {
        backgroundImage: `var(--wall-gradient), url(${props.$type === "bottom" ? props.$floor : props.$wallpaper})`,
    },
}))`
    width: 100%;
    height: 100%;
`

export default function Wallpaper({ type }){

    const { wallpaper } = useWallpaper();
    const { floor } = useFloor();
    const { dispatch } = useRoundModal();

    function handleClick(e){
        if (e.target.dataset.type !== "bottom")
            dispatch({type: "wall-open", payload: [e.pageX, e.pageY]})
        if (e.target.dataset.type === "bottom")
            dispatch({type: "floor-open", payload: [e.pageX, e.pageY]})
    }

    return (
        <StyledWallpaper onClick={handleClick} data-type={type} $type={type} title="Change decor" $wallpaper={wallpaper} $floor={floor}>
             {/* type !== "bottom" ? <FakeWall type={type}></FakeWall> : <FakeFloor type={type}></FakeFloor> */}
            <FakeElement element={type === "bottom" ? "floor" : "wall"}/>
        </StyledWallpaper>
    )
    
}