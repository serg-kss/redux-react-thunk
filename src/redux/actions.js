import { 
    INCREMENT, 
    DECREMENT, 
    INPUT_TEXT, 
    COMMENT_CREATION, 
    COMMENT_UPDATE, 
    COMMENT_DELETE,
    SWAPI,
    DELETE_SWAPI } from "./types";

export function incrementCounter(){
    return {
        type: INCREMENT
    }
}

export function decrementCounter(){
    return {
        type: DECREMENT
    }
}

export function inputText(text){
    return {
        type: INPUT_TEXT,
        text
    }
}

export function commentCreation(text, id){
    return {
        type: COMMENT_CREATION,
        data: {text, id}
    }
}

export function commentUpdate(text, id){
    return {
        type: COMMENT_UPDATE,
        data: {text, id}
    }
}

export function commentDelete(id){
    return {
        type: COMMENT_DELETE,
        id
    }
}

//-----------------------------------------task

export function swapiLoad(){
    return async dispatch => {
        const response = await fetch('https://swapi.dev/api/people');
        const jsonData = await response.json();
        console.log("jsonData ", jsonData.results)
        dispatch({
            type: SWAPI,
            data: jsonData.results
        })
    }
}

export function swapiClean(){
    return {
        type: DELETE_SWAPI
    }
}