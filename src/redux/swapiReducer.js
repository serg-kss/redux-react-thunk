import { SWAPI, DELETE_SWAPI } from './types';
const initialState = {
    data: []
}

export const swapiReducer = (state = initialState, action)=> {
    console.log('swapiReducer ', action)
    switch (action.type) {
        case SWAPI:
            return{
                ...state,
                data : action.data
            }
        case DELETE_SWAPI:
            return{
                ...state,
                data : initialState.data
            }
        default:
            return state;
    }
}