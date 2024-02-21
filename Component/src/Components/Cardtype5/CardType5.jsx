import React from 'react'

import { CardInfo5 } from '../../const/CardInfo5'
import './CardType5.css'

export function CardType5 () {
  return (
    <div className='BigContainerCardType5'>
      {CardInfo5.map(({ img, Title, id }) => {
        return (
          <div key={id} className='ContainerImgCardType5'>
            <img className='ImgCardType5' src={img} alt='card' />
            <h4 className='TitleCardType5'>{Title}</h4>
          </div>
        )
      })}
    </div>
  )
}
