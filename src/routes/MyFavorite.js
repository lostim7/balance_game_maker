import DeleteFav from "../components/DeleteFav";

function MyFavorites() {
  const favlist = JSON.parse(localStorage.getItem("favlist")) || [];
     if(favlist == '') {
        return <div>아직 저장한 이미지가 없습니다.</div>;
     } else {
            return <div>
            {favlist.map((url) => (
              <div className="Wrap">
                  <img className="favimgs" src={url} />
                  <button className="DelButton" onClick={() => DeleteFav(url)}>✖️</button>
              </div>
            ))}
          </div>
    }
    return
  }

export default MyFavorites;