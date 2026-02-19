
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black/90 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-cyber-gradient p-2 rounded-xl rotate-3">
            <i className="fas fa-faucet-drip text-white text-xl"></i>
          </div>
          <span className="text-2xl font-black text-white tracking-tighter brand-font">
            Valve<span className="text-neon-pink">Pro</span><span className="text-neon-cyan">.</span>
          </span>
        </div>
        
        <div className="hidden md:flex space-x-10 font-black text-slate-400 uppercase tracking-tighter text-xs italic">
          <a href="#services" className="hover:text-neon-cyan transition-colors py-2 relative group">
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan transition-all group-hover:w-full"></span>
          </a>
          <a href="#process" className="hover:text-neon-pink transition-colors py-2 relative group">
            The Process
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-pink transition-all group-hover:w-full"></span>
          </a>
          <a href="#advisor" className="hover:text-neon-cyan transition-colors py-2 relative group">
            Ask Mike
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan transition-all group-hover:w-full"></span>
          </a>
        </div>

        <a 
          href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} 
          className="bg-white text-black px-6 py-2.5 rounded-xl font-black hover:bg-neon-cyan transition-all flex items-center gap-2 shadow-lg hover:-translate-y-0.5"
        >
          <i className="fas fa-phone-alt text-xs"></i>
          <span className="hidden lg:inline">{BUSINESS_INFO.phone}</span>
          <span className="lg:hidden">Call</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
