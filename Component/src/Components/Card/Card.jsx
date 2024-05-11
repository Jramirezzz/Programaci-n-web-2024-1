import './Card.css'
import { useEffect,useState } from 'react'
import { fetchGif } from '../Service/fetchGif'


export function Card ({searchInput}) {
  const [loading, setLoading] = useState(false)
  const [gif, setGif] = useState([])
  const [Error, setError] = useState(null)
  const [favorites, setFavorites] = useState([])

  const AddFavorities = (title, imageUrl, id) => {
    const newFavorite = { id, title, imageUrl };
    const updatedFavorites = [...favorites, newFavorite];
    window.localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };
  
  const fetchData = async () => {
    try {
     const data = await fetchGif(searchInput);
     setGif(data.data) 
    } catch (error) {
      console.error('Error al obtener datos ',error),
      setError(error)
    }
  }

  useEffect(()=>{
    fetchData(searchInput);
  },[searchInput])

  if(Error){
    return(
      <p>Error</p>
    )
  }
  if(loading){
    return(
      <p>Loading...</p>
    )
  }
  const isFavorite = (id) => {
    return favorites.some(favorite => favorite.id === id);
  };
  
  return (
   <>
   <div className='big-container'>
    
      {
        gif.map(({id,images,title})=>{
          const isCardFavorite = isFavorite(id);
          return(
            <div className="card"key={id}>
              <img src={images.fixed_width_small.url} alt={title} />
              <p>{title}</p>
              <button className='button-save' onClick={()=>AddFavorities(title,images.fixed_width_small.url,id)}>
              <img className="save-image" src={isCardFavorite ? "../src/assets/save-on.png":"../src/assets/save-off.png"}/>
              </button>
            </div>
          )
        })
      }
      
   </div>
   </>
  )
}
