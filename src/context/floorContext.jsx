import { createContext, useContext, useState } from "react";
import { INITIAL_FLOOR } from "../content";


const floorContext = createContext(null);

function FloorProvider({ children }){
    const [floor, setFloor] = useState(INITIAL_FLOOR);
    const [fakeFloor, setFakeFloor] = useState(INITIAL_FLOOR)

    return (
        <floorContext.Provider value={{floor, setFloor, fakeFloor, setFakeFloor}}>
            {children}
        </floorContext.Provider>
    )
}

function useFloor(){
    const context = useContext(floorContext)
    if (context === null) {
        throw new Error("Error: FloorContext used outisde of FloorContext.Provider.")
    }
    return context;
}

export { useFloor, FloorProvider}