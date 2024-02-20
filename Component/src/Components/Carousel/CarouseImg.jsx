import React, { useState } from 'react'

import ArrowLeft from '../../img/Left-Arrow.png'
import ArrowRigth from '../../img/Rigth-Arrow.png'

import { DataImg } from '../../const/DataImg'
import './CarouselImg.css'

export function Carousel () {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent(current === DataImg.length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? DataImg.length - 1 : current - 1)
  }

  return (
    <div className='slider'>
      <img className='LeftArrow' onClick={prevSlide} src={ArrowLeft} alt='left-Arrow' />
      <img className='RightArrow' onClick={nextSlide} src={ArrowRigth} alt='Rigth-Arrow' />
      {
          DataImg.map((img, id) => {
            return current === id
              ? (
                <div key={id} className='slide'>
                  <img className='ImgCarousel' src={img.img} alt='images' />
                  <h6 className='TitleCarousel'>{img.Title}</h6>
                  <h3 className='DescriptionCarousel'>{img.Description}</h3>
                  <h5 className='SecondDescriptionCarousel'> {img.SecondDescription}</h5>
                  <button className='ButtonCarousel'>{img.Button}</button>
                </div>
                )
              : null
          })
}
    </div>
  )
};
