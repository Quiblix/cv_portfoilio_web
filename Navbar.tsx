'use client';
import { motion } from 'framer-motion';

const navItems = ['Collection', 'Agents', 'Carrière', 'Missions', 'Contact'];

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-valorant-black/80 backdrop-blur-md border-b border-valorant-white/10">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        <div className="text-valorant-red font-black text-2xl tracking-tighter">VLRNT_DEV</div>
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ color: '#FF4655', y: -2 }}
              className="uppercase font-valorant tracking-widest text-sm text-valorant-gray hover:text-valorant-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-valorant-red transition-all group-hover:w-full" />
            </motion.a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-[10px] text-valorant-gray uppercase leading-none">Status</p>
            <p className="text-xs text-green-400 font-bold uppercase">Online</p>
          </div>
        </div>
      </div>
    </nav>
  );
};