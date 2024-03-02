
export function Button(Props){
    const {Title} = Props
    return(
        <section>
            <div className='Container'>
            <button>{Title}</button>
            </div>
        </section>
    )
}