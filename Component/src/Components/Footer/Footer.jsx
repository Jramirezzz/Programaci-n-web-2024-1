import React from 'react'

import { Icons } from '../../const/Icons'
import './Footer.css'

export function Footer () {
  return (
    <footer>
      <div className='FirstFooter'>
        <h3 className='Suscription'> Suscripción al boletín informativo</h3>
        <p className='FirstElement'>Introducir tu dirección de correo electrónico para estar siempre actualizado sobre las novedades y las promociones Ducati.</p>
        <p className='FirstElement'>Puedes completar tu suscripción y crear tu perfil en Ducati.com en cualquier momento para recibir comunicaciones personalizadas y acceder a todas las funciones.</p>
        <p className='FirstElement'>Declaro haber leído la nota informativa redactada según el art. 13 del Reglamento UE 2016/679 sobre la protección de datos personales ("Reglamento") y autorizo el tratamiento de mi dirección de correo electrónico para los fines antes indicados.</p>

        <input className='InputCorreo' placeholder='  TU CORREO ELECTRÓNICO' />

        <p className='Elementos'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>

      </div>
      <hr />
      <div className='OfferDucati'>
        <p>*Oferta para una Ducati Multistrada V4 S Essential Ducati Red. PVP recomendado en Penínusala y Baleares de 25.090,00 €. Importe total del crédito: 18.800,89€. Comisión de apertura al contado: 658,03€. Importe total adeudado: 21.838,07€. Precio total a plazos: 28.127,17€. TAE: 6,64%. TIN: 4,95%. Sistema de amortización francés. Intereses: 2.379,14€. Coste total del crédito. 3.037,17€. Oferta válida hasta el 31/03/2024 para clientes particulares calculada a 10.000km anuales y ofrecida por Ducati Financial Services, marca comercializada por Volkswagen Bank GmbH S.E. Avda. Bruselas, 34 - 28108 Alcobendas. Reg. Mercantil de Madrid. Tomo 16828, Sección 8, Folio 184, Hoja M-287573, Inscrita con el nº 1480 del Reg. Especial del Banco de España - CIF. W-00427411.</p>
      </div>

      <div className='Footer'>
        <div className='SecondFooter'>
          <img className='ImgSecondFooter' src='https://images.ctfassets.net/x7j9qwvpvr5s/2CsA99p11kL3UvzN4txafd/832dabdc0d00a62a43fe559933a46c35/Ducati-Member-of-the-Audi-Group.svg' alt='Ducati logo' />
          <section className='Terms'>
            <p className='Elementos'>TERMS OF USE</p>
            <p className='Elementos'>INFORMACION DE PRIVACIDAD</p>
            <p className='Elementos'>INFORMACION SOBRE LAS COOKIES</p>
          </section>
          <p className='Elementos'>
            Copyright © 2024 Ducati Motor Holding S.p.A – A Sole Shareholder Company - A Company subject to the
            Management and Coordination activities of AUDI AG. All rights reserved. VAT 05113870967
          </p>
          <div className='IconsContainer'>
            {

                    Icons.map(({ img, id }) => {
                      return (
                        <div key={id} className='Icons'>
                          <img className='Imagen' src={img} />

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
