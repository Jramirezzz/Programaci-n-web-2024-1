
export function FavoriteCard({ favorites }) {
  return (
    <div>
      <h1>Favoritos</h1>
      {favorites.map(({ id, title, imageUrl }) => (
        <div key={id}>
          <img src={imageUrl} alt={title} />
          <p>{title}</p>
        </div>
      ))}
    </div>
  );
}
