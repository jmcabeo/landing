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
import { StarBackground } from './components/ui/StarBackground';
import { CursorTrail } from './components/ui/CursorTrail';
import { TouchSpotlight } from './components/ui/TouchSpotlight';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans relative selection:bg-primary-500 selection:text-white">

      {/* --- Ambient & Background Systems --- */}
      <StarBackground />
      <CursorTrail />
      <TouchSpotlight />

      <Header />

      <main className="flex-grow relative z-10">
        <Hero />
        <Features />
        <TargetAudience />
        <ProblemSolution />
        <Process />
        <Addons />
        <Promo />
        <AboutFooter />
      </main>
    </div>
  );
};

export default App;