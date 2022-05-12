import "./App.css";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      {/* <Route path="/archive" element={<ArchivePage />} />
      <Route path="/trash" element={<TrashPage />} /> */}
    </Routes>
  );
}

export default App;
