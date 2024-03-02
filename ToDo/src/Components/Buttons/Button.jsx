import './Button.css'
export function Button(Props){
    const {Title} = Props
    return(
        <section>
            <div className='Container'>
            <button className="Button">{Title}</button>
            </div>
        </section>
    )
}