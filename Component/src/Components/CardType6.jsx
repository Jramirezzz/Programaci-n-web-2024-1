import React from "react"



const CardInfo = [

    {img: "https://images.ctfassets.net/x7j9qwvpvr5s/3GoZZ3FATjYMoviLYfCRs6/2cbd39af7fd2e5dd1614d5c672c226f0/Panigale-V4-Bautista-Replica-Card-slider-1080x1080.png", Title:"Panigale V4 Bautista 2023"},
    {img: "https://images.ctfassets.net/x7j9qwvpvr5s/4RUe5bTH7GJV8uaDu4cR5J/aeffd2d3f82ee715948f8368c411ed6d/Panigale-V4-Martin-World-Champion-Card-slider-1080x1080.png", Title:"Panigale V4 Martín 2023"},
    {img: "https://images.ctfassets.net/x7j9qwvpvr5s/523z6jS22fT4GGK5wiCIGb/0cea49df3f0c854ff80f54e25292617a/Panigale-V4-Bagnaia-World-Champion-card-slider-1080x1080.png", Title:"Panigale V4 Bagnaia 2023"},
    {img: "https://images.ctfassets.net/x7j9qwvpvr5s/3q23bUKIblv3lYg9u7Zd38/5e59a01c8efb5abf1e28de2b64584e45/Panigale-V4-Bezzecchi-World-Champion-Card-Slider-1080x1080.png", Title:"Panigale V4 Bezzecchi 2023"},
    {img: "https://images.ctfassets.net/x7j9qwvpvr5s/1TDsPRWK667bgQfZHtE05j/fec279b2552cfefaf1855cfb257a1ef0/Panigale-V2-Bulega-Replica-Card-Slider-1080x1080.png", Title:"Panigale V2 Bulega 2023"},
  ]
  
  export function CardType6 (){
    return(
      <div className="BigContainerCardType6">
      {CardInfo.map(function(CardInfos){
    return(
      <div className="ContainerCardType6">
          <img style={{width:"500px",height:"500px"}}src ={CardInfos.img} alt="card"/>
          <h4>{CardInfos.Title}</h4>
        </div>
    )
      })}
      </div>
    )
      }