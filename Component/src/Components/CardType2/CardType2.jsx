import React from 'react'
import { CardInfo2 } from '../../const/CardInfo2'
import './CardType2.css'

export function CardType2 () {
  return (
    <div className='BigCardType2Container'>
      {CardInfo2.map(({ img, Title, id }) => {
        return (

          <div key={id} className='ContainerImgCardType2'>
            <img className='ImgCardType2' src={img} alt='card' />
            <h4 className='TitleCardType2'>{Title}</h4>
          </div>
        )
      })}
    </div>
  )
}
