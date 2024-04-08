import { useState, useEffect } from "react";

export const Fetch = () => {
    const [facts, setFacts] = useState([]);

    useEffect(() => {
        const fetchFacts = async () => {
            try {
                const response = await fetch('https://catfact.ninja/fact');
                if (!response.ok) {
                    throw new Error('No se pudo obtener los datos');
                }
                const data = await response.json();
                console.log(data);
                setFacts([data]); // Añadir el objeto de datos a la matriz
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };

        fetchFacts();

        // Clean-up: Cancelamos la solicitud si el componente se desmonta antes de que se complete
        return () => {
            // Cancelar la solicitud si es necesario
        };
    }, []);

    return (
        <section>
            <div>
                {facts.map((fact, index) => (
                    <p key={index}>{fact.fact}</p>
                ))}
            </div>
        </section>
    );
};
