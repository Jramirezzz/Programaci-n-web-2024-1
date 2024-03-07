import { useState } from "react";
import './form.css'
// import { useTypeButton } from "../../Hooks/UseTypeButton";


export function Form (onSubmit){
    
const [taskInput, setTaskInput] = useState('')

const handleTaksInput = (e) => {
    setTaskInput(e.target.value);
};

    return (
        <section>
            <form onSubmit={()=> {onSubmit(taskInput)}} > 
            <div className='container-form'>
            <input
                 value={taskInput}
                 onChange={handleTaksInput}
                 className="form" 
                 placeholder="Add a Task">

                {
                    console.log(taskInput)
                }
                    
                
            </input>
            
            <button type="submit"> add Task </button>
    

            </div>
            </form>
        </section>
    )
}
