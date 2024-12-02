import styles from './Title.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { inputText } from '../../redux/actions'

function Title(props) {
    //console.log('title ', props)
    const text = useSelector(state => {
        //console.log('state ', state)
        const {inputReducer} = state
        return inputReducer.text
    })
    const dispatch = useDispatch()

    function handleChange(e) {
        //console.log(e.target.value)
        dispatch(inputText(e.target.value))
    }

    return(
        <div>
            <input type="text" onChange={handleChange}/>
            <p>{text}</p>
        </div>
    )
}

export default Title