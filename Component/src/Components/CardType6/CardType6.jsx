import React from 'react'
import { CardInfo6 } from '../../const/CardInfo6'
import './CardType6.css'

export function CardType6 () {
  return (
    <div className='BigContainerCardType6'>
      {CardInfo6.map(({ img, Title, id }) => {
        return (
          <div key={id} className='ContainerCardType6'>
            <img className='ImgCardType6' src={img} alt='card' />
            <h4 className='TitleCardType6'>{Title}</h4>
          </div>
        )
      })}
    </div>
  )
}
