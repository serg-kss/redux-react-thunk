import { INCREMENT, DECREMENT } from './types';
const initialCounter = {
    counter: 0
}

export const counterReducer = (state = initialCounter, action)=> {
    //console.log('counterReducer ', action)
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                counter : state.counter +1
            }
        case DECREMENT:
            return{
                ...state,
                counter : state.counter -1
            }
        default:
            return state;
    }
}