import { Link } from "react-router-dom";

function Home() {
    return (
      <main>
      <section>
        <div className="mainWrap">
          <div className="fadein main">
            <h1>밸런스 게임을 <span className="green">만들어</span>보세요!</h1><br></br>
              <div>
                <Link to="make" className="btn btn-secondary gobutton" role="button">만들러 가기</Link>
              </div>
          </div>
          <div className="fadein2 main">
            <h1>밸런스 게임을 <span className="blue">플레이</span>해보세요!</h1><br></br>
              <div>
                <Link to="look" className="btn btn-secondary gobutton" role="button">둘러보기</Link>
              </div>
          </div>
        </div>
      </section>
      </main>
    )
  }
  
  export default Home;