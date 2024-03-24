import { useState } from "react";
import './form.css'
import { useTask } from "../../Hooks/useTask"

export function Form (){
const {
    AddTask,
} = useTask()
    
const [taskInput, setTaskInput] = useState('')
const [dateInput, setDateInput] = useState('')

const handleTaksInput = (e) => {
    e.preventDefault();
    setTaskInput(e.target.value);
};

const handleDateInput = (e) => {
    e.preventDefault();
    setDateInput(e.target.value);
};

const handleTaks = (e) => {
    e.preventDefault();
    AddTask(taskInput, dateInput); 
    setTaskInput(""); 
    setDateInput(""); 
}

 const submitIsDisable = taskInput.trim().length === 0 || dateInput.trim().length === 0;

    return (
        
            <form onSubmit={handleTaks}>
                <div className="inputs-div"> 
                    <input
                        value={taskInput}
                        onChange={handleTaksInput}
                        className="input-task" 
                        placeholder="Add a Task">
                    </input>
                    <input
                        type="date"
                        className="input-task"
                        value={dateInput}
                        onChange={handleDateInput}>
                    </input>
                </div>
                <button 
                    type="submit"
                    className={`submit-btn ${submitIsDisable ? 'disabled-btn' : ''}`}
                    disabled= {submitIsDisable}> 
                    add Task
                </button>
            </form>
    )
}