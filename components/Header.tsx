import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beneficios', href: '#features' },
    { name: 'Proceso', href: '#process' },
    { name: 'Módulos', href: '#addons' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-primary-500/10 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Small Logo (Visible only on scroll) */}
          <div className={`transition-all duration-500 ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'} flex items-center gap-3`}>
            <div className="w-8 h-8 border border-accent-500 rounded-full flex items-center justify-center bg-slate-950 shadow-[0_0_10px_rgba(245,158,11,0.3)] overflow-hidden">
              <img src="/logo.png" alt="Omnia Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-white tracking-widest text-sm">OMNIA</span>
              <span className="text-[0.6rem] text-primary-400 tracking-[0.2em] uppercase">Growth Systems</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative text-slate-300 hover:text-white text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary-400 shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <Button
              variant="accent"
              href="#promo"
              className="ml-4 text-xs px-6 py-2 bg-transparent border border-accent-500/60 text-accent-400 hover:bg-accent-500 hover:text-white hover:shadow-[0_0_15px_rgba(245,158,11,0.5)] shadow-none transition-all"
            >
              ACCESO
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-white">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-primary-400">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-primary-500/20 absolute w-full shadow-2xl">
          <div className="px-4 pt-4 pb-8 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block py-3 text-slate-300 hover:text-primary-400 text-center uppercase tracking-widest border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex justify-center">
              <Button variant="accent" href="#promo" fullWidth className="shadow-[0_0_20px_rgba(245,158,11,0.3)]">Acceso</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};