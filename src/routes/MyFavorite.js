function MyFavorites() {
  const favlist = JSON.parse(localStorage.getItem("favlist")) || [];
     if(favlist) {
        return <div>
            {favlist.map((url) => (
                  <img className="favimgs" src={url} />
            ))}
          </div>
     } else {
        return <div>아직 저장한 이미지가 없습니다.</div>;
    }
    return
  }

export default MyFavorites;