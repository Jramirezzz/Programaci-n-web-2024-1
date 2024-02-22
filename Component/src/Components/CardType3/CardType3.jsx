import React from 'react'
import { CardInfo3 } from '../../const/CardInfo3'
import './CardType3.css'

export function CardType3 () {
  return (
    <div className='BigContainerCardType3'>
      {CardInfo3.map(({ img, Title, id }) => {
        return (
          <div key={id} className='SecondContainerCardType3'>
            <div className='ContainerCardType3'>
              <img className='ImgCardType3' src={img} alt='card' />
              <h4 className='TitleCardType3'>{Title}</h4>
            </div>
          </div>
        )
      })}
    </div>
  )
}
