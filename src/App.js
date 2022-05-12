import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage, ArchivePage, LandingPage, TrashPage, ProfilePage } from "./pages";



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
