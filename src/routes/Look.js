import { Link } from "react-router-dom";
import Send from "../components/Send";
import Topic from "../components/Topic";
import { topiclist } from "../data/data";

function Look() {
    
    Send(topiclist, 'topics')
    return(
        <div className="main">
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