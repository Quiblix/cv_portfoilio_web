"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '@/projects/data';

export default function ProjectsPage() {
  return (
    <main className="bg-valorant-black min-h-screen text-valorant-white font-sans selection:bg-valorant-red selection:text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-valorant-red uppercase tracking-[0.4em] text-sm mb-2">Sélection d’agents</p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter">Mes projets comme des agents Valorant</h1>
            <p className="mt-4 max-w-2xl text-valorant-gray text-base leading-7">
              Découvrez chaque projet sous la forme d’un agent tactique, avec des compétences métiers, des objectifs et une identité visuelle forte.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-valorant-gray px-6 py-3 uppercase text-xs tracking-[0.25em] text-valorant-white hover:bg-valorant-red transition"
          >
            Revenir à l’accueil
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="border border-valorant-red/40 p-8 rounded-[28px] bg-valorant-slate/30 backdrop-blur-sm cursor-pointer hover:border-valorant-red hover:bg-valorant-red/10 transition"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-valorant-red/10">
                    {project.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-valorant-red">{project.role}</p>
                    <h2 className="text-2xl font-black mt-2">{project.title}</h2>
                  </div>
                </div>
                <p className="text-valorant-gray leading-7">{project.description}</p>
                <div className="mt-8 inline-flex items-center gap-2 uppercase tracking-[0.3em] text-xs text-valorant-red">
                  Voir la page projet
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
