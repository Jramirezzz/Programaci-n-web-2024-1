import { useContext } from 'react'
import { taskContext } from '../Context/taskContex.js';

export const useTask = () => {
  
  const context = useContext(taskContext);
  
  if(!context){
     throw new Error("No context provider ") 
  }
  
  return {
    ...context
  }
}