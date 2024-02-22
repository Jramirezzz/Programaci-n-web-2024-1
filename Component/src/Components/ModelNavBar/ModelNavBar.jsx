import React from 'react'
import './ModelNavBar.css'
import { ModelNavBarData } from '../../const/ModelNavBar'

export function ModelNavBar () {
  return (
    <div className='BigContainerModelNavBar'>
      {ModelNavBarData.map(({ img, Title, id }) => {
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
