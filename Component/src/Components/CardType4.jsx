import React from "react"

const CardInfo = [
  {img: "https://images.ctfassets.net/x7j9qwvpvr5s/3miKCrk3zsTmSPn6uWFQZY/236b4f1d9c577cc498fdb63dad61ed38/DWP23-Ep-02-ENG-MyDucati-Contenuto-Esclusivo-DCorse--663x249.png", Section:"MYDUCATI APP", Title:"MyDucati: Todo el Mundo Ducati en un solo lugar",Description:"Suscríbete a MyDucati: descarga la app y descubre los contenidos exclusivos personalizados de la nueva gama 2023",Link:"REGISTRARSE AHORA"},
  {img: "https://images.ctfassets.net/x7j9qwvpvr5s/6PbpTdzjHif4BCX7y0R2tm/296f8b77eaf8423400a131c33cce5d04/DRE-Gift-Card-banner-wide-663x249.png", Section:"DRE ACADEMY", Title:"Una experiencia inolvidable: Cursos DRE Academy",Description:"¿Qué mejor regalo para un apasionado de las motos que una experiencia de conducción en circuito o en off-road?",Link:"DESCUBRIR MÁS"},

]


export function CardType4() {
  return (
    <div className="BigContainerCardType4">
      {CardInfo.map(function (CardInfos) {
        return (
          <div className="ContainerCardType4">
            <div className="TextContainer">
              <h6 className="SectionCardType4">{CardInfos.Section}</h6>
              <h4 className="TitleCardType4">{CardInfos.Title}</h4>
              <h3 className="DescriptionCardType4">{CardInfos.Description}</h3>
              <button className="LinkCardType4">{CardInfos.Link}</button>
            </div>
            <div className="ImageContainer">
              <img style={{width:"500px",height:"270px",marginTop:"26px"}} className="ImgCardType4" src={CardInfos.img} alt="card" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
    


