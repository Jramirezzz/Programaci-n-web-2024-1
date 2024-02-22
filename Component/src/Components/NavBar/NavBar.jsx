import React, { useState } from 'react'
import logoMenu from '../../img/menu.png'

import './NavBar.css'
import { ModelNavBar } from '../ModelNavBar/ModelNavBar'

export function NavBar () {
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = (event) => {
    setShowMenu(!showMenu)
  }
  return (
    <nav className='menu'>
      <section className='FirstNavBar'>
        <ul>
          <img className='LogoMenu' style={{ width: '25px', height: '25px' }} src={logoMenu} />
          <li><button className='ButtonModel' onClick={handleClick}>MODELOS</button></li>
          <li><a href='#'>EQUIPAMENTOS</a></li>
          <li><a href='#'>PROMOCIONES</a></li>
          <a><img style={{ width: '60px', height: '60px' }} src='https://assets.ducati.com/dist/0.16.2/assets/img/ducati_id.png' /></a>
          <li><a href='#'>USO CERTIFICADO</a></li>
          <li><a href='#'>SOLICITAR TEST RIDE</a></li>
          <li><a href='#'>BUSCADOR CONSCESIONARIOS</a></li>
        </ul>
      </section>
      <section className='SecondNavBar'>
        {!showMenu ? null : <ModelNavBar />}
      </section>
    </nav>
  )
}
