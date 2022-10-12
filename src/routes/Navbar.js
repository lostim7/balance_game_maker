function Navbar() {
    return <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">밸런스 게임 메이커</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">홈</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">찾아보기</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">만들기</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">마이 페이지</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="검색하기" aria-label="Search"/>
          <button class="asd btn btn-outline-success" type="submit">검색</button>
        </form>
      </div>
    </div>
  </nav>
}

export default Navbar