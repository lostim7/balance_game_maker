import { propTypes } from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";

function Topic({id, topic}) {
    return (
        <div id="topics">
            <Link className="topics" to={`/play/${id}`}>{topic}</Link>
        </div>
    )
}

export default Topic;