import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Objectifs | VLRNT_DEV',
  description: 'Page des objectifs professionnels et personnels.',
};

export default function ObjectivesPage() {
  return (
    <main className="bg-valorant-black min-h-screen text-valorant-white font-sans selection:bg-valorant-red selection:text-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <section className="border border-valorant-red/30 bg-valorant-slate/20 p-10 rounded-[32px] shadow-2xl shadow-valorant-red/10">
          <p className="text-valorant-red uppercase tracking-[0.4em] text-sm mb-4">Objectifs</p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">Mes objectifs</h1>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">Objectifs de développement</h2>
              <ul className="space-y-4 text-valorant-gray leading-8">
                <li>
                  <strong className="text-white">Maîtriser React et Next.js :</strong> continuer à construire des interfaces performantes, accessibles et scalables.
                </li>
                <li>
                  <strong className="text-white">Améliorer mes compétences backend :</strong> apprendre davantage sur Node.js, les bases de données et l’architecture API.
                </li>
                <li>
                  <strong className="text-white">Optimiser la qualité du code :</strong> écrire des tests, renforcer les bonnes pratiques et automatiser les pipelines de déploiement.
                </li>
                <li>
                  <strong className="text-white">Contribuer à un projet d’équipe :</strong> travailler sur un produit réel en équipe, partager le code et apprendre du feedback.
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">Objectifs personnels</h2>
              <ul className="space-y-4 text-valorant-gray leading-8">
                <li>
                  <strong className="text-white">Développer ma discipline :</strong> garder des routines de travail saines et maintenir un bon équilibre entre études, projets et repos.
                </li>
                <li>
                  <strong className="text-white">Apprendre chaque semaine :</strong> lire des articles techniques, suivre des tutoriels et tester de nouvelles technologies.
                </li>
                <li>
                  <strong className="text-white">Créer un portfolio vivant :</strong> enrichir mon site avec de nouveaux projets, mes réussites et mes apprentissages.
                </li>
                <li>
                  <strong className="text-white">Rester curieux et motivé :</strong> explorer des idées créatives, m’inspirer du design et améliorer mes compétences UX.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
