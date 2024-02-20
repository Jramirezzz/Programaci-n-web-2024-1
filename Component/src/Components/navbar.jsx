import React from 'react'
import logoMenu from '../img/menu.png'

export function NavBar () {
  return (
    <nav className='menu'>
      <ul>
        <img className='LogoMenu' style={{ width: '25px', height: '25px' }} src={logoMenu} />
        <li><a href='#'>MODELOS</a></li>
        <li><a href='#'>EQUIPAMENTOS</a></li>
        <li><a href='#'>PROMOCIONES</a></li>
        <a><img style={{ width: '60px', height: '60px' }} src='https://assets.ducati.com/dist/0.16.2/assets/img/ducati_id.png' /></a>
        <li><a href='#'>USO CERTIFICADO</a></li>
        <li><a href='#'>SOLICITAR TEST RIDE</a></li>
        <li><a href='#'>BUSCADOR CONSCESIONARIOS</a></li>

      </ul>
    </nav>
  )
}
