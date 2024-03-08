import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import LandingScreen from './pages/LandingScreen'
import CharacterList from './pages/CharacterList'
import CharacterGenerator from './pages/CharacterGenerator'
import CharacterDetails from './pages/CharacterDetails'
import CharacterEdit from './pages/CharacterEdit'
import LostPage from './pages/LostPage'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ <LandingScreen /> } />
        <Route path="/character" element={ <CharacterList /> } />
        <Route path="/character/generator" element={ <CharacterGenerator /> } />
        <Route path="/character/detail" element={ <CharacterDetails /> } />
        <Route path="/character/edit" element={ <CharacterEdit /> } />
        <Route path="*" element={ <LostPage /> } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
