import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Smart Home Automation",
    category: "IoT & Control",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800",
    description: "A centralized IoT system to manage power consumption and remote device control."
  },
  {
    title: "Overcurrent Protection",
    category: "Power Electronics",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=800",
    description: "Industrial-grade relay system for preventing circuit failures due to overcurrent."
  },
  {
    title: "Solar Monitoring System",
    category: "Renewable Energy",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800",
    description: "Real-time data logging for solar panel efficiency and storage capacity monitoring."
  },
  {
    title: "Arduino Medical Bot",
    category: "Embedded Systems",
    image: "https://images.unsplash.com/photo-1531746790731-6ca2a7b2b087?auto=format&fit=crop&q=80&w=800",
    description: "An automated assistant for medical facilities using microcontrollers and sensors."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <p className="text-primary font-mono text-xs uppercase tracking-widest mb-4">PORTFOLIO</p>
            <h2 className="text-4xl md:text-5xl font-display font-medium">Flagship <span className="text-primary">Innovations</span></h2>
          </div>
          <button className="text-white/60 hover:text-primary flex items-center gap-2 text-sm font-mono transition-colors">
            VIEW ALL REPOSITORY <ExternalLink size={16} />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[450px] overflow-hidden rounded-2xl cursor-pointer"
            >
              <div className="absolute inset-0 bg-secondary/80 group-hover:bg-secondary/40 transition-colors duration-500 z-10" />
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-x-0 bottom-0 p-8 z-20 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[10px] font-mono text-primary uppercase tracking-[0.2em] mb-2">{project.category}</p>
                <h3 className="text-2xl font-display font-medium mb-4">{project.title}</h3>
                <p className="text-white/50 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  {project.description}
                </p>
                
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-700">
                   <span className="text-xs font-mono uppercase">Case Study</span>
                   <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary transition-colors">
                     <ArrowRight size={14} className="group-hover:text-secondary" />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from 'lucide-react';
