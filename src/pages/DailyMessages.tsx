import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Heart, RefreshCw } from 'lucide-react'

const DailyMessages = () => {
  const [currentMessage, setCurrentMessage] = useState('')
  const [messageIndex, setMessageIndex] = useState(0)

  const messages = [
    "Bonjour ma belle Ines ! Que cette journée soit aussi radieuse que ton sourire 🌅",
    "Tu es la première pensée qui illumine mon réveil chaque matin ☀️",
    "Ton rire est la plus belle mélodie que mes oreilles puissent entendre 🎵",
    "Chaque jour à tes côtés est une nouvelle page d'un conte de fées 📖",
    "Tu es mon étoile qui guide tous mes pas vers le bonheur ⭐",
    "Tes yeux sont comme deux océans dans lesquels j'aime me perdre 🌊",
    "Tu transformes les moments ordinaires en souvenirs extraordinaires ✨",
    "Avec toi, même les lundis deviennent magiques ! 🪄",
    "Tu es ma dose quotidienne de bonheur et d'inspiration 💫",
    "Ton amour est le carburant qui fait battre mon cœur 💓",
    "Tu es plus précieuse que tous les trésors du monde 💎",
    "Chaque seconde avec toi vaut une éternité de bonheur ⏰",
    "Tu es ma définition personnelle du paradis sur terre 🏝️",
    "Ton sourire a le pouvoir de transformer ma journée entière 😊",
    "Tu es la réponse à toutes les prières que je n'osais formuler 🙏"
  ]

  useEffect(() => {
    const today = new Date()
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24))
    const index = dayOfYear % messages.length
    setMessageIndex(index)
    setCurrentMessage(messages[index])
  }, [])

  const getNewMessage = () => {
    const newIndex = (messageIndex + 1) % messages.length
    setMessageIndex(newIndex)
    setCurrentMessage(messages[newIndex])
  }

  const today = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen p-4 pt-24"
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <Heart size={60} className="mx-auto text-pink-500 mb-4 floating-heart" fill="currentColor" />
          <h1 className="text-4xl font-dancing font-bold gradient-text mb-2">
            Message du Jour
          </h1>
          <div className="flex items-center justify-center space-x-2 text-pink-600">
            <Calendar size={18} />
            <span className="capitalize">{today}</span>
          </div>
        </motion.div>

        <motion.div
          key={messageIndex}
          initial={{ opacity: 0, scale: 0.9, rotateX: -10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="glass-card p-8 mb-6"
        >
          <p className="text-xl md:text-2xl text-pink-800 leading-relaxed text-center font-light">
            {currentMessage}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <button
            onClick={getNewMessage}
            className="love-button"
          >
            <span className="flex items-center space-x-2">
              <RefreshCw size={18} />
              <span>Nouveau message d'amour</span>
            </span>
          </button>
          
          <p className="text-pink-600 text-sm mt-4">
            Un nouveau message t'attend chaque jour ! 💕
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {[
            { emoji: "🌅", text: "Chaque matin" },
            { emoji: "💝", text: "Avec amour" },
            { emoji: "✨", text: "Pour toi" }
          ].map((item, index) => (
            <div key={index} className="glass-card p-4 text-center">
              <div className="text-3xl mb-2">{item.emoji}</div>
              <p className="text-pink-700 font-medium">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default DailyMessages