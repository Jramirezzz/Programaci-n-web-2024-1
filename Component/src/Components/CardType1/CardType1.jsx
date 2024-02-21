import React from 'react'
import { CardInfo1 } from '../../const/CardInfo1'
import './CardType1.css'

export function CardType1 () {
  return (
    <div className='BigContainerCardType1'>
      {CardInfo1.map(({ img, Title, Description, id }) => {
        return (
          <div key={id} className='ContainerCardType1'>
            <div className='imageContinerType1'>
              <img className='ImgCardType1' style={{ width: '416px', height: '230px' }} src={img} alt='card' />
            </div>

            <div className='Cardtype1'>
              <h4 className='TitleCardType1'>{Title}</h4>
              <h3 className='DescriptionCardType1'> {Description}</h3>
            </div>

          </div>
        )
      })}
    </div>
  )
}
