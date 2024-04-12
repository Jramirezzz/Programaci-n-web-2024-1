import { useEffect, useState } from "react";
import { Button,Loader,Title,fetchCatFact,getCatImage,Errors} from "../index";
import './card.css'

export function CardCompleted() {
    const [loading, setLoading] = useState(false);
    const [fact, setFact] = useState(""); 
    const [catImage, setCatImage] = useState(null);
    const [Error, setError] = useState(null)

    const fetchData = async () => {
        setLoading(true);
        try {
                const data = await fetchCatFact();
                setFact(data.fact);
                const imageUrl = await getCatImage(data.fact);
                setCatImage(imageUrl);
                setLoading(false);
        } catch (error) {
            console.error('Error al obtener los datos:', error);
            setError(error)
            setLoading(false)
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
    if(Error){
        return(
            <Errors/>
        )
    }

    return (
        <div className="big-div">
            <section>
                <div className="mid-div">
                <Title/>
                <p className="text">{fact}</p>
                </div>
            <img src={catImage} className="image" alt="" />
            </section>
            <Button onClick={randomFact} title={"Another fact"}/>
        </div>
    );
}
