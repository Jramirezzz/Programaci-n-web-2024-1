import React from "react"

const CardInfo = [
  {img: "https://images.ctfassets.net/gqrh37syhmi5/2nH7ZF5qLII1hsKtPm85pc/0b4de3ac44dcae9679feb60ecbce4644/432X230.png", Title:"ACCESORIOS DUCATI PERFORMANCE",Description:"Desata el mejor lado de tu moto con los accesorios Ducati"},
  {img: "https://images.ctfassets.net/x7j9qwvpvr5s/1TB9UUzylBtt75wC74QTGR/a04fa32db92c039ed4c1245b9c7049b5/multistrada-v4s-ambience-13-300x300.jpg", Title:"4EVER DUCATI",Description:"Ducati presenta la garantía oficial de 4 años en todas las Ducati y Ducati Scrambler ."},
  {img: "https://images.ctfassets.net/x7j9qwvpvr5s/5FEHtxL78zjiWDYmRHI1ZR/31777ee9a97aca0cac35ca698ab21e99/monster-ARG-news-300x300.jpg", Title:"GAMA A2",Description:"Si tu carnet de conducir es el A2, no lo dudes y piensa en Ducati. Te invitamos a descubrir nuestra gama de motocicletas."},

]

export function CardType1 (){
return(
  <>
  {CardInfo.map(function(CardInfos){
return(
  <div>
        <img src ={CardInfos.img} alt="card"/>
        <h4>{CardInfos.Title}</h4>
        <h3> {CardInfos.Description}</h3>
      </div>
)
  })}
  </>
)
  }
  
