import type { Metadata } from 'next';
import { readFileSync } from 'fs';
import { join } from 'path';

export const metadata: Metadata = {
  title: 'Habitudes de travail | VLRNT_DEV',
  description: 'Page cachée des habitudes de travail pour le portfolio.',
};

const cards = [
  {
    title: 'Organisation',
    description:
      'Chaque journée commence avec des priorités claires, des listes de tâches et des checkpoints pour avancer pas à pas.',
    fileName: 'trello_plannification.html',
    highlight: 'Planifier, prioriser, livrer',
  },
  {
    title: 'Communication',
    description:
      'Je partage mes idées, mes avancements et je sollicite des retours réguliers pour ajuster rapidement le travail.',
    fileName: 'github_logo.html',
    highlight: 'Transparence et feedback',
  },
  {
    title: 'Outils de travail',
    description:
      'Je m’appuie sur des outils modernes pour organiser le travail, suivre les tâches et livrer des projets de qualité.',
    fileName: 'ia.html',
    highlight: 'Outils, gestion et productivité',
  },
  {
    title: 'Plus personnellement',
    description:
      'Je veille à rester motivé et équilibré en alignant mes habitudes de travail avec mes valeurs et ma progression personnelle.',
    fileName: 'personnel.html',
    highlight: 'Routine, énergie, bien-être',
  },
];

const loadedCards = cards.map((card) => ({
  ...card,
  svgHtml: readFileSync(join(process.cwd(), 'app', 'img', card.fileName), 'utf8'),
}));

export default function WorkHabitsPage() {
  return (
    <main className="bg-valorant-black min-h-screen text-valorant-white font-sans selection:bg-valorant-red selection:text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <section className="mb-12 text-center">
          <p className="text-valorant-red uppercase tracking-[0.4em] text-sm mb-4">En coulisse</p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Mes habitudes de travail</h1>
          <p className="mx-auto max-w-3xl text-valorant-gray leading-8">
            Découvrez les pratiques que j’applique au quotidien pour rester productif, rigoureux et concentré sur la qualité du travail.
          </p>
        </section>

        <div className="grid gap-8 lg:grid-cols-2">
          {loadedCards.map((card) => (
            <article key={card.title} className="group overflow-hidden rounded-[32px] border border-valorant-red/20 bg-valorant-slate/20 p-6 shadow-2xl shadow-valorant-red/10 transition-transform hover:-translate-y-1">
              <div className="relative h-56 overflow-hidden rounded-[28px] bg-valorant-dark/40 mb-6">
                <div
                  className="absolute inset-0 overflow-hidden"
                  dangerouslySetInnerHTML={{ __html: card.svgHtml }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-valorant-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-black/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-valorant-red">
                  {card.title}
                </span>
              </div>

              <div className="space-y-4">
                <p className="text-lg font-semibold text-white">{card.highlight}</p>
                <p className="text-valorant-gray leading-7">{card.description}</p>
                <ul className="space-y-2 text-sm text-valorant-gray/90">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 block h-2 w-2 rounded-full bg-valorant-red" /> Pratique concrète enregistrée dans mon workflow.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 block h-2 w-2 rounded-full bg-valorant-red" /> Application régulière sur projets, études et défis personnels.
                  </li>
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
