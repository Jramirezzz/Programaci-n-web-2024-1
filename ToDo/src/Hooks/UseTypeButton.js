import { useState } from "react"



const useTask = () => {

    const [Task, SetTask] = useState([])

    const Tasks = (type) =>{
        if (type === "SaveArray"){
            SaveArray()
        }else if(type === "Delete"){
            /**Funcion para Eliminar */
        }else if(type === "DeleteAll"){
            /**Funcion Para Eliminar Todo */
        }else if(type === "PushInfo"){
            PushInfo()
        }

    }

    const SaveArray = (e) => {
        SetTask(e.target.value);
    };

    const PushInfo = () => {
        SetTask([...oldArray => [...oldArray,  `Nueva Tarea Agregada ${oldArray.length} `]])
        }

    
        return{
            Task,
            Tasks

        }
}
