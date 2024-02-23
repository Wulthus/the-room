import { NUM_SLIDES } from "./content";

export const checkFirst = function(slide){
    let first
    slide === 0 ?  first = true : first = false;
    return first
}

export const checkLast = function(slide){
    let last
    slide === NUM_SLIDES - 1 ?  last = true : last = false;
    return last
}