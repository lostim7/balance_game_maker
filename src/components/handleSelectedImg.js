import React, { useState, useEffect } from 'react';
import Favorites from "./Favorites";

function HandleSelectImg(key) {
  const jsonLocalStorage = {
    setItem: (key, value) => {
      localStorage.setItem(key, JSON.stringify(value));
    },
    getItem: (key) => {
      return JSON.parse(localStorage.getItem(key));
    },
  };
  const addFavKey = key
  const [favlist, setFavlist] = useState(() => {
    return jsonLocalStorage.getItem("favlist");
  });
  favlist.push(key);
  jsonLocalStorage.setItem("favlist", favlist)

  console.log(key)
  console.log(favlist);
  return(
    Favorites(addFavKey)
  )
}

export default HandleSelectImg;