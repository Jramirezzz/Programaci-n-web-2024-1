import { useState } from "react";
import {Button} from "../Buttons/Button"
import './form.css'
// import { useTypeButton } from "../../Hooks/UseTypeButton";


export function Form (){
    
const [Task, SetTask] = useState([])
const [taskInput, setTaskInput] = useState('')

const handleTaksInput = (e) => {
    setTaskInput(e.target.value);
};

const handleAddTaks = () => {
    if(taskInput.trim() !== ''){
        SetTask([...Task, taskInput]);
        setTaskInput('');
    }
}


    return (
        <section>
            <form>
            <div className='containerForm'>
            <input
                 value={taskInput}
                 onChange={handleTaksInput}
                 className="form" 
                 placeholder="Add a Task">

                {
                    console.log(Task)
                }
                    
                
            </input>
            
            <Button onClick={handleAddTaks} Title = "Add Task"/>
    

            </div>
            </form>
        </section>
    )
}