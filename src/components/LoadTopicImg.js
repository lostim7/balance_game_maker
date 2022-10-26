import axios from "axios";
import { useState } from "react";

function LoadTopicImg(topic) {
    const [topic, setTopic] = useState('');
    const [res, setRes] = useState([]);
    const access_Key = process.env.REACT_APP_API_KEY;  //API 키값(.env)
    const url = `https://api.unsplash.com/search/photos?page=1&query=${topic}&client_id=${access_Key}&orientation=landscape&per_page=2`
    axios.get(`${url}`).then((Response) =>
    console.log(Response))
    return (
        <div>
            {res.map}
        </div>
    )
}

export default LoadTopicImg;