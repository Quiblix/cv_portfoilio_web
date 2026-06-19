import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { Layout as LayoutIcon, Globe, Code, Database, ArrowLeft } from 'lucide-react';
import { ShooterGame } from '@/components/ShooterGame';
import { projects, findProject } from '@/projects/data';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = findProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-valorant-black min-h-screen text-valorant-white font-sans selection:bg-valorant-red selection:text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-valorant-red uppercase tracking-[0.4em] text-sm mb-2">Projet</p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter">{project.title}</h1>
            <p className="mt-4 max-w-2xl text-valorant-gray text-base leading-7">{project.description}</p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full border border-valorant-gray px-6 py-3 uppercase text-xs tracking-[0.25em] text-valorant-white hover:bg-valorant-red transition"
          >
            <ArrowLeft size={14} /> Retour
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div className="space-y-8">
            <div className="rounded-[32px] overflow-hidden bg-valorant-red/5 border border-valorant-red/20 h-[420px] relative">
              <Image src={project.image} alt={project.title} fill className="object-cover" />
            </div>

            <div className="bg-valorant-slate/30 border border-valorant-red/40 rounded-3xl p-8">
              <p className="text-xs uppercase tracking-[0.4em] text-valorant-red mb-3">Rôle</p>
              <h2 className="text-3xl font-black mb-4">{project.role}</h2>
              <p className="text-valorant-gray leading-7">{project.longDescription}</p>
            </div>

            <div className="bg-valorant-slate/20 border border-valorant-red/30 rounded-3xl p-8">
              <h3 className="text-xl font-black uppercase tracking-[0.2em] text-valorant-red mb-4">Mini-jeu</h3>
              <ShooterGame tools={project.tools} />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-valorant-slate/20 border border-valorant-red/30 rounded-3xl p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-valorant-red mb-4">Technologies</p>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="px-3 py-2 text-xs bg-valorant-black/40 border border-valorant-gray rounded-full">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-valorant-slate/20 border border-valorant-red/30 rounded-3xl p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-valorant-red mb-4">Repository</p>
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-valorant-white border border-valorant-gray rounded-full px-4 py-2 hover:bg-valorant-red transition"
              >
                <Code size={16} /> Voir sur GitHub
              </a>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
