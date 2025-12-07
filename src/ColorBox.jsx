import { useState } from "react"

function ColorBox(){
    const[color,setColor] = useState("yellow")
    return(
        <>
        <body style={{
            background: color
        }}/>
        <button onClick={()=>setColor("red")}>Red</button>
        <button onClick={()=>setColor("blue")}>Blue</button>
        <button onClick={()=>setColor("green")}>Green</button>
        </>
    )
}
export default ColorBox