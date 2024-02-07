import React from "react"
import { CardType1 } from "./Components/CardType1"
import { NavBar } from "./Components/navbar"

import { Footer } from "./Components/Footer"
import { CardType2 } from "./Components/CardType2"
import { CardType3 } from "./Components/CardType3"
import { CardType4 } from "./Components/CardType4"
import { CardType5 } from "./Components/CardType5"
import { CardType6 } from "./Components/CardType6"


export default function App (){
    return(
      <>
      <NavBar/>
      <CardType1/>
      <CardType6/>
      <h1>Gama Ducati</h1>
      <CardType5/>
      <h1>Destacados</h1>
      <CardType4/>
      <CardType3/>
     <h1>Disfruta al máximo de Ducati</h1>
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