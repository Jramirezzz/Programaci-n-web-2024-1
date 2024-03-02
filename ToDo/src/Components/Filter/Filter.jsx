
export function Filter (){
    return(
        <section>
            <div className="Container">
                <input type="radio" id="All"></input>
                <label htmlFor="id">All</label>
                <input type="radio" id="Completed"></input>
                <label  htmlFor="completed">Completed</label>
                <input type="radio" id="Pending"></input>
                <label  htmlFor="pending">Pending</label>

            </div>
        </section>
    )
}