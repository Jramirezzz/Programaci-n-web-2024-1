import React from 'react'

import { CardType1, CardType2, CardType3, CardType4, CardType5, CardType6, NavBar, Footer, Carousel } from './Components'

export default function App () {
  return (
    <>
      <NavBar />
      <Carousel />
      <CardType1 />
      <CardType6 />
      <h1 className='FirstTitle'>Gama Ducati</h1>
      <CardType5 />
      <h1 className='SecondTitle'>Destacados</h1>
      <CardType4 />
      <CardType3 />
      <h1 className='ThirdTitle'>Disfruta al máximo de Ducati</h1>
      <CardType2 />
      <Footer />
    </>
  )
}
