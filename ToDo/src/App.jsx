import { useState } from 'react'
import './App.css'
import {Header, Form, Filter, Task, Footer} from './Components/index'

function App() {

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  function AddTask (taskName) {
    console.log(taskName); 
    const newTask = {
    id: crypto.randomUUID(),
    name: taskName,
    done: false
  }
  setTasks(prevArray => [...prevArray, newTask])
  }

  const handleToggleTask = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

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
        {filteredTasks.map(({ name, id, done }) => (
          <div key={id}>
            <Task
              titleTask={name}
              done={done}
              onToggle={() => handleToggleTask(id)}
            />
          </div>
        ))}
      </section>
      <Footer/>
    </>
  )
}

export default App