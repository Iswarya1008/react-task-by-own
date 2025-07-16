import { useState } from 'react'

function Count() {
  const [count, setCount] = useState(0);
   return (
    <>
    <h1>Count: {count}</h1>
    <button onClick={()=>setCount(count+1)}>increase</button>
    <button  onClick={() =>setCount(count-1) } >decrease </button>
    <button onClick={()=> setCount(0)}>reset</button>
    <button onClick={()=>setCount(count*2)}> double</button>
    <p>{count % 2==0 ?"even" :"odd"}</p>
    <p>{count < 0 ? "on negative": "positive"}</p>
    <p>{count > 10 ? "greater than 10" : "keep going"}</p>
    <button onClick={()=> setCount(Math.floor(count/2))}>halve</button>
    <hr></hr>
    </>
  )
}

export default Count;