import { useRef, useState } from "react"

function Example1() {

    const clickRef = useRef(0)

    const[render,setRender] = useState(false)

    function handleClick(){
        clickRef.current++
        console.log("Click",clickRef.current)
    }

    function handleRender(){
        setRender(!render)
    }

  return (
    <div>
        <p>count {clickRef.current}</p>
        <h2>UseRef Example</h2> 
        <button onClick={handleClick}>Click Me</button>
        <button onClick={handleRender}>Refresh UI</button>
    </div>
  )
}

export default Example1