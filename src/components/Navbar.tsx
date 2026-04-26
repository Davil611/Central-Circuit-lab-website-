import { motion } from 'motion/react';
import { Menu, X, Cpu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/80 backdrop-blur-lg border-bottom border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <motion.div
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Cpu className="text-primary w-8 h-8" />
            </motion.div>
            <span className="font-display font-bold text-xl tracking-tighter">
              CENTRAL<span className="text-primary text-xs ml-1 font-mono">CIRCUIT LAB</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
            <button className="bg-primary hover:bg-accent text-secondary px-5 py-2 rounded-full text-xs font-bold transition-all transform hover:scale-105">
              JOIN US
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-secondary border-b border-white/10 px-4 pt-2 pb-6 space-y-2"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-lg text-base font-medium text-white hover:bg-white/5 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="w-full bg-primary text-secondary px-5 py-3 rounded-xl text-sm font-bold mt-4">
            JOIN US
          </button>
        </motion.div>
      )}
    </nav>
  );
}
