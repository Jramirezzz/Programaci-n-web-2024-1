import { useState, useEffect } from 'react';
import { FavoriteCard, NavigationBar} from '../../Components/index';


export function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(window.localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <div>
      <NavigationBar />
      
      <FavoriteCard searchInput="tu_input_de_busqueda" favorites={favorites} />
    </div>
  );
}

