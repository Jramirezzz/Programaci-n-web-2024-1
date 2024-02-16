import React from 'react'
import { useState } from 'react'
import Button from './Components/Button/Button.jsx'


import './App.css'


export  default function App() {
const [Counter,setCounter] = useState(0)
const  Increment=(type)=>{
    setCounter(Counter +1 )
}
const Decrement=(type)=>{
  setCounter(Counter -1)
}
return (
  <>
    <Button title="Suma" onClick={Increment}/>
    
    <Button title="Resta" onClick={Decrement}/>

      <h1>{Counter}</h1>
</>
)


}