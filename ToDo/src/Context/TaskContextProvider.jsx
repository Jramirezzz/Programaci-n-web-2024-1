import { useReducer, useEffect, useState } from "react";
import { taskContext } from "./taskContex";
import { TASK_ACTIONS } from "../Const/TaskAction";
import { reducerTask } from "../Reducers/TasksReducers";

const initTasks = JSON.parse(window.localStorage.getItem("tasks")) ?? [] 

export function TaskContextProvider ({children}) {

  const [tasks, dispatchTasks] = useReducer(reducerTask,initTasks);
  const [filter, setFilter] = useState('All');
  
  useEffect(() => {
     window.localStorage.setItem("tasks", JSON.stringify(tasks));
  },[tasks]);

  const AddTask = (taskName) => { 

    dispatchTasks({
      type: TASK_ACTIONS.CREATE_TASK,
      payload: taskName
    })
  }

  const deleteTask = (taskId) => {
    dispatchTasks({
      type: TASK_ACTIONS.DELETE_TASK,
      payload: taskId });
  };

  const deleteAllTask = () => {
    dispatchTasks({type: TASK_ACTIONS.DELETE_ALL_TASK})
  }

  const handleToggleTask = (taskId) => { 
    dispatchTasks({
    type:  TASK_ACTIONS.HANDLE_TOGGLE_TASK,
    payload: taskId
    })
  };

  const allTaskCount = () => {
    return tasks.filter(task => task).length;
  };

  const completedTaskCount = () => {
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
        allTaskCount,
        completedTaskCount,
        filteredTasks

    }}> 
    {children}
    </taskContext.Provider>
  )

}