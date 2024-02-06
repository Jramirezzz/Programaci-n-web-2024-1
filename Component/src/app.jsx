import React from "react"
import { CardType1 } from "./Components/CardType1"
import { NavBar } from "./Components/navbar"

import { Footer } from "./Components/Footer"
import { CardType2 } from "./Components/CardType2"
import { CardType3 } from "./Components/CardType3"
import { CardType4 } from "./Components/CardType4"
import { CardType5 } from "./Components/CardType5"


export default function App (){
    return(
      <>
      <NavBar/>
      <CardType1/>
      <CardType5/>
      <CardType4/>
      <CardType3/>
     
      <CardType2/>
      <Footer/>
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