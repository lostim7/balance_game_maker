import Custom from "../components/Custom";
import Topic from "../components/Topic";
import { topiclist } from "../data/data";

function Look() {
    let custom = JSON.parse(localStorage.getItem("custom")) || [];
    return(
        <div className="main">
            {topiclist.map((topic) => (
                <Topic
                    id={topic.id}
                    topic={topic.topic}
                />
            ))}
            {custom.map((custom) => (
                <Topic
                    id={custom.id}
                    topic={custom.topic}
                />
            ))}
            <form id="customForm">
                <input type="text" name="custom" placeholder="새 주제 생성" onSubmit={Custom()}></input>
            </form>
        </div>
    )
}

export default Look;