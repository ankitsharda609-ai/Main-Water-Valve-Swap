
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AIAdvisor from './components/AIAdvisor';
import { BUSINESS_INFO, SERVICES, FAQS, NEIGHBORHOOD_KUDOS } from './constants';

const App: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />

      {/* Extreme Hero Section */}
      <header className="relative py-28 px-6 min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Visuals */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img 
            src="https://images.unsplash.com/photo-1504148455328-497c5efdf13a?q=80&w=1920&auto=format&fit=crop" 
            alt="Plumbing Texture" 
            className="w-full h-full object-cover opacity-20 grayscale scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-3/5">
              <div className="flex items-center gap-3 mb-10">
                <span className="bg-neon-pink px-3 py-1 text-[10px] font-black text-white uppercase tracking-[0.3em] rounded">Alexandria VA</span>
                <span className="h-px w-20 bg-white/20"></span>
                <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Est. 2004</span>
              </div>
              
              <h1 className="text-6xl lg:text-9xl font-black mb-10 leading-[0.85] tracking-tighter text-white uppercase italic">
                The <span className="text-neon-cyan not-italic">Valve</span><br/>
                Swap <span className="text-neon-pink not-italic">King.</span>
              </h1>
              
              <p className="text-xl lg:text-2xl mb-12 text-slate-400 max-w-xl leading-relaxed font-light">
                Listen, don't let a <span className="text-white font-bold underline decoration-neon-pink decoration-2">seized gate valve</span> turn your Old Town basement into a swimming pool. 
                I fix the stuff the big guys won't touch.
              </p>
              
              <div className="flex flex-wrap gap-6 items-center">
                <button className="bg-cyber-gradient hover:scale-105 transition-transform text-white px-12 py-6 rounded-3xl font-black text-xl shadow-[0_0_30px_rgba(236,72,153,0.3)]">
                  BOOK MIKE NOW
                </button>
                <div className="flex flex-col">
                  <p className="text-neon-cyan text-xs font-black uppercase tracking-widest mb-1 italic">Direct Line</p>
                  <p className="text-3xl font-black text-white brand-font">{BUSINESS_INFO.phone}</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/5 w-full flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-cyber-gradient rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-[#111] p-10 rounded-[3rem] border border-white/10 shadow-3xl text-white max-w-md">
                  <div className="mb-10">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-4xl font-black italic uppercase text-neon-cyan">LIVE Status</h3>
                      <div className="bg-green-500/10 px-3 py-1 rounded-full flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-[10px] text-green-500 font-black uppercase">Active</span>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">Currently tackling a 100-year-old lead-in transition near <span className="text-white font-bold">King St Station</span>. Available for emergency dispatch tonight.</p>
                  </div>
                  
                  <div className="space-y-6 mb-12">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                        <i className="fas fa-hammer text-2xl text-neon-pink"></i>
                      </div>
                      <div>
                        <p className="font-black text-white uppercase text-xs tracking-widest">Master Plumber</p>
                        <p className="text-slate-400 text-sm">VA License #99382</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                        <i className="fas fa-bolt text-2xl text-neon-cyan"></i>
                      </div>
                      <div>
                        <p className="font-black text-white uppercase text-xs tracking-widest">Rapid Response</p>
                        <p className="text-slate-400 text-sm">Under 60min in Old Town</p>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full py-6 bg-white text-black rounded-2xl font-black uppercase tracking-widest hover:bg-neon-pink hover:text-white transition-all">
                    Emergency Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Real Photos Section */}
      <section className="py-24 bg-white text-black rounded-[4rem] mx-4 my-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1621905252507-b354bcadcabc?q=80&w=400&h=500&auto=format&fit=crop" className="rounded-3xl shadow-lg rotate-2 translate-y-4 object-cover" alt="Industrial Valve" />
                <img src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?q=80&w=400&h=500&auto=format&fit=crop" className="rounded-3xl shadow-lg -rotate-3 object-cover" alt="Plumbing Tools" />
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-neon-pink font-black uppercase tracking-[0.4em] text-xs mb-4 block">Meet the Man</span>
              <h2 className="text-6xl font-black mb-8 leading-[0.9] tracking-tighter uppercase italic text-black">
                I'm Mike. <br/>I Hate <span className="text-neon-cyan">Leaks.</span>
              </h2>
              <div className="flex items-center gap-6 mb-10">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&h=300&auto=format&fit=crop" 
                  alt="Mike Henderson" 
                  className="w-24 h-24 rounded-full border-4 border-neon-pink object-cover shadow-2xl"
                />
                <div>
                   <p className="text-2xl font-black text-black">Mike Henderson</p>
                   <p className="text-sm font-bold text-neon-pink uppercase tracking-widest">Master Plumber & Local Resident</p>
                </div>
              </div>
              <p className="text-2xl font-light text-slate-600 mb-8 leading-relaxed">
                Most big plumbing franchises hire kids who've never seen a curb box. I've spent <span className="font-bold text-black border-b-4 border-neon-cyan">22 years</span> specifically crawling under Alexandria's historic homes.
              </p>
              <div className="bg-slate-100 p-8 rounded-3xl border-l-8 border-neon-pink">
                <p className="italic text-slate-800 text-xl font-medium mb-4">"If your main valve is leaking, don't wait for Monday. It's the only thing between you and a flooded living room."</p>
                <p className="font-black uppercase tracking-widest text-xs">- Mike Henderson</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in Cyan/Pink */}
      <section id="services" className="py-24 container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-7xl font-black text-white mb-6 uppercase italic tracking-tighter">Tools of the <span className="text-neon-pink">Trade.</span></h2>
          <div className="w-24 h-2 bg-neon-cyan mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="group relative">
              <div className="absolute -inset-2 bg-cyber-gradient rounded-[3rem] opacity-0 group-hover:opacity-10 blur-xl transition-opacity"></div>
              <div className="bg-[#0c0c0c] p-12 rounded-[3rem] border border-white/5 relative h-full transition-transform group-hover:-translate-y-4">
                <div className="text-neon-cyan text-5xl mb-8 group-hover:text-neon-pink transition-colors">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h3 className="text-3xl font-black mb-6 text-white leading-tight uppercase italic">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Process Section (Fixed & Redesigned) */}
      <section id="process" className="py-24 bg-black border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-neon-pink/5 blur-[120px] rounded-full"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-20">
            <h2 className="text-6xl md:text-8xl font-black text-white italic uppercase tracking-tighter mb-4">
              The <span className="text-neon-cyan">Battle</span> Plan.
            </h2>
            <div className="h-2 w-32 bg-neon-pink"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] relative group hover:border-neon-cyan transition-colors">
              <span className="text-8xl font-black text-neon-cyan/20 absolute -top-4 -right-4 italic group-hover:text-neon-cyan/40 transition-colors">01</span>
              <h4 className="text-2xl font-black text-white mb-6 uppercase italic">Curb Search</h4>
              <p className="text-slate-400 leading-relaxed">We hunt down your street-side shutoff box. If it's buried under 2 feet of dirt, we dig it up.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] relative group hover:border-neon-pink transition-colors">
              <span className="text-8xl font-black text-neon-pink/20 absolute -top-4 -right-4 italic group-hover:text-neon-pink/40 transition-colors">02</span>
              <h4 className="text-2xl font-black text-white mb-6 uppercase italic">The Isolation</h4>
              <p className="text-slate-400 leading-relaxed">Using a professional T-handle key, we kill the water at the street. No leaks, no floods.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] relative group hover:border-neon-cyan transition-colors">
              <span className="text-8xl font-black text-neon-cyan/20 absolute -top-4 -right-4 italic group-hover:text-neon-cyan/40 transition-colors">03</span>
              <h4 className="text-2xl font-black text-white mb-6 uppercase italic">The Swap</h4>
              <p className="text-slate-400 leading-relaxed">Out with the old, seized gate valve. In with a modern, stainless steel 1/4 turn ball valve.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] relative group hover:border-neon-pink transition-colors">
              <span className="text-8xl font-black text-neon-pink/20 absolute -top-4 -right-4 italic group-hover:text-neon-pink/40 transition-colors">04</span>
              <h4 className="text-2xl font-black text-white mb-6 uppercase italic">Pressure Lab</h4>
              <p className="text-slate-400 leading-relaxed">We recharge the lines and test under full pressure for 30 minutes to guarantee zero weeping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Shoutouts */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-gradient opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-10">
            {NEIGHBORHOOD_KUDOS.map((kudo, idx) => (
              <div key={idx} className="bg-black/40 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 shadow-2xl">
                <div className="flex gap-1 text-neon-pink mb-6">
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                </div>
                <p className="text-white text-xl font-medium mb-10 leading-relaxed italic">"{kudo.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyber-gradient flex items-center justify-center font-black text-white border-2 border-white/20">
                    {kudo.name[0]}
                  </div>
                  <div>
                    <p className="font-black text-white uppercase text-xs tracking-widest">{kudo.name}</p>
                    <p className="text-neon-cyan text-[10px] font-bold uppercase">{kudo.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ask Mike AI Tool */}
      <AIAdvisor />

      {/* Final Call to Action */}
      <section className="py-32 bg-cyber-gradient">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-7xl lg:text-[10rem] font-black uppercase italic leading-[0.8] tracking-tighter mb-12">
            Don't Get <br/>Drowned.
          </h2>
          <p className="text-2xl lg:text-3xl font-bold mb-16 opacity-90 max-w-2xl mx-auto">
            One call. One swap. A lifetime of peace.
          </p>
          <button className="bg-black text-white px-16 py-8 rounded-full font-black text-3xl shadow-3xl hover:scale-105 transition-all uppercase tracking-widest">
            {BUSINESS_INFO.phone}
          </button>
        </div>
      </section>

      {/* Dark Footer */}
      <footer className="bg-black text-white py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-20 mb-20">
            <div>
              <div className="flex items-center gap-3 mb-10">
                <div className="bg-cyber-gradient p-2 rounded-xl">
                  <i className="fas fa-faucet-drip text-white"></i>
                </div>
                <span className="text-3xl font-black tracking-tighter brand-font">
                  Valve<span className="text-neon-pink">Pro</span><span className="text-neon-cyan">.</span>
                </span>
              </div>
              <p className="text-slate-500 leading-relaxed text-lg italic">
                Protecting Alexandria's historic property from the ground up since 2004.
              </p>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-black uppercase tracking-[0.4em] text-[10px] text-neon-pink">Direct Access</h4>
              <p className="text-4xl font-black hover:text-neon-cyan transition-colors">{BUSINESS_INFO.phone}</p>
              <p className="text-slate-400">{BUSINESS_INFO.email}</p>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-black uppercase tracking-[0.4em] text-[10px] text-neon-cyan">The Shop</h4>
              <p className="text-slate-400 text-lg">{BUSINESS_INFO.address}</p>
              <p className="text-slate-600 text-xs">Serving all of Alexandria & Northern Virginia 24/7/365</p>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-600 text-[10px] font-bold uppercase tracking-[0.3em] gap-8">
            <p>&copy; 2026 ValvePro Alexandria. Locally Owned. Master Plumber Lic #VA-99382.</p>
            <div className="flex gap-12">
              <a href="#" className="hover:text-neon-pink transition">Privacy</a>
              <a href="#" className="hover:text-neon-cyan transition">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
