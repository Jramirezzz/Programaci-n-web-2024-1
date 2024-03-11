import { Button } from "../Buttons/Button";
import './Footer.css';
export function Footer (props){
    const {allDelete, counter, counterAll} = props ;

    return(
            <footer className="footer">
                <h5 className="title-footer"> {counter} Tareas Completadas de {counterAll} </h5>
                <Button title="Clear All Completed" onClick = {allDelete}/>
            </footer>
    )
}