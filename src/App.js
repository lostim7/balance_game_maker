import { BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./routes/Home";
import Make from "./routes/Make";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/make" element={<Make />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;