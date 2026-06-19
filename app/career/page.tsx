'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const timeline = [
  {
    date: 'Octobre 2022',
    title: 'Stage Data',
    duration: '3 jours',
    company: 'Carrefour Administratif France',
    description: 'Stage de découverte en analyse de données',
    icon: <Briefcase size={24} />,
    type: 'stage',
  },
  {
    date: 'Décembre 2024',
    title: 'Stage Data',
    duration: '1 semaine',
    company: 'Carrefour Administratif France',
    description: 'Stage en data engineering et analyse',
    icon: <Briefcase size={24} />,
    type: 'stage',
  },
  {
    date: '2025 - 2028',
    title: 'Lycée Dumont Durville',
    duration: '3 ans',
    company: 'La Place',
    description: 'Scolarité secondaire - Preparation baccalauréat',
    icon: <GraduationCap size={24} />,
    type: 'education',
  },
  {
    date: 'Juin 2026',
    title: 'Stage Data',
    duration: '2 semaines',
    company: 'Carrefour Administratif France',
    description: 'Stage approfondi en data et business intelligence',
    icon: <Briefcase size={24} />,
    type: 'stage',
  },
];

export default function CareerPage() {
  return (
    <main className="bg-valorant-black min-h-screen text-valorant-white font-sans selection:bg-valorant-red selection:text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-valorant-red uppercase tracking-[0.4em] text-sm mb-2">Parcours professionnel</p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter">Ma carrière</h1>
            <p className="mt-4 max-w-2xl text-valorant-gray text-base leading-7">
              Retrouvez ici mon parcours étudiant et mes expériences professionnelles à travers une frise chronologique détaillée.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-valorant-gray px-6 py-3 uppercase text-xs tracking-[0.25em] text-valorant-white hover:bg-valorant-red transition"
          >
            Revenir à l'accueil
          </Link>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-valorant-red via-valorant-red/50 to-transparent transform md:-translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-12 relative">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row gap-8 md:gap-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="flex-1 md:w-1/2 pl-12 md:pl-0">
                  <motion.div
                    className="border border-valorant-red/40 p-6 rounded-lg bg-valorant-slate/30 backdrop-blur-sm hover:border-valorant-red/60 transition-colors"
                    whileHover={{ y: -4 }}
                  >
                    {/* Type badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-2 py-1 text-xs uppercase tracking-wider font-black rounded ${
                        item.type === 'stage'
                          ? 'bg-valorant-red/20 text-valorant-red'
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {item.type === 'stage' ? 'Stage' : 'Formation'}
                      </span>
                      <span className="text-xs text-valorant-gray">{item.duration}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-black mb-2">{item.title}</h3>

                    {/* Company */}
                    <div className="flex items-center gap-2 text-valorant-red mb-2">
                      <MapPin size={16} />
                      <p className="text-sm">{item.company}</p>
                    </div>

                    {/* Description */}
                    <p className="text-valorant-gray text-sm leading-6">{item.description}</p>
                  </motion.div>
                </div>

                {/* Center dot and date */}
                <div className="md:w-1/2 flex flex-col items-center justify-center">
                  {/* Dot */}
                  <motion.div
                    className="absolute left-0 md:left-1/2 w-6 h-6 md:w-8 md:h-8 bg-valorant-black border-4 border-valorant-red rounded-full transform md:-translate-x-1/2 cursor-pointer hover:scale-125 transition-transform"
                    whileHover={{ scale: 1.3 }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="absolute inset-1 bg-valorant-red rounded-full animate-pulse" />
                    </div>
                  </motion.div>

                  {/* Date - visible only on desktop or when needed */}
                  <div className="hidden md:flex flex-col items-center">
                    <div className="text-center">
                      <p className="text-xs text-valorant-gray uppercase tracking-widest mb-1">Période</p>
                      <p className="text-lg font-black text-valorant-red">{item.date}</p>
                    </div>
                  </div>
                </div>

                {/* Date for mobile */}
                <div className="md:hidden absolute -left-8 top-0 flex items-center">
                  <p className="text-xs font-black text-valorant-red uppercase tracking-wider">{item.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <motion.div
          className="mt-20 grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Stages', value: '3', icon: <Briefcase /> },
            { label: 'Formation', value: '1', icon: <GraduationCap /> },
            { label: 'Années', value: '4+', icon: <Calendar /> },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="border border-valorant-red/40 p-6 rounded-lg bg-valorant-slate/30 text-center"
              whileHover={{ y: -4 }}
            >
              <div className="flex justify-center mb-3 text-valorant-red">{stat.icon}</div>
              <p className="text-3xl font-black mb-2">{stat.value}</p>
              <p className="text-valorant-gray text-sm uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
