import { createContext, useContext, useState } from "react";
import { INITIAL_PLANT } from "../content";


const plantContext = createContext(null);

function PlantProvider({ children }){
    const [plant, setPlant] = useState(INITIAL_PLANT);

    return (
        <plantContext.Provider value={{plant, setPlant}}>
            {children}
        </plantContext.Provider>
    )
}

function usePlant(){
    const context = useContext(plantContext)
    if (context === null) {
        throw new Error("Error: plantContext used outisde of plantContext.Provider.")
    }
    return context;
}

export { usePlant, PlantProvider}