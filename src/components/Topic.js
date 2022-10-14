import { Link } from "react-router-dom";

function Topic({id, topic}) {
    return (
        <div>
            <Link to={`/play/${id}`}>{topic}</Link>
        </div>
    )
}

export default Topic;