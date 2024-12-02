import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { swapiLoad, swapiClean } from "../../redux/actions";

function Swapi() {

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(swapiLoad());
    },[])
    
    const swapiData = useSelector(state => {
        const {swapiReducer} = state
        return swapiReducer.data
    })    

    console.log("swapiData", swapiData)

   

    function cleanSwapi() {
        dispatch(swapiClean())
    }

    return (
        <div>
            {swapiData.map((el, index)=>{
                return <p key={index}>{el.name}</p>
            })}
            <button onClick={cleanSwapi}>Delete Swapi</button>
        </div>
    )
}

export default Swapi