import { useState } from "react";   

function History() {

    const[count, setCount] = useState(0);
    const[hist,sethist] = useState([0]);
    const [totalClicks, setTotalClicks] = useState(0);
   
     const handleClick = () => {
    setTotalClicks(totalClicks + 1);
  }
  const updateCount = (newCount) => {
    setCount(newCount); 
    sethist([...hist, newCount]); 
  };
    return(
        <>
        <h4 style={{color: count < 0 ? "red" : count === 0 ? "black" :"green"}} >couse={count}</h4>
       
        
        <button onClick={()=>updateCount(count+1)}>to inc</button>
        <button onClick={()=>updateCount(count-1)}>to dec</button>
        <button onClick={()=>updateCount(0)}>to rest</button>

         <h3>History:</h3>
      <p>{hist.slice(-5).join(" → ")}</p>
           <button onClick={() => sethist([])}>Clear History</button>
           <p>total click:{handleClick}</p>
<hr/>
  </>
    );
}

export default History;



