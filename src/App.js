import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

function App() {
  return (
    <Router>

    <div className="App">
      <Nav/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
