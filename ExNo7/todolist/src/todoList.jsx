import React,{useState} from "react";

let TodoList=()=>{
    const[task,settask]=useState(null);
    const[tasks,settasks]=useState([]);
    const handleinputchange=(e)=>{
        settask(e.target.value);
    }
    const addtask=()=>{
        if(task.trim()){
            settasks([...tasks,task]);
            settask("");
        }
    }
    const removetask=(tasktoRemove)=>{
        settasks(tasks.filter((task)=>task!==tasktoRemove));
    }
    return (
    <>
    <input onChange={handleinputchange}></input>
    <button onClick={addtask}>Add Task</button>
    {tasks.map((task_el,index)=>(
        <div id={index}>
            {task_el}
            <button onClick={()=>{removetask(task_el)}}>Completed</button>
        </div>
    ))}
    </>
    )
}
export default TodoList;