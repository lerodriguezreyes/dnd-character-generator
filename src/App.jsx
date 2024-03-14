import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import LandingScreen from "./pages/LandingScreen";
import CharacterList from "./pages/CharacterList";
import CharacterGenerator from "./pages/CharacterGenerator";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";
import CharacterEdit from "./pages/CharacterEdit";
import LostPage from "./pages/LostPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/character" element={<CharacterList />} />
        <Route path="/generator" element={<CharacterGenerator />} />
        <Route path="/detail/:characterId" element={<CharacterDetailsPage />} />
        <Route path="/edit/:foundId" element={<CharacterEdit />} />
        <Route path="*" element={<LostPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
