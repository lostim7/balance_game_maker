import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoadTopicImg from "../components/LoadTopicImg";


function Play() {
    const location = useLocation();

    useEffect(() => {
        console.log(location);
    }, [ location ])

    return
    LoadTopicImg()
}   
export default Play;