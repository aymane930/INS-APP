import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Smile, Heart, Frown, Meh, Zap, Sun } from 'lucide-react'

const MoodCorner = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
  const [showMessage, setShowMessage] = useState(false)

  const moods = [
    {
      id: 'happy',
      icon: Smile,
      label: 'Heureuse',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-100',
      message: "Ton bonheur illumine ma journée ! Continue à rayonner comme le soleil que tu es. Ton sourire est contagieux et rend le monde plus beau. 🌞✨"
    },
    {
      id: 'love',
      icon: Heart,
      label: 'Amoureuse',
      color: 'text-pink-500',
      bgColor: 'bg-pink-100',
      message: "Mon cœur bat à l'unisson avec le tien ! Cet amour que nous partageons est le plus beau cadeau de la vie. Je t'aime plus que les mots ne peuvent l'exprimer. 💕💖"
    },
    {
      id: 'sad',
      icon: Frown,
      label: 'Triste',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100',
      message: "Ma chérie, les nuages passent mais le soleil revient toujours. Je suis là pour toi, dans les bons comme dans les mauvais moments. Tu es plus forte que tu ne le penses. 🤗💙"
    },
    {
      id: 'neutral',
      icon: Meh,
      label: 'Neutre',
      color: 'text-gray-500',
      bgColor: 'bg-gray-100',
      message: "Parfois, c'est normal de se sentir comme ça. Que dirais-tu d'une petite surprise pour égayer ta journée ? Tu mérites tous les bonheurs du monde ! 🌈"
    },
    {
      id: 'excited',
      icon: Zap,
      label: 'Excitée',
      color: 'text-orange-500',
      bgColor: 'bg-orange-100',
      message: "Ton énergie est électrisante ! J'adore te voir si enthousiaste. Cette passion pour la vie est l'une des choses que j'aime le plus chez toi ! ⚡🎉"
    },
    {
      id: 'peaceful',
      icon: Sun,
      label: 'Sereine',
      color: 'text-green-500',
      bgColor: 'bg-green-100',
      message: "Ta sérénité est apaisante. Tu dégages une paix intérieure qui me rassure et m'inspire. Continue à cultiver cette belle harmonie ! 🧘‍♀️🌿"
    }
  ]

  const handleMoodSelect = (mood: any) => {
    setSelectedMood(mood.id)
    setShowMessage(true)
  }

  const resetMood = () => {
    setSelectedMood(null)
    setShowMessage(false)
  }

  const selectedMoodData = moods.find(mood => mood.id === selectedMood)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen p-4 pt-24"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <Smile size={60} className="mx-auto text-pink-500 mb-4 floating-heart" />
          <h1 className="text-4xl font-dancing font-bold gradient-text mb-4">
            Coin Humeur
          </h1>
          <p className="text-pink-700 text-lg">
            Comment te sens-tu aujourd'hui, ma belle ?
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!showMessage ? (
            <motion.div
              key="mood-selection"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8"
            >
              {moods.map((mood, index) => {
                const Icon = mood.icon
                return (
                  <motion.button
                    key={mood.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleMoodSelect(mood)}
                    className={`glass-card p-6 text-center hover:shadow-xl transition-all duration-300 ${mood.bgColor} hover:scale-105`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={48} className={`mx-auto mb-3 ${mood.color}`} />
                    <p className="font-medium text-gray-700">{mood.label}</p>
                  </motion.button>
                )
              })}
            </motion.div>
          ) : (
            <motion.div
              key="mood-message"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass-card p-8 text-center mb-8"
            >
              {selectedMoodData && (
                <>
                  <selectedMoodData.icon 
                    size={80} 
                    className={`mx-auto mb-6 ${selectedMoodData.color} floating-heart`} 
                  />
                  <h2 className="text-2xl font-dancing font-bold text-pink-800 mb-4">
                    Tu te sens {selectedMoodData.label.toLowerCase()}
                  </h2>
                  <p className="text-lg text-pink-700 leading-relaxed mb-6">
                    {selectedMoodData.message}
                  </p>
                  <button
                    onClick={resetMood}
                    className="love-button"
                  >
                    Choisir une autre humeur
                  </button>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="glass-card p-6 text-center"
        >
          <Heart size={30} className="mx-auto text-pink-500 mb-3" fill="currentColor" />
          <p className="text-pink-700 font-light">
            Peu importe ton humeur, tu es toujours parfaite à mes yeux. 
            Je suis là pour partager tous tes moments, les beaux comme les moins beaux.
          </p>
          <div className="mt-4 flex justify-center space-x-2">
            {[...Array(3)].map((_, i) => (
              <Heart key={i} size={16} className="text-pink-400" fill="currentColor" />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default MoodCorner