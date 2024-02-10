import React from "react"
import { Button } from "./button"

const Icons = [
  { 
    img:"https://images.ctfassets.net/x7j9qwvpvr5s/56kY1dy4ZO93CxK2Di9itU/5769a9e357351b930a7fee9c38ad818d/logo-scrambler.svg",
  },
  { 
    img:"https://images.ctfassets.net/x7j9qwvpvr5s/mAPUX0tvcEr7aWnAvURML/fdadaff5825970b1cf4152a383b09c6b/Scrambler-configurator-icon.svg",
  },
  { 
    img:"https://images.ctfassets.net/x7j9qwvpvr5s/ZWRckIEnlpmIyRjTWROL8/d9cf76987e3b376aaa8ecd81159c8de1/fb-icon.svg",
  },
  { 
    img:"https://images.ctfassets.net/x7j9qwvpvr5s/4f48hkC0Lm5qMRHrOT8WwV/63c89f535e32ec23ec3b5dc94ad3de64/twitter-icon.svg",
  },
  { 
    img:"https://images.ctfassets.net/x7j9qwvpvr5s/5rfCVoq7TMPwjeeig77b9S/19a9c2f929c2e990790e4ff4cee614b3/instagram-icon.svg",
  },
  { 
    img:"https://images.ctfassets.net/x7j9qwvpvr5s/sAz4OhE7CJoOW6d3EzPym/4873db418d8aa82f9d14b411b9f52c67/yt-icon.svg",
  },
  { 
    img:"https://images.ctfassets.net/x7j9qwvpvr5s/JFrSj1zkgM3piads06CSE/8658ad49ce47062b15b9af7eb4b3b49a/linkedin-icon.svg",
  },
  { 
    img:"",
  },
  
]

export function Footer(){
  
    return(
      <footer>
      <div className="FirstFooter">
          <h3 className="FirstElement" > Suscripción al boletín informativo</h3>
            <p className="FirstElement">Introducir tu dirección de correo electrónico para estar siempre actualizado sobre las novedades y las promociones Ducati.</p>
            <p className="FirstElement">Puedes completar tu suscripción y crear tu perfil en Ducati.com en cualquier momento para recibir comunicaciones personalizadas y acceder a todas las funciones.</p>
            <p className="FirstElement">Declaro haber leído la nota informativa redactada según el art. 13 del Reglamento UE 2016/679 sobre la protección de datos personales ("Reglamento") y autorizo el tratamiento de mi dirección de correo electrónico para los fines antes indicados.</p>
          
              <input className="InputCorreo" placeholder="  TU CORREO ELECTRÓNICO"/> 
              <Button/>
             
             
                <p className="Elementos">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>

                
              </div>
              <hr/>
              <div  className="OfferDucati">
                <p>*Oferta para una Ducati Multistrada V4 S Essential Ducati Red. PVP recomendado en Penínusala y Baleares de 25.090,00 €. Importe total del crédito: 18.800,89€. Comisión de apertura al contado: 658,03€. Importe total adeudado: 21.838,07€. Precio total a plazos: 28.127,17€. TAE: 6,64%. TIN: 4,95%. Sistema de amortización francés. Intereses: 2.379,14€. Coste total del crédito. 3.037,17€. Oferta válida hasta el 31/03/2024 para clientes particulares calculada a 10.000km anuales y ofrecida por Ducati Financial Services, marca comercializada por Volkswagen Bank GmbH S.E. Avda. Bruselas, 34 - 28108 Alcobendas. Reg. Mercantil de Madrid. Tomo 16828, Sección 8, Folio 184, Hoja M-287573, Inscrita con el nº 1480 del Reg. Especial del Banco de España - CIF. W-00427411.</p>
              </div>
      

      <div className="Footer">
        <div className="SecondFooter">
          <img style={{width:"600px", paddingTop:"80px", paddingBottom:"80px"}} src="https://images.ctfassets.net/x7j9qwvpvr5s/2CsA99p11kL3UvzN4txafd/832dabdc0d00a62a43fe559933a46c35/Ducati-Member-of-the-Audi-Group.svg"alt="Ducati logo"/>
            <section className="Terms">
              <p className="Elementos">TERMS OF USE</p>
              <p className="Elementos">INFORMACION DE PRIVACIDAD</p>
              <p className="Elementos">INFORMACION SOBRE LAS COOKIES</p>
            </section>
              <p className="Elementos">
                Copyright © 2024 Ducati Motor Holding S.p.A – A Sole Shareholder Company - A Company subject to the
                 Management and Coordination activities of AUDI AG. All rights reserved. VAT 05113870967
              </p>
              <div className="IconsContainer">
                  {
                    
                    Icons.map(({img}) => {
                      return(
                      <div className="Icons">
                        <img className="Imagen" src={img} />
                        
                      </div>
                      )
                    })
                  }
              </div>
        </div>
      </div>
   </footer>
    )
  }
    
  