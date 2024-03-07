import { useState } from 'react'
import './App.css'
import {Header, Form,Filter,Task, Footer} from './Components/index'

function App() {

  const [tasks, setTasks] = useState([])


  setTasks(prevArray => [...prevArray, newTask])

const newTask = {
  id: crypto.randomUUID(),
  name: {onsubmit},
  done: false

}

  return (
    <>
      <Header/>
      <Form/>
      <Filter/>
      <Task/>
      <Footer/>
    </>
  )
}

export default App
