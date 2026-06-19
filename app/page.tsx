'use client';
import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { AgentCard } from '@/components/AgentCard';
import { ShooterGame } from '@/components/ShooterGame';
import { Terminal, Code, Cpu, Database, Globe, Layout as LayoutIcon } from 'lucide-react';

export default function ValorantPortfolio() {
  const [contactStatus, setContactStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [contactMessage, setContactMessage] = useState('');

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setContactStatus('sending');
    setContactMessage('');

    const form = event.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || 'Impossible d’envoyer le message');
      }

      setContactStatus('success');
      setContactMessage('Message envoyé avec succès !');
      form.reset();
    } catch (error) {
      console.error(error);
      setContactStatus('error');
      setContactMessage('Une erreur est survenue. Réessaie plus tard.');
    }
  };

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
              Etudiant en informantique à [...].
              Je suis passionné par le développement web et la création d'expériences utilisateur immersives.
              Amateur de jeu vidéo et de design, j'apporte une touche créative à chaque projet que j'entreprends.
              Je suis compétitif, motivé et toujours prêt à relever de nouveaux défis.
              Je cherche un stage ou une opportunité pour mettre mes compétences en pratique et contribuer à des projets innovants.

            </p>
            <div className="flex gap-4">
              <a
              href="/projects"
              className="bg-valorant-red text-valorant-white px-8 py-4 font-valorant tracking-widest uppercase hover:bg-white hover:text-valorant-black transition-all clip-path-valorant inline-flex items-center justify-center"
            >
              Voir les projets
            </a>
              <a
              href="/cv_antoine.pdf"
              download="cv_antoine.pdf"
              className="border border-valorant-gray px-8 py-4 font-valorant tracking-widest uppercase hover:bg-valorant-gray/20 transition-all inline-flex items-center justify-center"
            >
              Télécharger CV
            </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <AgentCard />
          </div>
        </div>
      </section>

      {/* Game Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <div className="w-[70%]">
              <ShooterGame tools={['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion']} />
            </div>
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
                <form onSubmit={handleContactSubmit} className="mt-6 space-y-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <input
                      name="name"
                      type="text"
                      placeholder="NOM_AGENT"
                      className="bg-valorant-dark border border-valorant-gray/30 p-3 flex-1 focus:border-valorant-red outline-none"
                      required
                    />
                    <input
                      name="email"
                      type="email"
                      placeholder="SECURE_EMAIL"
                      className="bg-valorant-dark border border-valorant-gray/30 p-3 flex-1 focus:border-valorant-red outline-none"
                      required
                    />
                  </div>
                  <textarea
                    name="message"
                    placeholder="MESSAGE_CONTENT"
                    rows={4}
                    className="w-full bg-valorant-dark border border-valorant-gray/30 p-3 focus:border-valorant-red outline-none"
                    required
                  />
                  <button type="submit" disabled={contactStatus === 'sending'} className="w-full bg-valorant-red py-4 uppercase font-valorant tracking-[0.2em] disabled:opacity-50 disabled:cursor-not-allowed">
                    {contactStatus === 'sending' ? 'Envoi...' : 'Envoyer la transmission'}
                  </button>
                </form>
                {contactStatus !== 'idle' && (
                  <p className={`mt-4 text-sm ${contactStatus === 'success' ? 'text-emerald-400' : 'text-red-400'}`}>
                    {contactMessage}
                  </p>
                )}
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