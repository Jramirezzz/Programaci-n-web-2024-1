import { useState } from 'react'
import './App.css'
import {Header, Form,Filter,Task, Footer} from './Components/index'

function App() {

  const [tasks, setTasks] = useState([])


function AddTask (taskName) {
  console.log(taskName); 
  const newTask = {
  id: crypto.randomUUID(),
  name: taskName,
  done: false

 }
 setTasks(prevArray => [...prevArray, newTask])
}



  return (
    <>
      <Header/>
      <Form onSubmit={AddTask} />
      <Filter/>
      <div className='BigContainer'>
      {tasks.map(({ name,id }) => {
        return (
          <div key={id}>
            <Task  titleTask={name} ></Task>
          </div>
        )
      })}
    </div>
      <Footer/>
    </>
  )
}

export default App
