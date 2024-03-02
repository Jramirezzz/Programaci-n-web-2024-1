import './Button.css'
export function Button(Props){
    const {Title} = Props
    return(
        <section>
            <div className='ContainerButton'>
            <button className="Button">{Title}</button>
            </div>
        </section>
    )
}