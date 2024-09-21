import { useSelector } from "react-redux";

const Counter=()=>{
    const count=useSelector((state)=>state.Counter.value);
    return(
        <div>
            <button>
                Increment
            </button>
            <br /><br />
            <div>{count}</div>
            <br /><br />
            <button>
                Decrement
            </button>
        </div>
    )
}
export default Counter;