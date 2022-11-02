import { BrowserRouter, Route, Routes} from "react-router-dom";
import LoadTopicImg from "./components/LoadTopicImg";
import Navbar from "./Navbar";
import Home from "./routes/Home";
import Look from "./routes/Look";
import Make from "./routes/Make";
import MyFavorites from "./routes/MyFavorite";
import Play from "./routes/Play";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/make" element={<Make />}></Route>
          <Route path="/look" element={<Look />}></Route>
          <Route path="/play/:id" element={<Play />}></Route>
          <Route path="mypage" element={<MyFavorites />}></Route>
          <Route path="/test" element={<LoadTopicImg />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;