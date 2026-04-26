import { Cpu, Github, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 space-y-8">
            <div className="flex items-center gap-2">
              <Cpu className="text-primary w-8 h-8" />
              <span className="font-display font-bold text-2xl tracking-tighter">
                CENTRAL<span className="text-primary text-xs ml-1 font-mono">CIRCUIT LAB</span>
              </span>
            </div>
            <p className="text-white/40 text-lg font-light leading-relaxed max-w-sm">
              Innovate. Design. Power the Future. <br />
              Bridging the gap between engineering theory and industrial reality since 2018.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Instagram, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/50 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-[0.2em] mb-8 text-white/30">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Projects', 'Team'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm text-white/50 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-[0.2em] mb-8 text-white/30">Legal</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Lab Guidelines', 'Safety Manual'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/50 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
            © 2026 Central Circuit Lab. All Rights Reserved. SYSTEM_VERSION 4.1.0
          </p>
          <div className="flex items-center gap-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <p className="text-[10px] font-mono text-primary uppercase tracking-widest">SERVER_STATUS: OPERATIONAL</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
