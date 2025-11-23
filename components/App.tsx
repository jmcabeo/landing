import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TargetAudience } from './components/TargetAudience';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { Addons } from './components/Addons';
import { Process } from './components/Process';
import { Promo } from './components/Promo';
import { AboutFooter } from './components/AboutFooter';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans relative selection:bg-primary-500 selection:text-white">
      {/* Global Animated Background */}
      <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-950">
        {/* Primary Cyan Blob */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-blob"></div>
        
        {/* Accent Gold Blob */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-600 rounded-full mix-blend-screen filter blur-[120px] opacity-15 animate-blob animation-delay-2000"></div>
        
        {/* Secondary Cyan Blob */}
        <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-primary-800 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Grid Overlay for tech feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
      </div>

      <Header />
      <main className="flex-grow relative">
        <Hero />
        <TargetAudience />
        <ProblemSolution />
        <Features />
        <Addons />
        <Process />
        <Promo />
        <AboutFooter />
      </main>
    </div>
  );
};

export default App;