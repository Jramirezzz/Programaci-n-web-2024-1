import React from 'react'
import { CardInfo1 } from '../const/CardInfo1'

export function CardType1 () {
  return (
    <div className='BigContainerCardType1'>
      {CardInfo1.map(({ img, Title, Description, id }) => {
        return (
          <div key={id} className='ContainerCardType1'>
            <img className='ImgCardType1' style={{ width: '416px', height: '230px' }} src={img} alt='card' />
            <h4 className='TitleCardType1'>{Title}</h4>
            <h3 className='DescriptionCardType1'> {Description}</h3>
          </div>
        )
      })}
    </div>
  )
}
