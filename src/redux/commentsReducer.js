import { COMMENT_CREATION, COMMENT_UPDATE, COMMENT_DELETE } from './types';
const initialCommmentState = {
    comments: []
}

export const commentsReducer = (state = initialCommmentState, action)=> {
    //console.log('commentsReducer ', action)
    
    switch (action.type) {
        case COMMENT_CREATION:
            return{
                ...state,
                comments : [...state.comments, action.data]
            }
        case COMMENT_UPDATE:
            const {data} = action;
            const {comments} = state;
            const itemIndex = comments.findIndex(res => res.id === data.id);

            const nextComments = [
                ...comments.slice(0, itemIndex),
                data,
                ...comments.slice(itemIndex + 1)
            ]
            return{
                ...state,
                comments : nextComments
            }
        case COMMENT_DELETE:
            return(()=>{
                const {id} = action;
                const {comments} = state;
                const itemIndex = comments.findIndex(res => res.id === id);

                const nextComments = [
                    ...comments.slice(0, itemIndex),
                    ...comments.slice(itemIndex + 1)
                ]
                return{
                    ...state,
                    comments : nextComments
                }
            })();
            
        default:
            return state;
    }
}