import { Button } from "../Buttons/Button";
import './form.css'
export function Form (){
    return (
        <section>
            <div className='container'>
            <input
                className="form" 
                placeholder="Add a Task">
            </input>
            <Button Title = "Add Task"/>
            </div>
        </section>
    )
}