import './Button.css'
export function Button(Props){
    
    const {Title, onClick,type,uid} = Props

    const handleClick = () => onClick(type);
    return(
        <section>
            <div className='ContainerButton'>
            <button className="Button"
                    id={uid}
                    type = {type}
                    onClick={handleClick}>
                    {Title}
            </button>
            </div>
        </section>
    )
}
