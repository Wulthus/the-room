import { createContext, useContext, useState } from "react";
import { INITIAL_RUG } from "../content";


const rugContext = createContext(null);

function RugProvider({ children }){
    const [rug, setRug] = useState(INITIAL_RUG);

    return (
        <rugContext.Provider value={{rug, setRug}}>
            {children}
        </rugContext.Provider>
    )
}

function useRug(){
    const context = useContext(rugContext)
    if (context === null) {
        throw new Error("Error: rugContext used outisde of rugContext.Provider.")
    }
    return context;
}

export { useRug, RugProvider}