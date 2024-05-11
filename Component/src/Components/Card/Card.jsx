import './Card.css'
import { useEffect,useState } from 'react'
import { fetchGif } from '../Service/fetchGif'

export function Card ({searchInput}) {
  const [loading, setLoading] = useState(false)
  const [gif, setGif] = useState([])
  const [Error, setError] = useState()

  const fetchData = async () => {
    try {
     const data = await fetchGif();
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
  
  return (
   <>
   <div className='big-container'>
    
      {
        gif.map(({id,images,title})=>{
          return(
            <div className="card"key={id}>
              <img src={images.fixed_width_small.url} alt={title} />
              <p>{title}</p>
            </div>
          )
        })
      }
      
   </div>
   </>
  )
}