import React from 'react';

export const AboutFooter: React.FC = () => {
   return (
      <footer className="bg-black border-t border-slate-800/50 py-12">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center">
               {/* Logo */}
               <div className="mb-6">
                  <img src="/logo.png" alt="Omnia Logo" className="w-16 h-16 opacity-70 rounded-full" />
               </div>

               {/* Copyright */}
               <p className="text-slate-500 text-sm mb-6">
                  © 2025 Omnia Growth Systems. Todos los derechos reservados.
               </p>

               {/* Links */}
               <div className="flex gap-6 text-sm">
                  <a href="#" className="text-slate-400 hover:text-accent-400 transition-colors">
                     Términos y Condiciones
                  </a>
                  <span className="text-slate-700">|</span>
                  <a href="#" className="text-slate-400 hover:text-accent-400 transition-colors">
                     Política de Privacidad
                  </a>
                  <span className="text-slate-700">|</span>
                  <a href="#" className="text-slate-400 hover:text-accent-400 transition-colors">
                     Contacto
                  </a>
               </div>
            </div>
         </div>
      </footer>
   );
};