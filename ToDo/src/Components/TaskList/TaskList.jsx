import { Task } from "../Tasks/Task"
import { useTask } from "../../Hooks/useTask"

export function TasksList(){
    
    const {
        tasks,
        handleToggleTask,
        deleteTask,
        filteredTasks
    } = useTask()

    const hasTasks = tasks.length > 0
    
    const getGetTaskList = (hasTasks) =>  {
      return hasTasks
              ? (filteredTasks.map(({ name, id, done }) => (
                <div key={id}>
                  <Task
                    titleTask={name}
                    done={done}
                    onToggle={() => handleToggleTask(id)}
                    onDelete={() => deleteTask(id)}
                  />
                </div>
              )))
              : <p>No hay tareas</p>
    }
    
    return getGetTaskList(hasTasks)
      
  }
  