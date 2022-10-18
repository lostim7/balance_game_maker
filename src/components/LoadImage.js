import React, { useState, useEffect } from 'react';
function LoadImage() {
  const [img, setImg] = useState('');
  const [res, setRes] = useState([]);
  const access_Key = process.env.REACT_APP_API_KEY;  //이 부분은 여러분의 액세스키 값으로 바꿔야함.

  console.log("access key" , access_Key, process.env.REACT_APP_API_KEY)
  const url = `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${access_Key}&orientation=landscape&per_page=10`;
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
        
        <div className="imgContainer">
          {res && res.map((val) => {
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
export default LoadImage;