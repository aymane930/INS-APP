import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import DailyMessages from './pages/DailyMessages'
import WhyILoveYou from './pages/WhyILoveYou'
import RomanticQuotes from './pages/RomanticQuotes'
import MoodCorner from './pages/MoodCorner'
import SurpriseButton from './pages/SurpriseButton'
import ThankYou from './pages/ThankYou'
import MusicPlayer from './components/MusicPlayer'
import FloatingHearts from './components/FloatingHearts'

function App() {
  const [musicEnabled, setMusicEnabled] = useState(false)

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingHearts />
      
      <div className="relative z-10">
        <Navigation />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/messages" element={<DailyMessages />} />
            <Route path="/pourquoi" element={<WhyILoveYou />} />
            <Route path="/citations" element={<RomanticQuotes />} />
            <Route path="/humeur" element={<MoodCorner />} />
            <Route path="/surprise" element={<SurpriseButton />} />
            <Route path="/merci" element={<ThankYou />} />
          </Routes>
        </AnimatePresence>
      </div>

      <MusicPlayer 
        isEnabled={musicEnabled} 
        onToggle={() => setMusicEnabled(!musicEnabled)} 
      />
    </div>
  )
}

export default App