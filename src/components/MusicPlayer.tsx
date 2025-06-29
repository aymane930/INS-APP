import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Music, Music as MusicOff, Volume2 } from 'lucide-react'

interface MusicPlayerProps {
  isEnabled: boolean
  onToggle: () => void
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ isEnabled, onToggle }) => {
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      if (isEnabled) {
        audioRef.current.play().catch(() => {
          // Handle autoplay restrictions
        })
      } else {
        audioRef.current.pause()
      }
    }
  }, [isEnabled])

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        onClick={onToggle}
        className={`glass-card p-4 ${
          isEnabled ? 'text-pink-600' : 'text-gray-400'
        } hover:text-pink-500 transition-colors duration-300`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isEnabled ? <Volume2 size={24} /> : <MusicOff size={24} />}
        
        {isEnabled && (
          <div className="absolute -top-2 -right-2">
            <div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 bg-pink-500 rounded-full music-note"
                  animate={{
                    height: [4, 12, 4],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </motion.button>

      <audio
        ref={audioRef}
        loop
        preload="none"
      >
        <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" type="audio/wav" />
      </audio>
    </div>
  )
}

export default MusicPlayer