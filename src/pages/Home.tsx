import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen flex items-center justify-center p-4 pt-24"
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <Heart size={80} className="mx-auto text-pink-500 floating-heart" fill="currentColor" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-dancing font-bold gradient-text mb-6"
        >
          Pour Ines 💖
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl text-pink-700 mb-8 font-light leading-relaxed"
        >
          Une application créée avec tout mon amour<br />
          pour la femme la plus merveilleuse du monde
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="space-y-4"
        >
          <Link to="/messages">
            <button className="love-button w-full md:w-auto">
              <span className="flex items-center justify-center space-x-2">
                <Sparkles size={20} />
                <span>Découvrir mes messages d'amour</span>
              </span>
            </button>
          </Link>
          
          <p className="text-pink-600 text-sm">
            Chaque jour avec toi est un cadeau précieux ✨
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 glass-card p-6"
        >
          <p className="text-pink-700 italic font-light">
            "Tu illumines ma vie comme le soleil illumine le monde.<br />
            Cette petite application est ma façon de te dire<br />
            à quel point tu comptes pour moi."
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Home