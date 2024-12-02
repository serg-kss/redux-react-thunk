import styles from './Counter.module.css'
import {connect} from 'react-redux'
import { incrementCounter, decrementCounter } from '../../redux/actions'

function Counter(props) {

    return (
        <div>
            <p>counter: {props.counter}</p>
            <button onClick={props.onIncrementCounter}>Increment</button>
            <button onClick={props.onDecrementCounter}>Decrement</button>
        </div>
    )
}

function mapStateToProps(state) {
    //console.log('mapStateToProps', state)
    const {counterReducer} = state
    return{
        counter: counterReducer.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrementCounter: ()=>{
            //console.log('click')
            return dispatch(incrementCounter())
        },
        onDecrementCounter: ()=>{
            //console.log('click')
            return dispatch(decrementCounter())//диспатчим акшены с типом
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)