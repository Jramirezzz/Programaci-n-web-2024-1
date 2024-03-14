import { useState, useEffect} from 'react'
import './App.css'
import {Header, Form, Filter, Task, Footer} from './Components/index'

const initTasks = JSON.parse(window.localStorage.getItem("tasks")) ?? [] 


function App() {

  const [tasks, setTasks] = useState(initTasks);
  const [filter, setFilter] = useState('All');
  


  useEffect(() => {
     window.localStorage.setItem("Task", JSON.stringify(tasks));
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

  const countCompletedTasks = () => {
    return tasks.filter(task => task).length;
  };

  const countUncompletedTask = () => {
    return tasks.filter(task  => task.done).length;
  }  

  const filteredTasks = tasks.filter(task => {
    if (filter === 'All') return true;
    if (filter === 'Completed') return task.done;
    if (filter === 'Pending') return !task.done;
    return false;
  });

   

  return (
    <>
      <Header/>
      <Form onSubmit={AddTask} />
      <Filter onChangeFilter={setFilter}/>
      <section className='BigContainer'>

        {
        tasks.length > 0 ?  
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
              (<p>No hay tareas sarabambiche</p> )
              
              
          
        }
        
      </section>
      <Footer
      allDelete = {() => deleteAllTask()}
      counterAll = { countCompletedTasks()}
      counter = {countUncompletedTask()}
        />
    </>
  )
}

export default App