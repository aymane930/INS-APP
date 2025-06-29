import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart, MessageCircle, Sparkles, Quote, Smile, Gift, ThumbsUp } from 'lucide-react'

const Navigation = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', icon: Heart, label: 'Accueil' },
    { path: '/messages', icon: MessageCircle, label: 'Messages' },
    { path: '/pourquoi', icon: Sparkles, label: 'Pourquoi' },
    { path: '/citations', icon: Quote, label: 'Citations' },
    { path: '/humeur', icon: Smile, label: 'Humeur' },
    { path: '/surprise', icon: Gift, label: 'Surprise' },
    { path: '/merci', icon: ThumbsUp, label: 'Merci' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-3">
          <div className="flex justify-center space-x-2 md:space-x-4">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              
              return (
                <Link key={item.path} to={item.path}>
                  <motion.div
                    className={`relative p-2 md:p-3 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg' 
                        : 'text-pink-600 hover:bg-pink-100'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} className="md:hidden" />
                    <div className="hidden md:flex items-center space-x-2">
                      <Icon size={18} />
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                    
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-1 left-1/2 w-1 h-1 bg-white rounded-full"
                        layoutId="activeIndicator"
                        initial={false}
                        style={{ x: '-50%' }}
                      />
                    )}
                  </motion.div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation