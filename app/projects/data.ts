export type ProjectIcon = 'layout' | 'database' | 'globe' | 'code';

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  role: string;
  image: string;
  tools: string[];
  repo: string;
  icon: ProjectIcon;
};

export const projects: Project[] = [
  {
    slug: 'operation-phoenix',
    title: 'Opération Phoenix',
    description: 'Site vitrine responsive avec effets animés et design moderne.',
    longDescription:
      "Opération Phoenix est un projet de site vitrine complet conçu pour présenter une marque avec une identité visuelle forte. Il contient une page d'accueil animée, des sections projets, un blog léger et un formulaire de contact sécurisé. Technologies: Next.js, Tailwind CSS, Framer Motion.",
    role: 'Frontend Agent',
    image: '/img/jett.png',
    tools: ['React', 'Next.js', 'Tailwind', 'Framer Motion'],
    repo: 'https://github.com/Quiblix/operation-phoenix',
    icon: 'layout',
  },
  {
    slug: 'infiltration-reseau',
    title: 'Infiltration Réseau',
    description: 'Application fullstack avec API sécurisée et base de données.',
    longDescription:
      "Infiltration Réseau est une application fullstack démontrant la mise en place d'API sécurisées, authentification et persistance des données. Comprend tests d'intégration et déploiement CI/CD.",
    role: 'Backend Agent',
    image: '/img/jett.png',
    tools: ['Node.js', 'Express', 'PostgreSQL', 'Prisma'],
    repo: 'https://github.com/Quiblix/infiltration-reseau',
    icon: 'database',
  },
  {
    slug: 'cv-portfolio-web',
    title: 'Fuite de Données',
    description: 'Page de contact interactive avec envoi d’email et animations.',
    longDescription:
      "Fuite de Données est une mini-application explorant les interactions avec les utilisateurs: formulaires, validations, envoi d'emails via mailto et animations réactives.",
    role: 'Support Agent',
    image: '/img/jett.png',
    tools: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    repo: 'https://github.com/Quiblix/cv_portfoilio_web',
    icon: 'globe',
  },
  {
    slug: 'selection-agent',
    title: 'Sélection d’Agent',
    description: 'Interface stylée Valorant présentant mes compétences comme des agents.',
    longDescription:
      "Sélection d’Agent est un concept UI/UX transformant un portfolio en une interface inspirée de Valorant: chaque compétence est un 'agent' avec sa fiche détaillée.",
    role: 'Design Agent',
    image: '/img/jett.png',
    tools: ['Figma', 'Illustrator', 'CSS', 'Animations'],
    repo: 'https://github.com/Quiblix/selection-agent',
    icon: 'code',
  },
];

export const findProject = (slug: string) => projects.find((project) => project.slug === slug);
