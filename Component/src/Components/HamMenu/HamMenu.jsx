import React from 'react'
import './HamMenu.css'
import { HamMenuData } from '../../const/HamMenu'

export function HamMenu () {
  return (
    <div className='BigContainerHamMenu'>
      {HamMenuData.map(({ img, Title, id }) => {
        return (
          <div key={id} className='ContainerImgHamMenu'>
            <h4 className='TitleHamMenu'>{Title}</h4>
          </div>
        )
      })}
    </div>
  )
}
