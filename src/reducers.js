import {
    ADD_MANTRA
} from "./actions";


export function mantras(state=['a', 'b', 'c'], action) {
    const newState = [ ...state ];
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