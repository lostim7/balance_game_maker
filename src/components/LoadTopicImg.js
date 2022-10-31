import { useEffect, useState } from "react";
import handleSelectedImg from "./handleSelectedImg";

function LoadTopicImg() {
  const [loading, setLoading] = useState(true);
  const [imgs, setImgs] = useState([]);
  const access_Key = process.env.REACT_APP_API_KEY;  //API 키값(.env)
  const topic = "mint-chocolate"
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
  console.log(imgs)
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {imgs.map((img) => (
            <div key={img.id} >
              <button onClick={handleSelectedImg(img.id)}>
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