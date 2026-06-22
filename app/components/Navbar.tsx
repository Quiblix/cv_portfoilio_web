'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const navItems = [
  { label: 'Agents', href: '/' },
  { label: 'Projets', href: '/projects' },
  { label: 'Carrière', href: '/career' },
  { label: 'En coulisse', href: '/habitudes-de-travail' },
  { label: 'Objectifs', href: '/objectifs' },
];

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-valorant-black/80 backdrop-blur-md border-b border-valorant-white/10">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        <div className="text-valorant-red font-black text-2xl tracking-tighter">
          <Link href="/">VLRNT_DEV</Link>
        </div>
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -2 }}
            >
              <Link
                href={item.href}
                className="uppercase font-valorant tracking-widest text-sm text-valorant-gray hover:text-valorant-white transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-valorant-red transition-all group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="flex items-center gap-4">
        </div>
      </div>
    </nav>
  );
};