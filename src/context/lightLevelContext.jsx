import { createContext, useContext, useState } from "react";
import { DIMMER_MAX_RANGE } from "../config";

const lightLevelContext = createContext(null);

function LightLevelProvider({ children }){

    const [lightLevel, setLightLevel] = useState(30);

    const brightness = lightLevel/DIMMER_MAX_RANGE;
    const contrast = 2-(lightLevel/DIMMER_MAX_RANGE);

    return (
        <lightLevelContext.Provider value={{lightLevel, setLightLevel, brightness, contrast}}>
            {children}
        </lightLevelContext.Provider>
    )
}

function useLightLevel(){
    const context = useContext(lightLevelContext);
    if (context === null) {
        throw new Error("Error: lightLevelContext used outisde of lightLevelContext.Provider.")
    }
    return context
}

export { useLightLevel, LightLevelProvider }