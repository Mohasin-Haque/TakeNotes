import "./App.css";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { ArchivePage } from "./pages/ArchivePage/ArchivePage";
import { TrashPage } from "./pages/TrashPage/TrashPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/archive" element={<ArchivePage />} />
      <Route path="/trash" element={<TrashPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
