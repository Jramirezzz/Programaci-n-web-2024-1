import React from "react"
import { useState } from "react";
import ArrowLeft from "../img/Left-Arrow.png"
import ArrowRigth from "../img/Rigth-Arrow.png"



const DataImg= [
  {img:"https://images.ctfassets.net/x7j9qwvpvr5s/4sTr4yELBNXLBl0O7agNm7/0a7a99acc36bb71401a6c8af955bd28d/Ducati-Panigale-Racing-_-World-Champion-Replica-2023-Limited-Edition-hero-1600x1000.jpg?fm=webp&q=90"},
  {img:"https://images.ctfassets.net/x7j9qwvpvr5s/6OOP6qhp5jPrFwZkmt0DVo/273c4a520545cf23a3dbbb35c3668b9a/Multistrada-V4-Veicolo-Hero-short-1600x1000_7090-1.jpg?fm=webp&q=90"},
  {img:"https://images.ctfassets.net/x7j9qwvpvr5s/4lITSt1AkuO5jp8I0cwf3D/9eb38c042f3c72d1b4860be5989d1d61/Ducati-DesertX-Rally-DWP24-Overview-hero-1600x1000.jpg?fm=webp&q=90"}

]

export function Carousel  () {
      const [current, setCurrent] = useState(0);
    
      const nextSlide = () => {
        setCurrent(current === DataImg.length - 1 ? 0 : current + 1);
      };
      const prevSlide = () => {
        setCurrent(current === 0 ? DataImg.length - 1 : current - 1);
      };
    
      return (
        <div className="slider">
          <img  className="left-arrow" onClick={prevSlide} src={ArrowLeft} alt="left-Arrow" />
          <img className="right-arrow" onClick={nextSlide} src={ArrowRigth} alt="Rigth-Arrow"/>
          {DataImg.map((img, index) => {
            return current === index ? (
              <div key={index} className="slide">
                <img src={img.img} alt="images" />
              </div>
            ) : null;
          })}
        </div>
      );
    };
  
    