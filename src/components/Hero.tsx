import { motion } from 'motion/react';
import { ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden circuit-pattern">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-mono mb-6 uppercase tracking-widest">
              <Zap size={14} className="animate-pulse" /> Engineering Excellence
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-[0.9] mb-6">
              Powering <span className="text-primary">Innovation</span> <br />
              Through Circuits
            </h1>
            
            <p className="text-xl text-white/50 max-w-lg mb-10 font-light leading-relaxed">
              Advancing the boundaries of electrical and electronics engineering through hands-on learning, practical design, and real-world research.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary hover:bg-accent text-secondary px-8 py-4 rounded-full text-sm font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105 active:scale-95 group">
                EXPLORE PROJECTS
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-white/20 hover:border-primary/50 text-white px-8 py-4 rounded-full text-sm font-bold transition-all hover:bg-white/5">
                JOIN OUR HUB
              </button>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8 max-w-sm">
              <div>
                <p className="text-2xl font-display font-bold text-primary">500+</p>
                <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Students</p>
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-primary">120+</p>
                <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Projects</p>
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-primary">15+</p>
                <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Partners</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 w-full aspect-square glass-card flex items-center justify-center p-12 overflow-hidden border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50" />
              <Cpu size={320} className="text-primary/10 absolute -right-20 -bottom-20 rotate-12" />
              
              <div className="relative space-y-4 w-full">
                 {[1, 2, 3].map((i) => (
                    <motion.div 
                      key={i}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.5 + i * 0.2, duration: 1 }}
                      className="h-[1px] bg-gradient-to-r from-primary to-transparent opacity-30"
                    />
                 ))}
                 <div className="p-8 space-y-2">
                    <p className="text-xs font-mono text-primary animate-pulse">SYSTEM_INIT [OK]</p>
                    <p className="text-xs font-mono text-white/40">CALIBRATING_SENSORS...</p>
                    <p className="text-xs font-mono text-white/40">MAPPING_TOPOLOGY...</p>
                 </div>
              </div>
            </div>
            
            {/* Abstract Circuit Lines */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-primary/20 rounded-full animate-spin-slow pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 border border-white/5 rounded-full animate-pulse pointer-events-none" />
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-[0.3em] font-mono">
        <div className="w-10 h-[1px] bg-white/20" />
        SROLL TO INNOVATE
        <div className="w-10 h-[1px] bg-white/20" />
      </div>
    </section>
  );
}

import { Cpu as CpuIcon } from 'lucide-react';
function Cpu({ size, className }: { size: number, className?: string }) {
  return <CpuIcon size={size} className={className} />;
}
