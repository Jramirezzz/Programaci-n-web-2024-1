import { Button } from "../Buttons/Button";
import './Footer.css';
import { useTask } from "../../Hooks/useTask"

export function Footer (){
    
    const {
        deleteAllTask,
        allTaskCount,
        completedTaskCount,
    } = useTask()

    return(
            <footer className="footer">
                <h5 className="title-footer"> {completedTaskCount()} Tareas Completadas de {allTaskCount()} </h5>
                <Button title="Clear All Completed" onClick ={deleteAllTask }/>
            </footer>
    )
}
