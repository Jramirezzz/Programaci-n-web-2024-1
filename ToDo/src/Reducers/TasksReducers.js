import { TAKS_ACTIONS } from "../Const/TaskAction";


export const reducerTask = (tasks, action) => {
    if (action.type === TAKS_ACTIONS.CREATE_TAKS){
        const newTask = {
               id: crypto.randomUUID(),
               name: action.payload,
               done: false
            }
         return(prevArray => [...prevArray, newTask])
             }else if (action.type === TAKS_ACTIONS.)

    }
