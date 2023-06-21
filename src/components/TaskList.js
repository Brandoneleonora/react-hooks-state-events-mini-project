import React, { useState } from "react";
import Task from "./Task"

function TaskList({ tasks, setTasks }) {

    function handleOnClickDelete(name){
      setTasks(tasks.filter(l => l.text !== name))
    }
    
  return (
    <div className="tasks">
      <ul>{tasks.map((task, index)=> <Task key={index} text={task.text} category={task.category} handleOnClickDelete={() => handleOnClickDelete(task.text)}/>)
}</ul>
    </div>
  );
}

export default TaskList;
