import { Button } from "../Buttons/Button";
import './Footer.css';
export function Footer (){
    return(
        <selection>
            <div className="footer">
                <h5 className="TitleFooter"> 4 Tareas Completadas de 5 </h5>
                <Button Title="Clear All Completed"/>
            </div>
        </selection>
    )
}