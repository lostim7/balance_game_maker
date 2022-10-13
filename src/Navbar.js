import { Link } from "react-router-dom"

function Navbar() {
    return <nav className="navbar navbar-expand-lg bg-light">
    <div id="navbar" className="container-fluid">
      <Link to="/" className="navbar-brand">밸런스 게임 메이커</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">홈</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">찾아보기</a>
          </li>
          <li className="nav-item">
            <Link to="make" className="nav-link">만들기</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">마이 페이지</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="검색하기" aria-label="Search"/>
          <button className="korHorizon btn btn-outline-success" type="submit">검색</button>
        </form>
      </div>
    </div>
  </nav>
}

export default Navbar