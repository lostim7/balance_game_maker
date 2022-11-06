import { Link } from "react-router-dom";

function Result() {
    return (
        <section>
        <div>저장되었습니다.</div>
        <div>
        <Link to="/" className="btn btn-secondary" role="button">돌아가기</Link>
        <Link to="/mypage" className="btn btn-secondary" role="button">확인하기</Link>
        </div>
        </section>
    )
}

export default Result;