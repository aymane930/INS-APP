import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Star, Sparkles, ThumbsUp } from 'lucide-react'

const ThankYou = () => {
  const gratitudeItems = [
    {
      icon: Heart,
      title: "Pour ton amour inconditionnel",
      description: "Tu m'aimes pour qui je suis vraiment, avec mes qualités et mes défauts. Cet amour pur et sincère est le plus beau cadeau que tu puisses m'offrir.",
      color: "text-pink-500"
    },
    {
      icon: Star,
      title: "Pour ta présence réconfortante",
      description: "Dans les moments difficiles comme dans les moments de joie, tu es toujours là. Ta présence à mes côtés me donne la force d'affronter n'importe quoi.",
      color: "text-yellow-500"
    },
    {
      icon: Sparkles,
      title: "Pour ta façon de voir la beauté",
      description: "Tu me fais découvrir la magie dans les petites choses du quotidien. Grâce à toi, je vois le monde avec des yeux émerveillés.",
      color: "text-purple-500"
    },
    {
      icon: ThumbsUp,
      title: "Pour ton soutien indéfectible",
      description: "Tu crois en moi même quand je doute de moi-même. Ton soutien me pousse à devenir la meilleure version de moi-même chaque jour.",
      color: "text-blue-500"
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
          <ThumbsUp size={60} className="mx-auto text-pink-500 mb-4 floating-heart" />
          <h1 className="text-4xl font-dancing font-bold gradient-text mb-4">
            Merci, ma chérie
          </h1>
          <p className="text-pink-700 text-lg">
            Ma gratitude infinie pour tout ce que tu apportes dans ma vie
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-8 mb-8 text-center"
        >
          <Heart size={50} className="mx-auto text-pink-500 mb-6 floating-heart" fill="currentColor" />
          <h2 className="text-3xl font-dancing font-bold text-pink-800 mb-6">
            Ines, tu es un cadeau du ciel
          </h2>
          <p className="text-xl text-pink-700 leading-relaxed font-light italic">
            "Chaque jour passé à tes côtés est une bénédiction. Tu as transformé ma vie 
            en quelque chose de plus beau, de plus riche, de plus meaningful. 
            Cette application n'est qu'une petite façon de te dire MERCI pour tout ce que tu es."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {gratitudeItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="glass-card p-6"
              >
                <Icon size={40} className={`${item.color} mb-4`} />
                <h3 className="text-xl font-semibold text-pink-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-pink-700 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="glass-card p-8 text-center mb-8"
        >
          <div className="flex justify-center space-x-4 mb-6">
            <Heart size={30} className="text-pink-500" fill="currentColor" />
            <Star size={30} className="text-yellow-500" fill="currentColor" />
            <Sparkles size={30} className="text-purple-500" />
          </div>
          <h3 className="text-2xl font-dancing font-bold text-pink-800 mb-4">
            Mes promesses pour toi
          </h3>
          <div className="space-y-3 text-pink-700">
            <p>💕 Je promets de t'aimer chaque jour un peu plus</p>
            <p>🌟 Je promets d'être ton soutien dans tous tes projets</p>
            <p>🤗 Je promets d'être là dans les bons comme les mauvais moments</p>
            <p>✨ Je promets de continuer à te faire sourire</p>
            <p>💖 Je promets de chérir chaque instant passé avec toi</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
          className="glass-card p-8 text-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Heart size={60} className="mx-auto text-pink-500 mb-4" fill="currentColor" />
          </motion.div>
          <h2 className="text-3xl font-dancing font-bold gradient-text mb-4">
            Je t'aime, Ines 💖
          </h2>
          <p className="text-lg text-pink-700 font-light">
            Merci d'être la femme extraordinaire que tu es.<br />
            Merci d'illuminer ma vie de ton amour.<br />
            Merci d'être... toi. ✨
          </p>
          
          <div className="mt-6 flex justify-center space-x-2">
            {[...Array(7)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              >
                <Heart size={20} className="text-pink-400" fill="currentColor" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ThankYou