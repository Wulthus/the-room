import { createContext, useContext, useState } from "react";
import { INITIAL_WALL } from "../content";


const wallpaperContext = createContext(null);

function WallpaperProvider({ children }){
    const [wallpaper, setWallpaper] = useState(INITIAL_WALL);
    const [fakeWallpaper, setFakeWallpaper] = useState(INITIAL_WALL);

    return (
        <wallpaperContext.Provider value={{wallpaper, setWallpaper,fakeWallpaper, setFakeWallpaper}}>
            {children}
        </wallpaperContext.Provider>
    )
}

function useWallpaper(){
    const context = useContext(wallpaperContext)
    if (context === null) {
        throw new Error("Error: wallpaperContext used outisde of wallpaperContext.Provider.")
    }
    return context;
}

export { useWallpaper, WallpaperProvider}