import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gift, Sparkles, Heart, Star, Zap } from 'lucide-react'

const SurpriseButton = () => {
  const [currentSurprise, setCurrentSurprise] = useState<string | null>(null)
  const [surpriseCount, setSurpriseCount] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)

  const surprises = [
    "Tu es plus belle que toutes les fleurs du printemps réunies 🌸",
    "Ton rire est ma mélodie préférée dans l'univers entier 🎵",
    "Tu illumines ma vie comme un feu d'artifice illumine le ciel 🎆",
    "Tes yeux brillent plus fort que toutes les étoiles 🌟",
    "Tu es mon trésor le plus précieux 💎",
    "Avec toi, chaque jour est une nouvelle aventure magique ✨",
    "Tu es la définition vivante de la perfection 👑",
    "Ton sourire peut guérir tous les maux du monde 😊",
    "Tu es ma source d'inspiration quotidienne 🎨",
    "Dans tes bras, j'ai trouvé mon paradis 🏝️",
    "Tu es plus douce que le miel et plus précieuse que l'or 🍯",
    "Ton cœur est le plus beau cadeau que la vie m'ait offert 💝",
    "Tu es ma boussole dans ce monde parfois chaotique 🧭",
    "Tes câlins sont ma potion magique contre tous les soucis 🤗",
    "Tu es la réponse à toutes mes prières 🙏",
    "Ton amour me donne des ailes pour voler vers mes rêves 🦋",
    "Tu es plus éblouissante que le soleil au lever du jour ☀️",
    "Avec toi, j'ai découvert ce que signifie vraiment être heureux 😄",
    "Tu es ma muse, mon inspiration, ma raison de sourire 🎭",
    "Ton intelligence me fascine autant que ta beauté 🧠"
  ]

  const compliments = [
    "Tu es extraordinaire !",
    "Tu es magnifique !",
    "Tu es incroyable !",
    "Tu es fantastique !",
    "Tu es merveilleuse !",
    "Tu es éblouissante !",
    "Tu es parfaite !",
    "Tu es unique !",
    "Tu es exceptionnelle !",
    "Tu es radieuse !"
  ]

  const getSurprise = () => {
    const randomSurprise = surprises[Math.floor(Math.random() * surprises.length)]
    setCurrentSurprise(randomSurprise)
    setSurpriseCount(prev => prev + 1)
    setShowConfetti(true)
    
    setTimeout(() => setShowConfetti(false), 2000)
  }

  const getRandomCompliment = () => {
    return compliments[Math.floor(Math.random() * compliments.length)]
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen p-4 pt-24 relative"
    >
      {/* Confetti Effect */}
      <AnimatePresence>
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: -10,
                  rotate: 0,
                  scale: 0
                }}
                animate={{
                  y: window.innerHeight + 10,
                  rotate: 360,
                  scale: 1
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
              >
                {i % 4 === 0 ? (
                  <Heart size={20} className="text-pink-500" fill="currentColor" />
                ) : i % 4 === 1 ? (
                  <Star size={20} className="text-yellow-500" fill="currentColor" />
                ) : i % 4 === 2 ? (
                  <Sparkles size={20} className="text-purple-500" />
                ) : (
                  <Zap size={20} className="text-blue-500" />
                )}
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <Gift size={60} className="mx-auto text-pink-500 mb-4 floating-heart" />
          <h1 className="text-4xl font-dancing font-bold gradient-text mb-4">
            Bouton Surprise
          </h1>
          <p className="text-pink-700 text-lg">
            Clique pour recevoir une surprise pleine d'amour !
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-8"
        >
          <motion.button
            onClick={getSurprise}
            className="relative bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 text-white px-12 py-6 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 20px 40px rgba(236, 72, 153, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={showConfetti ? { 
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0]
            } : {}}
          >
            <span className="flex items-center space-x-3">
              <Gift size={28} />
              <span>Surprise-moi ! ✨</span>
            </span>
            
            {/* Pulsing ring effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-pink-300"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 0, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.button>
        </motion.div>

        <AnimatePresence mode="wait">
          {currentSurprise && (
            <motion.div
              key={currentSurprise}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="glass-card p-8 mb-8 text-center"
            >
              <motion.div
                initial={{ rotate: -10 }}
                animate={{ rotate: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Sparkles size={50} className="mx-auto text-pink-500 mb-4" />
                <h2 className="text-2xl font-dancing font-bold text-pink-800 mb-4">
                  {getRandomCompliment()}
                </h2>
                <p className="text-lg text-pink-700 leading-relaxed">
                  {currentSurprise}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
        >
          <div className="glass-card p-4 text-center">
            <Heart size={30} className="mx-auto text-pink-500 mb-2" fill="currentColor" />
            <p className="text-pink-700 font-medium">Surprises découvertes</p>
            <p className="text-2xl font-bold text-pink-800">{surpriseCount}</p>
          </div>
          
          <div className="glass-card p-4 text-center">
            <Gift size={30} className="mx-auto text-purple-500 mb-2" />
            <p className="text-pink-700 font-medium">Messages d'amour</p>
            <p className="text-2xl font-bold text-pink-800">{surprises.length}</p>
          </div>
          
          <div className="glass-card p-4 text-center">
            <Sparkles size={30} className="mx-auto text-yellow-500 mb-2" />
            <p className="text-pink-700 font-medium">Magie infinie</p>
            <p className="text-2xl font-bold text-pink-800">∞</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="glass-card p-6 text-center"
        >
          <p className="text-pink-700 font-light mb-4">
            Chaque clic révèle un nouveau message d'amour créé spécialement pour toi ! 
            Il y en a des dizaines qui t'attendent...
          </p>
          <div className="flex justify-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              >
                <Heart size={16} className="text-pink-400" fill="currentColor" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default SurpriseButton