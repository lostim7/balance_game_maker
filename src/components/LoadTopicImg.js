import { useEffect, useState } from "react";

/* function LoadTopicImg() {
    const [topic, setTopic] = useState('');
    const [img, setImg] = useState([]);
    const access_Key = process.env.REACT_APP_API_KEY;  //API 키값(.env)
    const url = `https://api.unsplash.com/search/photos?page=1&query=${topic}&client_id=${access_Key}&orientation=landscape&per_page=2`
    const getImg = async () => {
        const json = await (
            await fetch(`${url}`)
    ).json();
    setImg(json.data.img);
    };
    useEffect(() => {
        getImg();
    })
    useEffect(() => {
    fetch(`${url}`)
        .then((Response) => Response.json())
        .then((json) => {
            setImg(json);
        })
    })
    console.log(img)
    return (
        <div>
            <ul>
                {img.map((img) => (
                    <img src={img.urls.regular} />
                ))}
            </ul>
        </div>
    )
} */

function LoadTopicImg() {
    const [loading, setLoading] = useState(true);
  const [imgs, setImgs] = useState([]);
  const access_Key = process.env.REACT_APP_API_KEY;  //API 키값(.env)
  const topic = "Potato"
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${topic}&client_id=${access_Key}&orientation=landscape&per_page=2`
      )
    ).json();
    setImgs(json.results);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {imgs.map((img) => (
            <button>
              <img src={img.urls.regular} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LoadTopicImg;