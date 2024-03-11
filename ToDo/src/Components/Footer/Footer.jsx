import { Button } from "../Buttons/Button";
import './Footer.css';
export function Footer (props){
    const {allDelete} = props ;

    return(
            <footer className="footer">
                <h5 className="title-footer"> 4 Tareas Completadas de 5 </h5>
                <Button title="Clear All Completed" onClick = {allDelete}/>
            </footer>
    )
}