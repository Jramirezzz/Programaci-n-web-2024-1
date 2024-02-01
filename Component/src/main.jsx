import './style.css'
import React from 'react'
import {createRoot} from 'react-dom'

const appContainer = document.getElementById("app")
const root = createRoot(appContainer)

// two differents ways to render a component 
function App (){
  return(
    <>
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
    </>
  )
}


// function App (){
//   return[
//     <Header></Header>,
//     <Body></Body>,
//     <Footer></Footer>
//   ]
// }

function Header (){
  return(
    <header>
    <h1>Main Page Title</h1>
    <img src="" alt="" />  
    </header>
  )
}

function Body(){
  return(
    <body> 
      <h1>
        Principal Title
      </h1>
      <p>
        Principal Paragrph Paragrph
      </p>
    </body>
  )
} 
function Footer(){
  return(
    <footer>
      <h3>
        Good bye
      </h3>
      <img src = "" alt = ""/>
    </footer>
  )
} 


root.render(<App></App>)


console.log(appContainer)