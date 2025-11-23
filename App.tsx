import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { PackInstalacion } from './components/PackInstalacion';
import { Transparency } from './components/Transparency';
import { FAQ } from './components/FAQ';
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
        <ProblemSolution />
        <Features />
        <Pricing />
        <PackInstalacion />
        <Transparency />
        <FAQ />
      </main>

      <AboutFooter />
    </div>
  );
};

export default App;