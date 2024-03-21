import { Button } from "../Buttons/Button";
import './Footer.css';
import { useTask } from "../../Hooks/useTask"

export function Footer (){
    
    const {
        deleteAllTask,
        getCompletedCount,
        countUncompletedTask,
    } = useTask()

    return(
            <footer className="footer">
                <h5 className="title-footer"> {countUncompletedTask()} Tareas Completadas de {getCompletedCount()} </h5>
                <Button title="Clear All Completed" onClick ={deleteAllTask }/>
            </footer>
    )
}