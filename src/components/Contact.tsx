import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <p className="text-primary font-mono text-xs uppercase tracking-widest mb-4">REACH OUT</p>
              <h2 className="text-4xl md:text-5xl font-display font-medium">Power Up a <br />Connection</h2>
            </div>

            <div className="space-y-8">
              {[
                { icon: <Mail className="text-primary" />, title: "ELECTRONIC MAIL", value: "contact@centralcircuit.org" },
                { icon: <Phone className="text-primary" />, title: "SIGNAL LINE", value: "+91 98765 43210" },
                { icon: <MapPin className="text-primary" />, title: "PHYSICAL NODE", value: "Sector V, Salt Lake, Kolkata, West Bengal" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-12 h-12 glass-card flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] mb-1">{item.title}</p>
                    <p className="text-xl font-display font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 border-primary/10"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest pl-1">Identification</label>
                  <input 
                    type="text" 
                    placeholder="YOUR NAME" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-primary/50 transition-colors font-mono"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest pl-1">Signal Protocol</label>
                  <input 
                    type="email" 
                    placeholder="YOUR EMAIL" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-primary/50 transition-colors font-mono"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest pl-1">Payload Description</label>
                <textarea 
                  rows={4}
                  placeholder="INNOVATION BRIEF" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-primary/50 transition-colors font-mono resize-none"
                />
              </div>
              <button className="w-full bg-primary hover:bg-accent text-secondary py-5 rounded-xl text-xs font-bold tracking-[0.2em] flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-95 group">
                TRANSMIT DATA <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
