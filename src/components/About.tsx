import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p className="text-primary font-mono text-xs uppercase tracking-widest mb-4">OUR PURPOSE</p>
              <h2 className="text-4xl md:text-5xl font-display font-medium">A Hub for the <br />Engineers of <span className="text-primary">Tomorrow</span></h2>
            </div>
            
            <div className="space-y-6 text-white/60 text-lg font-light leading-relaxed">
              <p>
                Central Circuit Lab is more than just a workspace. It's a dynamic ecosystem where students and professionals converge to bridge the gap between theoretical knowledge and industrial reality.
              </p>
              <p>
                We focus on cultivating practical skills through hands-on experimentation, rigorous research, and a commitment to building future-ready innovators in the field of electrical and electronics engineering.
              </p>
            </div>

            <div className="flex gap-12">
              <div>
                <p className="text-sm font-mono text-primary mb-1">FOUNDED</p>
                <p className="text-2xl font-display font-bold">2018</p>
              </div>
              <div>
                <p className="text-sm font-mono text-primary mb-1">LOCATION</p>
                <p className="text-2xl font-display font-bold">Kolkata, IN</p>
              </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative"
          >
            <div className="aspect-video glass-card overflow-hidden group">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:bg-primary/10 transition-all duration-700" />
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200" 
                alt="Engineering Lab" 
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-80" />
            </div>
            {/* Abstract Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border border-primary/20 -z-10 rounded-2xl rotate-12" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-white/10 -z-10 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
