import { Link } from "react-router-dom";
import Topic from "../components/Topic";

function Look() {
    const topiclist = [{id: 1, topic: 'Potato'}, {id: 2, topic: 'Tomato'}, {id: 3, topic: 'Pineapple Pizza'}, {id:4, topic: 'Mintchocolate Icecream'}]
    return(
        <div>
            {topiclist.map((topic) => (
                <Topic
                    id={topic.id}
                    topic={topic.topic}
                />
            ))}
        </div>
    )
}

export default Look;