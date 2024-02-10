import React from "react"

const CardInfo = [
{
  img: "https://images.ctfassets.net/x7j9qwvpvr5s/4TWXqYAVxPgVaC1o5BQZTW/81e95f98c9f2d674c591ed51a1ea0135/DRE-Looks-preview-802x561.jpg", 
  Title:"Riding Academy",
},
{
  img: "https://images.ctfassets.net/x7j9qwvpvr5s/3Pv1vY12RzGNbc5Rjbl94P/1985eeae8b81e2c4c1d838b518926aaa/Ducati-Corse-looks-preview-802x561.jpg", 
  Title:"Mundo MotoGP y Superbike"},
{
  img: "https://images.ctfassets.net/x7j9qwvpvr5s/7sqHpO9f6QbVuwryVahuCS/5001707dce517e961676caa489d39f85/Ducati-Homepage-Ducati-Heritage-looks_-preview-1000x700.png",
  Title:"La leyenda Ducati",
},
{
  img: "https://images.ctfassets.net/x7j9qwvpvr5s/5ACmfzl4ti6MNCvtDWtjjF/e2b8ac86cb43c040be3231d5fc14f2a3/looks-preview-innovation-802x561.jpg", 
  Title:"Vanguardia y tecnologia",
},

]

export function CardType3 (){
  return(
    <div className="ContainerCardType3">
    {CardInfo.map(({img,Title}) =>{
  return(
    <div className="GridImgCardType3">
      <div className="ImgCardType3">
          <img style={{width:"1000px", height:"700px"}}src ={img} alt="card"/>
          <h4 className="TitleCardType3">{Title}</h4>
      </div>
    </div>
  )
    })}
    </div>
  )
    }
    






  