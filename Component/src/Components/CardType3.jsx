import React from "react"


export function CardType3 (){

    const CardInfo = [
        {img: "https://images.ctfassets.net/x7j9qwvpvr5s/4TWXqYAVxPgVaC1o5BQZTW/81e95f98c9f2d674c591ed51a1ea0135/DRE-Looks-preview-802x561.jpg", Title:"Riding Academy"},
        {img: "https://images.ctfassets.net/x7j9qwvpvr5s/3Pv1vY12RzGNbc5Rjbl94P/1985eeae8b81e2c4c1d838b518926aaa/Ducati-Corse-looks-preview-802x561.jpg", Title:"Mundo MotoGP y Superbike"},
        {img: "https://images.ctfassets.net/x7j9qwvpvr5s/7sqHpO9f6QbVuwryVahuCS/5001707dce517e961676caa489d39f85/Ducati-Homepage-Ducati-Heritage-looks_-preview-1000x700.png", Title:"La leyenda Ducati"},
        {img: "https://images.ctfassets.net/x7j9qwvpvr5s/5ACmfzl4ti6MNCvtDWtjjF/e2b8ac86cb43c040be3231d5fc14f2a3/looks-preview-innovation-802x561.jpg", Title:"Vanguardia y tecnologia"},

    ]
    const results = [];

  CardInfo.forEach((CardInfos) => {
    results.push(
      <div>
        <img src ={CardInfos.img} alt="card"/>
        <h4>{CardInfos.Title}</h4>
        <h3> {CardInfos.Description}</h3>
      </div>,
    );
  });

  return <div>{results}</div>;
  }
  