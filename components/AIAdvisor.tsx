
import React, { useState, useRef, useEffect } from 'react';
import { getPlumbingAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';
import { BUSINESS_INFO } from '../constants';

const AIAdvisor: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Yo! I'm Mike. Alexandria plumbing is my life. Got a valve that's stuck or just plain leaking? Ask me anything and I'll shoot you straight." }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [imgError, setImgError] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    const response = await getPlumbingAdvice(input, messages);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setLoading(false);
  };

  return (
    <section id="advisor" className="py-24 bg-black overflow-hidden relative border-y border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-pink/10 rounded-full blur-[120px]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-2/5">
            <h2 className="text-6xl font-black mb-8 italic leading-[0.9] text-white tracking-tighter uppercase">
              Free <span className="text-neon-cyan">Expert</span> <br/>Advice <span className="text-neon-pink text-4xl block mt-2 opacity-50 font-normal">No Call Fee Required</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-sm">
              I can't be at every Alexandria home 24/7, so I trained this brain with everything I know about Old Town's ancient pipes.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-px bg-neon-pink"></div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-neon-pink">22+ Years Experience Built-in</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-px bg-neon-cyan"></div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-neon-cyan">Zero Sales Bullsh*t</p>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 w-full">
            <div className="bg-[#111111] border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col h-[650px] overflow-hidden">
              <div className="p-6 bg-white/5 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    {!imgError ? (
                      <img 
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&h=150&auto=format&fit=crop" 
                        alt="Mike Henderson" 
                        onError={() => setImgError(true)}
                        className="w-14 h-14 rounded-2xl object-cover border-2 border-neon-pink shadow-lg"
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-2xl bg-cyber-gradient flex items-center justify-center border-2 border-neon-pink shadow-lg text-white font-black text-xl">
                        MH
                      </div>
                    )}
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-black rounded-full shadow-neon-pink"></div>
                  </div>
                  <div>
                    <p className="font-black text-white brand-font tracking-tight uppercase">MIKE HENDERSON</p>
                    <p className="text-[10px] text-neon-cyan uppercase font-bold tracking-widest">Master Plumber AI</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-neon-pink/10 text-neon-pink text-[10px] font-black px-3 py-1 rounded-full uppercase">Instant Response</div>
                </div>
              </div>

              <div 
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide"
              >
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-5 rounded-3xl shadow-xl leading-relaxed text-sm md:text-base ${
                      msg.role === 'user' 
                        ? 'bg-neon-cyan text-black font-bold rounded-tr-none' 
                        : 'bg-white/5 text-slate-200 rounded-tl-none border border-white/10'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-white/5 p-4 rounded-full border border-white/10 flex gap-2">
                      <div className="w-2 h-2 bg-neon-pink rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-neon-pink rounded-full animate-bounce delay-75"></div>
                      <div className="w-2 h-2 bg-neon-pink rounded-full animate-bounce delay-150"></div>
                    </div>
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="p-6 bg-black border-t border-white/10">
                <div className="flex gap-4">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="E.g. 'My valve won't budge! Help!'"
                    className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-neon-pink transition-all placeholder:text-slate-600"
                  />
                  <button 
                    type="submit"
                    disabled={loading}
                    className="bg-cyber-gradient hover:scale-105 active:scale-95 text-white w-14 rounded-2xl flex items-center justify-center transition disabled:opacity-50"
                  >
                    <i className="fas fa-paper-plane text-xl"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAdvisor;
