import { Link } from "react-router-dom";

function Home() {
    return (
      <section>
        <div className="main">
          <h1>밸런스 게임을 <span className="green">만들어</span>보세요!</h1><br></br>
            <div>
              <Link to="make" className="btn btn-secondary gobutton" role="button">만들러 가기</Link>
            </div>
        </div>
        <div className="main">
          <h1>밸런스 게임을 <span className="blue">플레이</span>해보세요!</h1><br></br>
            <div>
              <Link to="look" className="btn btn-secondary gobutton" role="button">둘러보기</Link>
            </div>
        </div>
      </section>
    )
  }
  
  export default Home;