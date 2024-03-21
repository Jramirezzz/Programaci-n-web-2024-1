import {useTask} from "../src/Hooks/useTask.js"
import './App.css'
import { TaskContexProvider } from "./Context/TaskContextProvider.jsx"
import {Header, Form, Filter, Task, Footer} from './Components/index'


function App() {

  const {
    tasks,
    AddTask,
    deleteTask,
    deleteAllTask,
    handleToggleTask,
    setFilter,
    getCompletedCount,
    countUncompletedTask,
    filteredTasks
  
  } = useTask()
  
  const importTask = tasks.length > 0 

  return (
    <>
      <Header/>
      <Form onSubmit={AddTask} />
      <Filter onChangeFilter={setFilter}/>
      <section className='BigContainer'>
      { 
      importTask ? 
         
        (filteredTasks.map(({ name, id, done }) => (
              <div key={id}>
                <Task
                  titleTask={name}
                  done={done}
                  onToggle={() => handleToggleTask(id)}
                  onDelete={() => deleteTask(id)}
                />
              </div>
            )))
        : 
        (<p>No hay tareas</p> )
}
      </section>
      <Footer
      allDelete = {() => deleteAllTask()}
      counterAll = { getCompletedCount()}
      counter = {countUncompletedTask()}
      />
    </>
  )
}

export default App