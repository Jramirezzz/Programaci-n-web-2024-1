import React from 'react'
import './ModelNavBar.css'
import { ModelNavBArData } from '../../const/ModelNavBar'

export function ModelNavBar () {
  return (
    <div className='BigContainerModelNavBar'>
      {ModelNavBArData.map(({ img, Title, id }) => {
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
