import { TASK_ACTIONS } from "../Const/TaskAction";

export const reducerTask = (tasks, action) => {
    if (action.type === TASK_ACTIONS.CREATE_TASK) {
        const newTask = {
            id: crypto.randomUUID(),
            name: action.payload,
            completed: false
          }
          
          return [...tasks, newTask]
    } 
    else if (action.type === TASK_ACTIONS.HANDLE_TOGGLE_TASK) {
      // Toggle de la tarea completada
      return tasks.map(task =>
        task.id === action.payload ? { ...task, done: !task.done } : task
      );
    } else if (action.type === TASK_ACTIONS.DELETE_TASK) {
      // Eliminar una tarea basada en su ID
      return tasks.filter(task => task.id !== action.payload);
    } else if (action.type === TASK_ACTIONS.DELETE_ALL_TASK) {
      // Eliminar todas las tareas completadas
      return tasks.filter(task => !task.done);
    } else {
      // Si la acción no coincide con ninguno de los casos anteriores, devuelve el estado sin cambios
      return tasks;
    }
  };