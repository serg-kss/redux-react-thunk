import SingleComment from "./SingleComments";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqid from 'uniqid';
import { commentCreation } from "../../redux/actions";



function Comments(props) {

    const [textComment, setTextComment]= useState('');
    const dispatch = useDispatch()
    const comments = useSelector(state => {
        const {commentsReducer} = state
        return commentsReducer.comments
    })

    const handleInput = (e) => {
        //console.log("input ", e.target.value);
        setTextComment(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //console.log('submit ', textComment)
        const id = uniqid()
        dispatch(commentCreation(textComment, id))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={textComment} onChange={handleInput}/>
                <input type="submit" hidden />
            </form>
            {!!comments.length && comments.map(el => {
                return <SingleComment key ={el.id} data={el}/>
            })}
            
        </div>
    )
}

export default Comments