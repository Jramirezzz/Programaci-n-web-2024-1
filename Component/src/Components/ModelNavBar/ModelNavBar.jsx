import React from 'react'

import { CardInfo5 } from '../../const/CardInfo5'
import './ModelNavBar.css'

export function ModelNavBar () {
  return (
    <div className='BigContainerModelNavBar'>
      {CardInfo5.map(({ img, Title, id }) => {
        return (
          <div key={id} className='ContainerImgModelNavBar'>
            <img className='ImgModelNavBar' src={img} alt='card' />
            <h4 className='TitleModelNavBar'>{Title}</h4>
          </div>
        )
      })}
    </div>
  )
}
