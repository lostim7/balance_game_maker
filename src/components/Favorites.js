function Favorites({ favorites }) {
    return (
      <ul className="favorites">
        {favorites.map((cat) => (
          <CatItem img={cat} key={cat} />
        ))}
      </ul>
    );
  }

  export default Favorites;