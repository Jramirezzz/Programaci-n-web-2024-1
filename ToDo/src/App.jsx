import './App.css'
import {Header, Form, Filter, Footer, TasksList} from './Components/index'
import { TaskContextProvider } from './Context/TaskContextProvider'

function App() {

  return (
    <>
    <TaskContextProvider>
      <Header/>
      <Form/>
      <Filter/>
      <TasksList/>
      <Footer/>
    </TaskContextProvider>
    </>
  )
}

export default App