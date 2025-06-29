import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Sparkles, ChevronRight } from 'lucide-react'

const WhyILoveYou = () => {
  const [selectedReason, setSelectedReason] = useState<number | null>(null)

  const reasons = [
    {
      title: "Ton sourire magique",
      description: "Quand tu souris, le monde entier s'illumine. Ton sourire a le pouvoir de transformer ma journée la plus sombre en un arc-en-ciel de bonheur.",
      emoji: "😊"
    },
    {
      title: "Ta gentillesse infinie",
      description: "Tu as un cœur d'or qui déborde de compassion. Ta façon de prendre soin des autres me montre chaque jour la beauté de ton âme.",
      emoji: "💝"
    },
    {
      title: "Ton intelligence brillante",
      description: "Nos conversations me passionnent. Tu as cette capacité unique de voir le monde sous des angles que je n'aurais jamais imaginés.",
      emoji: "🧠"
    },
    {
      title: "Ta force inspirante",
      description: "Tu fais face aux défis avec une grâce et une détermination qui m'impressionnent. Tu es ma source d'inspiration quotidienne.",
      emoji: "💪"
    },
    {
      title: "Ton rire contagieux",
      description: "Ton rire est comme une mélodie qui résonne dans mon cœur. Il a le don de chasser tous mes soucis en un instant.",
      emoji: "😂"
    },
    {
      title: "Ta présence apaisante",
      description: "Près de toi, je trouve la paix. Tu es mon havre de sérénité dans ce monde parfois chaotique.",
      emoji: "🕊️"
    },
    {
      title: "Tes petites attentions",
      description: "Ces petits gestes du quotidien qui montrent à quel point tu penses aux autres. Tu rends la vie plus belle par ta délicatesse.",
      emoji: "🌸"
    },
    {
      title: "Ta passion pour la vie",
      description: "Tu abordes chaque jour avec un enthousiasme qui me donne envie de croquer la vie à pleines dents à tes côtés.",
      emoji: "🔥"
    }
  ]

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
          <Sparkles size={60} className="mx-auto text-pink-500 mb-4 floating-heart" />
          <h1 className="text-4xl font-dancing font-bold gradient-text mb-4">
            Pourquoi je t'aime
          </h1>
          <p className="text-pink-700 text-lg">
            Mille et une raisons qui font battre mon cœur pour toi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card p-6 cursor-pointer transition-all duration-300 ${
                selectedReason === index ? 'ring-2 ring-pink-400' : 'hover:shadow-xl'
              }`}
              onClick={() => setSelectedReason(selectedReason === index ? null : index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{reason.emoji}</span>
                  <h3 className="text-lg font-semibold text-pink-800">
                    {reason.title}
                  </h3>
                </div>
                <ChevronRight 
                  size={20} 
                  className={`text-pink-500 transition-transform duration-300 ${
                    selectedReason === index ? 'rotate-90' : ''
                  }`} 
                />
              </div>
              
              <AnimatePresence>
                {selectedReason === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-pink-200"
                  >
                    <p className="text-pink-700 leading-relaxed">
                      {reason.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="glass-card p-8 text-center"
        >
          <Heart size={40} className="mx-auto text-pink-500 mb-4" fill="currentColor" />
          <p className="text-xl text-pink-800 font-light italic leading-relaxed">
            "Et ce ne sont là que quelques-unes des infinies raisons pour lesquelles 
            tu es la personne la plus extraordinaire que je connaisse. 
            Chaque jour, je découvre de nouvelles facettes de ta beauté intérieure."
          </p>
          <div className="mt-6 flex justify-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <Heart key={i} size={16} className="text-pink-400" fill="currentColor" />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default WhyILoveYou