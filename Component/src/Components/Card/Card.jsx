import './Card.css'
import { useEffect,useState } from 'react'
import { fetchGif } from '../Service/fetchGif'
import { Loader } from '../Loader/Loader'
import { Error } from '../Error/Error'
import PropTypes from 'prop-types'


export function Card ({searchInput}) {
  const [loading, setLoading] = useState(false)
  const [gif, setGif] = useState([])
  const [error, setError] = useState()
  const [favorites, setFavorites] = useState([])


  useEffect(() => {
    const savedFavorites = JSON.parse(window.localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const AddFavorities = (title, imageUrl, id) => {
    const newFavorite = { id, title, imageUrl };
    const updatedFavorites = [...favorites, newFavorite];
    window.localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter(favorite => favorite.id !== id);
    window.localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };
  
  const fetchData = async (searchInput) => {
    try {
      setLoading(true)
     const data = await fetchGif(searchInput);
     setGif(data.data) 
    } catch (error) {
      console.error('Error al obtener datos ',error),
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchData(searchInput);
  },[searchInput])

  if(error){
    return(
      <Error/>
    )
  }
  if(loading){
    return(
      <Loader/>
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
                <button className='button-save' onClick={() => isCardFavorite ? removeFavorite(id) : AddFavorities(title, images.fixed_width_small.url, id)}>
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

Card.propTypes = {
  searchInput: PropTypes.string.isRequired
};