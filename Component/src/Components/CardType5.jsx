import React from "react"


export function CardType5 (){

    const CardInfo = [
        {img: "https://images.ctfassets.net/x7j9qwvpvr5s/7M4II3oZWdrG7qJqGO5ptK/6fc4f261c32521f14e15e14c0a1838d1/Diavel-for-Bentley-MY24-slider-card-625x405.png", Title:"Diavel For Bentley"},
        {img: "https://images.ctfassets.net/x7j9qwvpvr5s/7cROWz34OLgptVctPXpPwM/90f1e33f81dee176f8995ee5e6d5a143/Panigale-V4-SP2-30-Anniversario-916-MY24-slider-card-625x405.png", Title:"Panigale V4 SP2 30 Anniversario 916"},
        {img: "https://images.ctfassets.net/x7j9qwvpvr5s/5afBWpCFG8vekPmoHhfpmS/96950719f8cfe65dc7237ae2c66af36b/Hypermotard-698-Mono-MY24-slider-card-625x405.png?fm=webp&q=90", Title:"Hypermotard 689 Mono"},
        {img: "https://images.ctfassets.net/x7j9qwvpvr5s/693DBJWJMLVLppF56SVpH2/64f6c7f1f3dc0d5207bf9e5786195d55/Multistrada-V4-RS-MY24-slider-card-625x405.png?fm=webp&q=90", Title:"Multistrada V4"},
        {img: "https://images.ctfassets.net/x7j9qwvpvr5s/2oVExSy3n8OsJvzYNPRNFw/badf343df50b1d43050961e3d7d5f428/DesertX-Rally-MY23-slider-card-625x405.png?fm=webp&q=90", Title:"DesertX Rally"},
        {img: "https://images.ctfassets.net/x7j9qwvpvr5s/2WOHDRV0cYYxognGXL0llt/c104c66d355656c84e219bcf72215ee5/Multistrada-V4-S-Grand-Tour-MY23-slider-card-625x405.png?fm=webp&q=90", Title:"Multistrada V4 S Grand Tour"},
        {img: "https://images.ctfassets.net/x7j9qwvpvr5s/2GNXeWeMZWfgpeYpStFQ46/85bde2636755d4753c7558e1d4f7e6cb/Monster-30-Anniversario-MY23-slider-card-625x405.png?fm=webp&q=90", Title:"Monster 30 Anniversario"},
        {img: "https://images.ctfassets.net/x7j9qwvpvr5s/4fSzdoMLHFghwsbjiCCMHA/b6a32e17aee51b8ea1be47b132309946/Multistrada-V2S-TBST-MY23-slider-card-625x405.png?fm=webp&q=90", Title:"MultiStrada V2 S"},
        {img: "https://images.ctfassets.net/x7j9qwvpvr5s/2Std1zZousaUeO90ffGA54/47964fc5eca54c766e0357b4d1fda082/Powerstage-RR-MY23-slider-card-625x405.png?fm=webp&q=90", Title:"Powerstage RR"},
        {img: "https://images.ctfassets.net/x7j9qwvpvr5s/54oFKjZQCR2BP9sGChYQ07/a3436702f0704f36d6ae9832f375199a/Panigale-V2-Bk-MY23-slider-card-625x405.png?fm=webp&q=90", Title:"Panigale V2"},
        {img: "https://images.ctfassets.net/x7j9qwvpvr5s/1ybLhfCoarc4jG6P0qAi50/21582b60609f95df63cf8994c948745e/Hypermotard-950-RVE-MY23-slider-card-625x405.png?fm=webp&q=90", Title:"Hypermotard"},
        {img: "https://images.ctfassets.net/x7j9qwvpvr5s/4Trbvf0LifNNWzAQSK12sS/02ad3825632787c7f33183ab65735320/Monster-937-Wh-MY23-slider-card-625x405.png?fm=webp&q=90", Title:"Monster"},
        {img: "https://images.ctfassets.net/x7j9qwvpvr5s/27DMlMl4mRVsn4WiYyxzj0/ab2d2fc5d062f3a3794b5ba382c3873d/Supersport-950-S-SL-MY23-slider-card-625x405.png?fm=webp&q=90", Title:"SuperSport"},
        {img: "https://images.ctfassets.net/x7j9qwvpvr5s/6vZZe3RShlCvtR1xVAgdjo/3d4328506755193adef959777c1e197a/Multistrada-V4-Rally-Gr-MY23-slider-card-625x405.png?fm=webp&q=90", Title:"Multistrada V4 Rally"},
        {img: "https://images.ctfassets.net/x7j9qwvpvr5s/7mEVgH88KYb62PXGY2TMlk/d87e6e36eeb4a29f0ddada5a7396dfcf/Scrambler-Icon-Y-MY23-slider-card-625x405.png?fm=webp&q=90", Title:"Scrambler Icon"},
        {img: "https://images.ctfassets.net/x7j9qwvpvr5s/GGBPOcpRvmDIOJSQFy1kP/850591e39ffbcbf0bf2b64969162913a/Diavel-V4-Rd-MY23-slider-card-625x405.png?fm=webp&q=90", Title:"Diavel V4"},
        {img: "https://images.ctfassets.net/x7j9qwvpvr5s/6GcCbWDwSZjW47qrT3bakS/bebe5b0af6ffd4ee00bfadcb6e2b0e7b/Streetfighter-V4S-MY23-slider-card-625x405.png?fm=webp&q=90", Title:"Streetfighter V4 S"},
        {img: "https://images.ctfassets.net/x7j9qwvpvr5s/5oltcOKLxEitNdQJZ0MHar/394446752aff69c5e386b5ad5f52d0f2/DesertX-Bk-MY23-slider-card-625x405.png?fm=webp&q=90", Title:"DesertX"},
        {img: "https://images.ctfassets.net/x7j9qwvpvr5s/3ULLIbFWeJCP5FNL72hDxL/0524d27a9e1155af61d7c9a32ad5e822/MotoE-MY23-slider-card-625x405.png?fm=webp&q=90", Title:"MotoE"},
        {img: "https://images.ctfassets.net/x7j9qwvpvr5s/3GoZZ3FATjYMoviLYfCRs6/2cbd39af7fd2e5dd1614d5c672c226f0/Panigale-V4-Bautista-Replica-Card-slider-1080x1080.png", Title:"Panigale V4 Bautista 2023"},
        {img: "https://images.ctfassets.net/x7j9qwvpvr5s/4RUe5bTH7GJV8uaDu4cR5J/aeffd2d3f82ee715948f8368c411ed6d/Panigale-V4-Martin-World-Champion-Card-slider-1080x1080.png", Title:"Panigale V4 Martín 2023"},
        {img: "https://images.ctfassets.net/x7j9qwvpvr5s/523z6jS22fT4GGK5wiCIGb/0cea49df3f0c854ff80f54e25292617a/Panigale-V4-Bagnaia-World-Champion-card-slider-1080x1080.png", Title:"Panigale V4 Bagnaia 2023"},
        {img: "https://images.ctfassets.net/x7j9qwvpvr5s/3q23bUKIblv3lYg9u7Zd38/5e59a01c8efb5abf1e28de2b64584e45/Panigale-V4-Bezzecchi-World-Champion-Card-Slider-1080x1080.png", Title:"Panigale V4 Bezzecchi 2023"},
        {img: "https://images.ctfassets.net/x7j9qwvpvr5s/1TDsPRWK667bgQfZHtE05j/fec279b2552cfefaf1855cfb257a1ef0/Panigale-V2-Bulega-Replica-Card-Slider-1080x1080.png", Title:"Panigale V2 Bulega 2023"},
       




     
    ]
    const results = [];

  CardInfo.forEach((CardInfos) => {
    results.push(
      <div>
        <img src ={CardInfos.img} alt="card"/>
        <h4>{CardInfos.Title}</h4>
      </div>,
    );
  });

  return <div>{results}</div>;
  }
  