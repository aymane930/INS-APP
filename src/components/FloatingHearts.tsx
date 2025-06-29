import React from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const FloatingHearts = () => {
  const hearts = Array.from({ length: 8 }, (_, i) => i)

  // Safe access to window dimensions with fallbacks
  const getWindowWidth = () => typeof window !== 'undefined' ? window.innerWidth : 1024
  const getWindowHeight = () => typeof window !== 'undefined' ? window.innerHeight : 768

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart}
          className="absolute text-pink-300/30"
          initial={{
            x: Math.random() * getWindowWidth(),
            y: getWindowHeight() + 50,
            scale: Math.random() * 0.5 + 0.5,
            rotate: Math.random() * 360,
          }}
          animate={{
            y: -100,
            rotate: Math.random() * 360 + 360,
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        >
          <Heart size={24} fill="currentColor" />
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingHearts