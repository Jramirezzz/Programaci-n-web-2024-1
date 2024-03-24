import { Task } from "../Tasks/Task"
import { useTask } from "../../Hooks/useTask"
import "./TaskList.css"

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
              ?(
                <section className="task-list">
                  {filteredTasks.map(({ name, date, id, done }) => (
                    <div key={id}>
                      <Task
                        titleTask={name}
                        dateTask={date}
                        done={done}
                        onToggle={() => handleToggleTask(id)}
                        onDelete={() => deleteTask(id)}
                      />
                    </div>
                  ))}
                </section>
              )
              : 
              <section className="task-list">
              <p className="mesage">No tasks yet</p>
              </section>
    }
    
    return getGetTaskList(hasTasks)
      
  }
  