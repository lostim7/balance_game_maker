import Topic from "../components/Topic";
import { topiclist } from "../data/data";

function Look() {
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