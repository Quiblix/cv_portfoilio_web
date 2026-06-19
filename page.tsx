'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { AgentCard } from '@/components/AgentCard';
import { Terminal, Code, Cpu, Database, Globe, Layout as LayoutIcon } from 'lucide-react';

export default function ValorantPortfolio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full bg-valorant-black flex flex-col items-center justify-center">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-24 h-24 border-4 border-valorant-red flex items-center justify-center rotate-45"
        >
          <div className="w-12 h-12 bg-valorant-red" />
        </motion.div>
        <p className="mt-8 font-valorant tracking-[0.5em] text-valorant-red animate-pulse">CHARGEMENT DU PROFIL...</p>
      </div>
    );
  }

  return (
    <main className="bg-valorant-black min-h-screen text-valorant-white font-sans selection:bg-valorant-red selection:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="agents" className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-valorant-red/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.h1 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-6"
            >
              FRONTEND <br />
              <span className="text-valorant-red">AGENT</span>
            </motion.h1>
            <p className="max-w-md text-valorant-gray text-lg mb-8 border-l-4 border-valorant-red pl-6">
              Spécialiste en interfaces réactives et expériences utilisateurs immersives. 
              Basé en France, prêt pour le déploiement.
            </p>
            <div className="flex gap-4">
              <button className="bg-valorant-red text-valorant-white px-8 py-4 font-valorant tracking-widest uppercase hover:bg-white hover:text-valorant-black transition-all clip-path-valorant">
                Voir les projets
              </button>
              <button className="border border-valorant-gray px-8 py-4 font-valorant tracking-widest uppercase hover:bg-valorant-gray/20 transition-all">
                Télécharger CV
              </button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <AgentCard />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="carrière" className="py-20 bg-valorant-dark/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-valorant tracking-widest mb-12 flex items-center gap-4">
            <span className="w-12 h-1 bg-valorant-red" /> CAPACITÉS TECHNIQUES
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Frontend', icon: <LayoutIcon />, skills: ['React', 'Next.js', 'Tailwind', 'Framer Motion'], color: 'from-blue-500' },
              { title: 'Backend', icon: <Cpu />, skills: ['Node.js', 'Express', 'PostgreSQL', 'Prisma'], color: 'from-valorant-red' },
              { title: 'Outils', icon: <Database />, skills: ['Git', 'Docker', 'Vercel', 'Figma'], color: 'from-green-500' },
            ].map((cat, i) => (
              <motion.div 
                key={cat.title}
                whileHover={{ y: -10 }}
                className="bg-valorant-slate p-8 border-t-4 border-valorant-red clip-path-valorant group"
              >
                <div className="mb-6 text-valorant-red group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-valorant tracking-wider mb-4">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.skills.map(s => (
                    <li key={s} className="flex items-center gap-2 text-valorant-gray">
                      <div className="w-1.5 h-1.5 bg-valorant-red rotate-45" /> {s}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Terminal Section */}
      <section id="contact" className="py-20 max-w-4xl mx-auto px-6">
        <div className="bg-black border border-valorant-red/30 p-1">
          <div className="bg-valorant-black p-6">
            <div className="flex items-center gap-2 mb-4 border-b border-valorant-red/20 pb-2">
              <Terminal size={16} className="text-valorant-red" />
              <span className="text-xs font-mono text-valorant-red">SYSTEM_COMMUNICATION_LINK</span>
            </div>
            <div className="font-mono text-sm space-y-2">
              <p className="text-green-500">{'>'} INITIATING CONTACT PROTOCOL...</p>
              <p className="text-valorant-white opacity-70">Saisissez votre message pour établir la connexion avec l'agent.</p>
              <div className="mt-6 space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <input type="text" placeholder="NOM_AGENT" className="bg-valorant-dark border border-valorant-gray/30 p-3 flex-1 focus:border-valorant-red outline-none" />
                  <input type="email" placeholder="SECURE_EMAIL" className="bg-valorant-dark border border-valorant-gray/30 p-3 flex-1 focus:border-valorant-red outline-none" />
                </div>
                <textarea placeholder="MESSAGE_CONTENT" rows={4} className="w-full bg-valorant-dark border border-valorant-gray/30 p-3 focus:border-valorant-red outline-none" />
                <button className="w-full bg-valorant-red py-4 uppercase font-valorant tracking-[0.2em]">Envoyer la transmission</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-[10px] text-valorant-gray uppercase tracking-widest">
        © 2024 DESIGNED FOR TACTICAL EXCELLENCE | BUILT WITH NEXT.JS
      </footer>
    </main>
  );
}