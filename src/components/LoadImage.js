/* import React, { useState, useEffect } from 'react';
import './App.css';
function App() {
  const [img, setImg] = useState('');
  const [res, setRes] = useState([]);
  const Access_Key = 'Your ACCESS KEY';  //이 부분은 여러분의 액세스키 값으로 바꿔야함.
  const url = `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${Access_Key}&orientation=landscape&per_page=20`;
  const fetchRequest = async () => {
    const response = await fetch(url);
    const responseJson = await response.json();
    const result = responseJson.results;
    console.log(result);
    setRes(result);
  };
  useEffect(() => {
    fetchRequest();
  }, []);
  const submit = () => {
    fetchRequest();
    setImg('');
  };
  return (
    <div>
      <div>
        <div className="search">
          <input
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            placeholder="Searching Anything..."
          />
          <button type="submit" onClick={submit}>
            Search
          </button>
        </div>
        <div className="imgContainer">
          {res.map((val) => {
            return (
              <img
                key={val.id}
                src={val.urls.thumb}
                alt={val.alt_description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default App; */