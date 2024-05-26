import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import WineView from "./components/WineView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wine/:wineId" element={<WineView />} />
      </Routes>
    </Router>
  );
}

export default App;
