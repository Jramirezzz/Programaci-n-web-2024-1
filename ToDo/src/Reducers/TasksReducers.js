import { TASK_ACTIONS } from "../Const/TaskAction";

export const reducerTask = (tasks, action) => {
    if (action.type === TASK_ACTIONS.CREATE_TASK) {

        const newTask = {
            id: crypto.randomUUID(),
            name: action.payload.taskName,
            date: action.payload.taskDate,
            completed: false
          }
          
          return [...tasks, newTask]
          
    } 
    else if (action.type === TASK_ACTIONS.HANDLE_TOGGLE_TASK) {

      return tasks.map(task =>
        task.id === action.payload ? { ...task, done: !task.done } : task
      );

    } else if (action.type === TASK_ACTIONS.DELETE_TASK) {

      return tasks.filter(task => task.id !== action.payload);

    } else if (action.type === TASK_ACTIONS.DELETE_ALL_TASK) {

      return tasks.filter(task => !task.done);

    } else {
      return tasks;
    }
  };