import React from 'react'

import { CardInfo4 } from '../const/CardInfo4'

export function CardType4 () {
  return (
    <div className='BigContainerCardType4'>
      {CardInfo4.map(({ img, Section, Title, Description, Link, id }) => {
        return (
          <div key={id} className='ContainerCardType4'>
            <div className='TextContainer'>
              <h6 className='SectionCardType4'>{Section}</h6>
              <h3 className='TitleCardType4'>{Title}</h3>
              <h5 className='DescriptionCardType4'>{Description}</h5>
              <button className='LinkCardType4'>{Link}</button>
            </div>
            <div className='ImageContainer'>
              <img style={{ width: '500px', height: '270px', marginTop: '26px' }} className='ImgCardType4' src={img} alt='card' />
            </div>
          </div>
        )
      })}
    </div>
  )
}
