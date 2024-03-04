// import { useState } from 'react'
import { useState } from 'react'
import './Button.css'
// import { useTypeButton } from '../../Hooks/UseTypeButton'




export function Button(Props){
    const [Task, SetTask] = useState([])

    
    const {Title, SendInfo,ButtonType} = Props
   const handleClick = () => SendInfo(ButtonType)
    return(
        <section>
            <div className='ContainerButton'>
            <button className="Button"  onClick={handleClick}>{Title}</button>
            </div>
        </section>
    )
}
