import { createContext, useContext, useState } from "react";
import { INITIAL_PAINTING } from "../content";


const paintingContext = createContext(null);

function PaintingProvider({ children }){
    const [painting, setPainting] = useState(INITIAL_PAINTING);

    return (
        <paintingContext.Provider value={{painting, setPainting}}>
            {children}
        </paintingContext.Provider>
    )
}

function usePainting(){
    const context = useContext(paintingContext)
    if (context === null) {
        throw new Error("Error: PaintingContext used outisde of paintingContext.Provider.")
    }
    return context;
}

export { usePainting, PaintingProvider}