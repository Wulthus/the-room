import { createContext, useContext, useReducer } from "react";
import { FLOOR_CONTENT_OFFFSET_PX, FLOOR_CONTENT_SIZE_PX, FLOOR_MODAL_SIZE_PX, PAINTING_CONTENT_OFFFSET_PX, PAINTING_CONTENT_SIZE_PX, PAINTING_MODAL_SIZE_PX, PLANT_CONTENT_OFFFSET_PX, PLANT_CONTENT_SIZE_PX, PLANT_MODAL_SIZE_PX, RUG_CONTENT_OFFFSET_PX, RUG_CONTENT_SIZE_PX, RUG_MODAL_SIZE_PX, WALL_CONTENT_OFFFSET_PX, WALL_CONTENT_SIZE_PX, WALL_MODAL_SIZE_PX } from "../config";
import { FLOOR_OPTIONS, PAINTING_OPTIONS, PLANT_OPTIONS, RUG_OPTIONS, WALL_OPTIONS } from "../content";

const roundModalContext = createContext(null);

function RoundModalContextProvider({ children }){

    function roundModalReducer(state, action){
        switch(action.type){
            
            case "wall-open":
            return {
                modalSizePixels: WALL_MODAL_SIZE_PX,
                contentSizePixels: WALL_CONTENT_SIZE_PX,
                contentOffsetPixels: WALL_CONTENT_OFFFSET_PX,
                open: true,
                content: WALL_OPTIONS,
                position: action.payload,
                };

            case "floor-open":
            return {
                modalSizePixels: FLOOR_MODAL_SIZE_PX,
                contentSizePixels: FLOOR_CONTENT_SIZE_PX,
                contentOffsetPixels: FLOOR_CONTENT_OFFFSET_PX,
                open: true,
                content: FLOOR_OPTIONS,
                position: action.payload,
                };

            case "painting-open":
            return {
                modalSizePixels: PAINTING_MODAL_SIZE_PX,
                contentSizePixels: PAINTING_CONTENT_SIZE_PX,
                contentOffsetPixels: PAINTING_CONTENT_OFFFSET_PX,
                open: true,
                content: PAINTING_OPTIONS,
                position: action.payload,
                };

            case "plant-open":
                return {
                modalSizePixels: PLANT_MODAL_SIZE_PX,
                contentSizePixels: PLANT_CONTENT_SIZE_PX,
                contentOffsetPixels: PLANT_CONTENT_OFFFSET_PX,
                open: true,
                content: PLANT_OPTIONS,
                position: action.payload,
                };

            case "rug-open":
                return {
                modalSizePixels: RUG_MODAL_SIZE_PX,
                contentSizePixels: RUG_CONTENT_SIZE_PX,
                contentOffsetPixels: RUG_CONTENT_OFFFSET_PX,
                open: true,
                content: RUG_OPTIONS,
                position: action.payload,
                    };

            case "close":
                return initialRoundModalState

            default:
                throw new Error(`roundModalReducer did not recognise following dispatched action: "${action.type}"`)
        }
    }

    const initialRoundModalState = {
        modalSizePixels: 0,
        contentSizePixels: 0,
        contentOffsetPixels: 0,
        open: false,
        content: [],
        position: [null, null],
    };

    const [state, dispatch] = useReducer(roundModalReducer, initialRoundModalState)


    return (
        <roundModalContext.Provider value={{state, dispatch}}>
            {children}
        </roundModalContext.Provider>
    )
}

function useRoundModal(){
    const context = useContext(roundModalContext)
    if (context === null) {
        throw new Error("Error: roundModalContext used outisde of roundModalContext.Provider.")
    }
    return context;
}

export { RoundModalContextProvider, useRoundModal }

