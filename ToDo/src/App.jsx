import { useState } from 'react'
import './App.css'
import {Header, Form,Filter,Task, Footer} from './Components/index'

function App() {

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
