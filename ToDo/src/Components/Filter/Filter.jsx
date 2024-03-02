

import './Filter.css'
export function Filter (){
    return(
        <section>
            <div className="ContainerFilter">
                <input className="Input" type="radio" id="All"></input>
                <label htmlFor="id">All</label>
                <input className="Input" type="radio" id="Completed"></input>
                <label htmlFor="completed">Completed</label>
                <input className="Input" type="radio" id="Pending"></input>
                <label htmlFor="pending">Pending</label>

            </div>
        </section>
    )
}