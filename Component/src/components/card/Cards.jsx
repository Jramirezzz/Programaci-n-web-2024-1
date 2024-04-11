import { useEffect, useState } from "react";
import { Button } from "../button/button";
import { fetchCatFact } from "../data/fetcFact";
import { fetchCatImage } from "../data/fetchImg";

import './card.css'

export function CardCompleted() {
    const [loading, setLoading] = useState(false);
    const [fact, setFact] = useState(""); 
    const [catImage, setCatImage] = useState(null);

    const fetchData = async () => {
        setLoading(true); // Establecer loading en true al iniciar la carga de datos
        try {
            const data = await fetchCatFact();
            setFact(data.fact);
            const imageUrl = await fetchCatImage(data.fact);
            setCatImage(imageUrl);
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        } finally {
            setLoading(false); // Establecer loading en false cuando se completa la carga de datos, ya sea exitosa o no
        }
    };

    useEffect(() => {
        fetchData();
    }, []); // Se ejecutará solo una vez al montar el componente

    const randomFact = () => {
        fetchData(); // Llamar a fetchData para cargar un nuevo hecho y una nueva imagen del gato
    };

    if(loading){
        return (
            <div className="fact">
                <h2>Its loading</h2>
            </div>
        );
    }

    return (
        <div>
            <section>
                <div>
                    <p>{fact}</p>
                </div>
                <img src={catImage} alt="" />
            </section>
            <Button onClick={randomFact} title={"Another fact"}/>
        </div>
    );
}
