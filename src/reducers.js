import {
    ADD_MANTRA
} from "./actions";

const mantra = " "

export function mantra(state=[], action) {
    let newState = [ ...state ];
    switch(action.type) {
        case ADD_MANTRA:
        //    any kind of javascript can go here
            newState.push(action.payload.mantra)
                break;
            default:
                break;
    }
    return newState
}