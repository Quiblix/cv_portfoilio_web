'use client';
import { motion } from 'framer-motion';
import { Shield, Target, Zap } from 'lucide-react';

export const AgentCard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative p-1 bg-valorant-red w-80 clip-path-valorant"
    >
      <div className="bg-valorant-black p-6 text-valorant-white">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter">Votre Nom</h2>
            <p className="text-valorant-red font-bold tracking-widest text-xs uppercase underline decoration-2">Développeur Fullstack</p>
          </div>
          <div className="border border-valorant-gray p-1 text-[10px]">RANK: PLATINUM</div>
        </div>
        
        <div className="aspect-square bg-valorant-dark mb-4 overflow-hidden border-b-4 border-valorant-red relative group">
          {/* Placeholder pour l'avatar */}
          <div className="absolute inset-0 bg-gradient-to-t from-valorant-black to-transparent opacity-60" />
          <div className="w-full h-full flex items-center justify-center text-valorant-gray group-hover:scale-110 transition-transform duration-500">
            [PHOTO/AVATAR]
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Zap size={18} className="text-valorant-red" />
            <div className="flex-1 bg-valorant-gray/20 h-2"><div className="bg-valorant-red h-full w-[85%]" /></div>
          </div>
          <div className="flex items-center gap-3">
            <Target size={18} className="text-valorant-red" />
            <div className="flex-1 bg-valorant-gray/20 h-2"><div className="bg-valorant-red h-full w-[90%]" /></div>
          </div>
          <div className="flex items-center gap-3">
            <Shield size={18} className="text-valorant-red" />
            <div className="flex-1 bg-valorant-gray/20 h-2"><div className="bg-valorant-red h-full w-[75%]" /></div>
          </div>
        </div>
        
        <p className="mt-6 text-sm italic text-valorant-gray border-l-2 border-valorant-red pl-2">
          "Le code est mon arme, le déploiement ma victoire."
        </p>
      </div>
    </motion.div>
  );
};