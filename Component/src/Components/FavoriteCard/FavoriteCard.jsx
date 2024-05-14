import  propTypes  from 'prop-types';
import './FavoriteCard.css'

export function FavoriteCard({ favorites }) {
  return (
    <>
    <h1 className='title-favorite'>Favoritos</h1>
    <div className='big-container-favorite'>
      {favorites.map(({ id, title, imageUrl }) => (
        <div className="cards"key={id}>
          <img src={imageUrl} alt={title} />
          <p>{title}</p>
        </div>
      ))}
    </div>
    </>
  );
}

FavoriteCard.propTypes= {
  favorites: propTypes.string.isRequired
}


