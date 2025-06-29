import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Quote, Heart, Shuffle } from 'lucide-react'

const RomanticQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0)

  const quotes = [
    {
      text: "Tu es mon soleil, ma lune et toutes mes étoiles.",
      author: "Pour Ines"
    },
    {
      text: "Dans tes yeux, j'ai trouvé mon foyer.",
      author: "Pour Ines"
    },
    {
      text: "L'amour, c'est être stupide ensemble.",
      author: "Pour Ines"
    },
    {
      text: "Tu es la poésie que mon cœur n'arrivait pas à écrire.",
      author: "Pour Ines"
    },
    {
      text: "Aimer, ce n'est pas se regarder l'un l'autre, c'est regarder ensemble dans la même direction.",
      author: "Pour Ines"
    },
    {
      text: "Avec toi, j'ai appris que l'amour n'était pas qu'un mot, mais un univers entier.",
      author: "Pour Ines"
    },
    {
      text: "Il n'y a qu'un bonheur dans la vie, c'est d'aimer et d'être aimé.",
      author: "Pour Ines"
    },
    {
      text: "Tu es ma plus belle histoire d'amour.",
      author: "Pour Ines"
    },
    {
      text: "L'amour est la seule chose qui grandit quand on la partage.",
      author: "Pour Ines"
    },
    {
      text: "Dans tes bras, j'ai trouvé ma place dans ce monde.",
      author: "Pour Ines"
    },
    {
      text: "Aimer, c'est trouver sa richesse hors de soi.",
      author: "Pour Ines"
    },
    {
      text: "Tu es la mélodie que mon cœur fredonne en silence.",
      author: "Pour Ines"
    }
  ]

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length)
  }

  const randomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setCurrentQuote(randomIndex)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextQuote()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen p-4 pt-24"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <Quote size={60} className="mx-auto text-pink-500 mb-4 floating-heart" />
          <h1 className="text-4xl font-dancing font-bold gradient-text mb-4">
            Citations Romantiques
          </h1>
          <p className="text-pink-700 text-lg">
            Des mots doux pour commencer ta journée avec amour
          </p>
        </motion.div>

        <motion.div
          key={currentQuote}
          initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="glass-card p-8 md:p-12 mb-8 text-center"
        >
          <Quote size={40} className="text-pink-400 mb-6 mx-auto" />
          <blockquote className="text-2xl md:text-3xl text-pink-800 font-light leading-relaxed mb-6 italic">
            "{quotes[currentQuote].text}"
          </blockquote>
          <cite className="text-pink-600 font-medium text-lg">
            — {quotes[currentQuote].author}
          </cite>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <button
            onClick={nextQuote}
            className="love-button"
          >
            <span className="flex items-center space-x-2">
              <Heart size={18} />
              <span>Citation suivante</span>
            </span>
          </button>
          
          <button
            onClick={randomQuote}
            className="bg-gradient-to-r from-rose-400 to-pink-400 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <span className="flex items-center space-x-2">
              <Shuffle size={18} />
              <span>Citation aléatoire</span>
            </span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="glass-card p-6 text-center"
        >
          <p className="text-pink-700 font-light">
            💕 Une nouvelle citation apparaît automatiquement toutes les 8 secondes 💕
          </p>
          <div className="mt-4 flex justify-center space-x-1">
            {quotes.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentQuote ? 'bg-pink-500' : 'bg-pink-200'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default RomanticQuotes