import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const cameraContex = createContext(null);

function CameraProvider({ children }){
    const [auto, setAuto] = useState(false);
    const [X, setX] = useState(0);
    const [Y, setY] = useState(0);
    
    return (
        <cameraContex.Provider value={{auto, setAuto, X, setX, Y, setY}}>
            {children}
        </cameraContex.Provider>
    )
}

function useCamera(){
    const context = useContext(cameraContex)
    if (context === null) {
        throw new Error("Error: cameraContex used outisde of cameraContex.Provider.")
    }
    return context;
}

export { CameraProvider, useCamera }