import { useEffect, useState } from "react";
import { Button,Loader } from "../index";
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
            const data = await fetchCatFact();
            setFact(data.fact);
            const imageUrl = await fetchCatImage(data.fact);
            setCatImage(imageUrl);
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        } finally {
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
                    <p>{fact}</p>
                </div>
                <img src={catImage} alt="" />
            </section>
            <Button onClick={randomFact} title={"Another fact"}/>
        </div>
    );
}
