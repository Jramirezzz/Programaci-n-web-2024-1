// import { useState } from 'react'
import './Button.css'
// import { useTypeButton } from '../../Hooks/UseTypeButton'




export function Button(Props){
    
    const {Title, onClick,type} = Props

    const handleClick = () => onClick(type);
    return(
        <section>
            <div className='ContainerButton'>
            <button className="Button"  
                    onClick={handleClick}>
                    {Title}
            </button>
            </div>
        </section>
    )
}
