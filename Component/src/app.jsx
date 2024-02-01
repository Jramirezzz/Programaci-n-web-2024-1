import React from "react"
import {Header} from "./Components/Header"
import {Body} from "./Components/Body"
import {Footer} from "./Components/Footer"

export default function App (){
    return(
      <>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
      </>
    )
  }

  
// two differents ways to render a component 
// function App (){
//   return(
//     <>
//     <Header></Header>
//     <Body></Body>
//     <Footer></Footer>
//     </>
//   )
// }


// function App (){
//   return[
//     <Header></Header>,
//     <Body></Body>,
//     <Footer></Footer>
//   ]
// }