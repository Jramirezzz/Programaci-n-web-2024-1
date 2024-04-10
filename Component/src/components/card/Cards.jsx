import { useEffect,useState } from "react";
import { Button } from "../button/button";

import './card.css'

export function CardCompleted(){
    const [loading, setLoading] = useState(true);
    const [Fact, setFact] = useState([]);
    const [catImage, setCatImage] = useState(null);

    useEffect(() => {
        const fetchFacts = async () => {
            try {
                const response = await fetch('https://catfact.ninja/fact');
                if (!response.ok) {
                    throw new Error('No se pudo obtener los datos');
                }
                const data = await response.json();
                console.log(data);
                setFact([data]);
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };

        fetchFacts();

        // Clean-up: Cancelar la solicitud si el componente se desmonta antes de que se complete
        return () => {
            // Cancelar la solicitud si es necesario
        };
    }, [loading]);

    useEffect(() => {
        if (Fact.length > 0) {
            const splitData = Fact[0].fact.split('').slice(0, 4).join('');
            const ImageFacts = async () => {
                try {
                    const response = await fetch('https://cataas.com/cat/says/' + splitData);
                    if (!response.ok) {
                        throw new Error('No se pudo obtener los datos');
                    }
                    const Img = await response.json();
                    console.log(Img);
                    setCatImage(Img);
                } catch (error) {
                    console.error('Error al obtener los datos:', error);
                }
            };

            ImageFacts();
        }
    }, [Fact]);

    const randomFact = () => {
        setLoading(true);
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
                    {Fact.map((fact, id) => (
                        <p key={id}>{fact.fact}</p>
                    ))}
                </div>
                <img src={catImage} alt="" />
            </section>
            <Button onClick={randomFact} title={"Another fact"}/>
        </div>
    );
}
