import { useState } from 'react'
import './App.css'
import {Header, Form,Filter,Task, Footer} from './Components/index'

function App() {

  const [tasks, setTasks] = useState([])


function AddTask (taskName) {
  console.log(taskName);
  const newTask = {
  id: crypto.randomUUID(),
  name: {taskName},
  done: false

 }
 setTasks(prevArray => [...prevArray, newTask])
}


  return (
    <>
      <Header/>
      <Form onSubmit={AddTask} />
      <Filter/>
      <Task/>
      <Footer/>
    </>
  )
}

export default App
