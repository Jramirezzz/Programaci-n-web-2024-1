import { useState, useEffect } from "react";

import { taskContext } from "./taskContex";

const initTasks = JSON.parse(window.localStorage.getItem("tasks")) ?? [] 

export function TaskContextProvider ({children}) {

  const [tasks, setTasks] = useState(initTasks);
  const [filter, setFilter] = useState('All');
  
  useEffect(() => {
     window.localStorage.setItem("tasks", JSON.stringify(tasks));
  },[tasks]);

  function AddTask (taskName) {
    console.log(taskName); 
    const newTask = {
    id: crypto.randomUUID(),
    name: taskName,
    done: false
  }
  setTasks(prevArray => [...prevArray, newTask])
  }

  const deleteTask = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.filter(task => task.id !== taskId)
    );
  };

  const deleteAllTask = () => {
    setTasks(prevTasks => 
      prevTasks.filter(task => !task.done))
  }

  const handleToggleTask = (taskId) => { 
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

  const getCompletedCount = () => {
    return tasks.filter(task => task).length;
  };

  const countUncompletedTask = () => {
    return tasks.filter(task  => task.done).length;
  }  

  const filteredTasks = tasks.filter(task => {
    if (filter === 'Completed') return task.done;
    if (filter === 'Pending') return !task.done;
    return task;
  });

  return(
    <taskContext.Provider value = {{
        tasks,
        AddTask,
        deleteTask,
        deleteAllTask,
        handleToggleTask,
        filter,
        setFilter,
        getCompletedCount,
        countUncompletedTask,
        filteredTasks

    }}> 
    {children}
    </taskContext.Provider>
  )

}