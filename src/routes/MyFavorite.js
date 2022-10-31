function Favorites({ favorites }) {
  if (favorites.length === 0) {
    return <div>아직 저장한 이미지가 없습니다.</div>;
  }

  return (
    <ul className="favorites">
      {favorites.map((favimgs) => (
        <CatItem img={favimgs} key={favimgs} />
      ))}
    </ul>
  );
}