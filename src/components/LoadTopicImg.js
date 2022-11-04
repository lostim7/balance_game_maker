import { useEffect, useState } from "react";
import Favorites from "./Favorites";
import HandleSelectedImg from "./handleSelectedImg";
import jsonLocalStorage from "./jsonLocalStorage";

function LoadTopicImg() {
  const [loading, setLoading] = useState(true);
  const [imgs, setImgs] = useState([]);
  const access_Key = process.env.REACT_APP_API_KEY;  //API 키값(.env)
  const topic = "tomato"
  const getImgs = async () => {
    const json = await (
      await fetch(
        `https://api.unsplash.com/photos/random?query=${topic}&client_id=${access_Key}&orientation=landscape&count=2`
      )
    ).json();
    setImgs(json);
    setLoading(false);
  };
  useEffect(() => {
    getImgs();
  }, []);
  
/*   console.log(favlist) */
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {imgs.map((img) => (
            <div key={img.id} >
              <button onClick={() => Favorites(img.urls.regular)}>
                <img src={img.urls.regular} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LoadTopicImg;