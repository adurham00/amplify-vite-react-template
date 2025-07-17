// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/about";
import Resume from "./pages/resume";
import Gallery from "./pages/gallery";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
      <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
