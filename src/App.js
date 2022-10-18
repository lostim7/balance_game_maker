import { BrowserRouter, Route, Routes} from "react-router-dom";
import LoadImage from "./components/LoadImage";
import Navbar from "./Navbar";
import Home from "./routes/Home";
import Look from "./routes/Look";
import Make from "./routes/Make";
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
          <Route path="/test" element={<LoadImage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;