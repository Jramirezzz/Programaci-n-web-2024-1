import { useEffect, useState } from "react";
import { Button,Loader,Title } from "../index";
import { fetchCatFact } from "../data/fetcFact";
import { fetchCatImage } from "../data/fetchImg";

import './card.css'

export function CardCompleted() {
    const [loading, setLoading] = useState(false);
    const [fact, setFact] = useState(""); 
    const [catImage, setCatImage] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            // Simular un retraso de 2 segundos (2000 milisegundos)
            const delay = 2000;
            
            // Retraso antes de realizar la solicitud fetch
            setTimeout(async () => {
                const data = await fetchCatFact();
                setFact(data.fact);
                const imageUrl = await fetchCatImage(data.fact);
                setCatImage(imageUrl);
                setLoading(false);
            }, delay);
        } catch (error) {
            console.error('Error al obtener los datos:', error);
            setLoading(false);
        }
    };
    
    useEffect(() => {
        fetchData();
    }, []);

    const randomFact = () => {
        fetchData(); 
    };

    if(loading){
        return (
         <Loader/> 
        )
    }

    return (
        <div>
            <section>
                <div>
                <Title/>

                    <p>{fact}</p>
                </div>
                <img src={catImage} alt="" />
            </section>
            <Button onClick={randomFact} title={"Another fact"}/>
        </div>
    );
}
