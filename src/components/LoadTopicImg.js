/* import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { topiclist } from "../data/data";
import Favorites from "./Favorites";

function LoadTopicImg() {
  const { id } = useParams();
  console.log(id)
  const [loading, setLoading] = useState(true);
  const [imgs, setImgs] = useState([]);
  const access_Key = process.env.REACT_APP_API_KEY;  //API 키값(.env)
  const topic = topiclist[id].topic
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
  
  console.log(favlist)
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {imgs.map((img) => (
            <div key={img.id} >
              <Link to="/result">
                <button onClick={() => Favorites(img.urls.regular)}>
                  <img src={img.urls.regular} />
                </button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LoadTopicImg; */