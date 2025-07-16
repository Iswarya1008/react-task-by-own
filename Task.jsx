import React, { useState } from "react";

function Task(){
    const [task, setTask] = useState("");
    const[tasklist,settasklist]= useState([]);

    const handleClick = () => {
        if(task.trim() !== "") {
            settasklist([...tasklist, task]);
            setTask(""); 
        
    }


    return(
        <>
        <label>enter task</label>
        <input type="text" value={task} onChange={(e)=>settasklist(e.target.value)}></input>
        <button onClick={handleClick}>add list</button>
        <ul>
            {tasklist.map((item, index) => (
                <li key={index}>{item}</li>
            ))}</ul>
        <button onClick={() => settasklist([])}>Clear Task List</button>
        </>
    )
} 
}

export default Task;