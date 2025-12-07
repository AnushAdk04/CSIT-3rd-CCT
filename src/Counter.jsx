import { useState } from "react"

function Counter(){
    const[count,setCount] = useState(0)

    function increment(){
        setCount(count+1)
    }

    function decrement(){
        setCount(count-1)
        if(count<=0){
            setCount(0)
        }
    }

    function reset(){
        setCount(0)
    }
return(
    <>
    <h1>UseState Hook Example</h1>
    <p>You clicked {count} times.</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
    </>
)
}

export default Counter