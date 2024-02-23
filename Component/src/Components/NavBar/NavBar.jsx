import React, { useState } from 'react'
import logoMenu from '../../img/menu.png'

import './NavBar.css'
import { ModelNavBar } from '../ModelNavBar/ModelNavBar'
import { HamMenu } from '../HamMenu/HamMenu'

export function NavBar () {
  const [isOpen, setIsOpen] = useState(false)
  const [showMenu2, setShowMenu2] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = (event) => {
    setShowMenu(!showMenu)
  }

  const HamClick = (event) => {
    setShowMenu2(!showMenu2)
  }

  return (
    <nav className='menu'>
      <section className='FirstNavBar'>
        <ul>
          <button
            onClick={HamClick}
            className='ButtonLine'
          >
            <img className='LogoMenu' style={{ width: '25px', height: '25px' }} src={logoMenu} />
          </button>
          <li>
            <button className='ButtonModel' onClick={handleClick}>MODELOS</button>
          </li>
          <li>
            <a href='#'>EQUIPAMENTOS</a>
          </li>
          <li>
            <a href='#'>PROMOCIONES</a>
          </li>
          <a>
            <img
              style={{ width: '60px', height: '60px' }}
              src='https://assets.ducati.com/dist/0.16.2/assets/img/ducati_id.png'
            />
          </a>
          <li><a href='#'>USO CERTIFICADO</a></li>
          <li><a href='#'>SOLICITAR TEST RIDE</a></li>
          <li><a href='#'>BUSCADOR CONSCESIONARIOS</a></li>
        </ul>
        <section className='ThirdNavBar'>
          {
             !isOpen && showMenu2 ? <HamMenu /> : showMenu ? <ModelNavBar /> : null

          }

        </section>
      </section>
      <section className='SecondNavBar'>
        {/* {
        !showMenu ? null : <ModelNavBar />
        } */}
      </section>
    </nav>
  )
}
