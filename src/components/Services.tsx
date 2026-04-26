import { motion } from 'motion/react';
import { Cpu, Zap, Activity, BookOpen, Layers, Settings } from 'lucide-react';

const services = [
  {
    title: "Circuit Design & Simulation",
    description: "End-to-end circuit schematic design and rigorous software simulation to ensure project reliability.",
    icon: <Cpu className="w-8 h-8" />,
  },
  {
    title: "Electrical Testing",
    description: "Comprehensive diagnostics and precision testing using high-standard calibrated lab equipment.",
    icon: <Activity className="w-8 h-8" />,
  },
  {
    title: "PCB Development",
    description: "Custom Printed Circuit Board layout designing and professional fabrication services.",
    icon: <Layers className="w-8 h-8" />,
  },
  {
    title: "Lab Training",
    description: "Intensive hands-on training sessions focused on practical electronics and engineering fundamentals.",
    icon: <BookOpen className="w-8 h-8" />,
  },
  {
    title: "IoT & Automation",
    description: "Developing smart, connected systems and industrial automation solutions using modern tech stacks.",
    icon: <Zap className="w-8 h-8" />,
  },
  {
    title: "Project Guidance",
    description: "One-on-one mentorship for academic and research projects by industry-experienced engineers.",
    icon: <Settings className="w-8 h-8" />,
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-primary font-mono text-xs uppercase tracking-widest mb-4">CAPABILITIES</p>
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">Precision Engineering <br />Services</h2>
          <p className="text-white/50 text-lg font-light">
            We provide a comprehensive suite of engineering services designed to take your ideas from the drawing board to the real world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 group hover:border-primary/40 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full -translate-y-full translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-500" />
              
              <motion.div 
                className="text-primary mb-6 inline-block"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, 0, -2, 0] 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <div className="transform group-hover:scale-125 transition-transform duration-500">
                  {service.icon}
                </div>
              </motion.div>
              <h3 className="text-xl font-display font-medium mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-white/40 font-light leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-8 flex items-center gap-2 text-primary text-xs font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                LEARN MORE <div className="w-8 h-[1px] bg-primary" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
