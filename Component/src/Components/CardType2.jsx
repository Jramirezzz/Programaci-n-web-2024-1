import React from "react"



export function CardType2 (){

    const CardInfo = [
        {img: "https://images.ctfassets.net/x7j9qwvpvr5s/6krZBePA3g8nWMcONaqLdJ/e3a1e78d999aef52329c95712f7452ec/Ducati-configurator-prefooter-shortcuts-768x200.png?fm=webp&q=90", Title:"Configurador Ducati"},
        {img: "https://images.ctfassets.net/x7j9qwvpvr5s/503HhZJCH3aR5OMPnYcreX/2578af1ba25edc8f53580567da8837ff/Scambler-configurator-prefooter-shortcuts-768x200.png?fm=webp&q=90", Title:"Configurador Scrambler"},
        {img: "https://images.ctfassets.net/x7j9qwvpvr5s/343gkAolJy7TUzbmXW1qID/72d0091e57674ffb7f14dcca7e0fa365/Shop-Ducati-prefooter-shortcuts-768x200.png?fm=webp&q=90", Title:"Ducati Shop"},

    ]
    const results = [];

  CardInfo.forEach((CardInfos) => {
    results.push(
      <div className="ContainerImgCardType2">
        <img src ={CardInfos.img} alt="card"/>
        <h4 className="TitleCardType2">{CardInfos.Title}</h4>
      </div>,
    );
  });

  return <div className="CardType2Container" >{results}</div>;
  }
  