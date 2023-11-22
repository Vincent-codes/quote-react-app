import React, { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0)

    const handleAddCount = ()=>{
        setCount(count + 1)
    }
    const handleSubtractCount = ()=>{
        setCount(count - 1)
    }

    return(
        <div className="">
        <div>
        <h1>Counter: {count}</h1>
        </div>
        <div className="flex">
        <button onClick={handleAddCount}><h1>Add {count}</h1></button>
        <button onClick={handleSubtractCount}><h1>Subtract</h1></button>
        <button onClick={()=> setCount(0)}><h1>Reset</h1></button>
        </div>
        </div>
    )
}
