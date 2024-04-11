import { useEffect,useState } from "react";
import { Button } from "../button/button";
import { fetchCatFact } from "../data/fetcFact";
import { fetchCatImage } from "../data/fetchImg";

import './card.css'

export function CardCompleted(){
    const [loading, setLoading] = useState(true);
    const [Fact, setFact] = useState([]); //""
    const [catImage, setCatImage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchCatFact();
                setFact(data.fact);
                setLoading(false);
                const imageUrl = await fetchCatImage(data.fact);
                setCatImage(imageUrl);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };

        fetchData();

        // Clean-up: Cancelar la solicitud si el componente se desmonta antes de que se complete
        return () => {
            // Cancelar la solicitud si es necesario
        };
    }, []);


    const randomFact = async () => {
        setLoading(true);
        await fetchData();
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
                    <p>{Fact}</p>
                </div>
                <img src={catImage} alt="" />
            </section>
            <Button onClick={randomFact} title={"Another fact"}/>
        </div>
    );
}
