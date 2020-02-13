import {
    ADD_MANTRA
} from "./actions";

const mantra = " "

export function mantra(state=[], action) {
    let newState = [ ...state ];
    switch(action.type) {
        case ADD_MANTRA:
            newState = state
            break;
            default:
                state
                break;
    }
    return newState
}