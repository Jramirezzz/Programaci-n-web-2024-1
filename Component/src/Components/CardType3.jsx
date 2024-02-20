import React from 'react'
import { CardInfo3 } from '../const/CardInfo3'

export function CardType3 () {
  return (
    <div className='ContainerCardType3'>
      {CardInfo3.map(({ img, Title, id }) => {
        return (
          <div key={id} className='GridImgCardType3'>
            <div className='ImgCardType3'>
              <img style={{ width: '1000px', height: '700px' }} src={img} alt='card' />
              <h4 className='TitleCardType3'>{Title}</h4>
            </div>
          </div>
        )
      })}
    </div>
  )
}
