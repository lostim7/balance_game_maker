import { propTypes } from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";

function Topic({id, topic}) {
    return (
        <div id="topics">
            <Link to={`/play/${id}`}>{topic}</Link>
        </div>
    )
}

export default Topic;