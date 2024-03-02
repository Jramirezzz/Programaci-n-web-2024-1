import { Button } from "../Buttons/Button";

export function Form (){
    return (
        <section>
            <div className='container'>
            <input 
                placeholder="Add a Task">
            </input>
            <Button Title = "Add Task"/>

            </div>
        </section>
    )
}