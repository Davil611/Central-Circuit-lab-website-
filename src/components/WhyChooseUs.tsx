import { motion } from 'motion/react';
import { Target, Users, PenTool, Lightbulb } from 'lucide-react';

const reasons = [
  {
    title: "Hands-on Learning",
    description: "Move beyond books with actual lab work and circuit prototyping.",
    icon: <PenTool className="w-10 h-10" />
  },
  {
    title: "Modern Lab Facilities",
    description: "Access to the latest oscilloscopes, signal generators, and testing kits.",
    icon: <Target className="w-10 h-10" />
  },
  {
    title: "Industry-Relevant Skills",
    description: "Curriculum designed to meet the current standards of engineering industries.",
    icon: <Lightbulb className="w-10 h-10" />
  },
  {
    title: "Expert Guidance",
    description: "Learn from seasoned engineers and academic researchers who care.",
    icon: <Users className="w-10 h-10" />
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-primary/[0.05] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-mono text-xs uppercase tracking-widest mb-4">THE LAB ADVANTAGE</p>
            <h2 className="text-4xl md:text-5xl font-display font-medium mb-8">Why Innovate <br />With Us?</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-4"
                >
                  <div className="text-primary">{reason.icon}</div>
                  <h3 className="text-xl font-display font-medium">{reason.title}</h3>
                  <p className="text-white/40 text-sm font-light leading-relaxed">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
             <div className="w-full max-w-sm aspect-square border-4 border-white/5 rounded-full flex items-center justify-center relative">
                <div className="absolute inset-0 border border-primary/20 rounded-full animate-spin-slow" />
                <div className="absolute inset-8 border border-white/10 rounded-full animate-reverse-spin" />
                <div className="w-48 h-48 bg-primary/20 rounded-full blur-[80px] animate-pulse" />
                <div className="relative z-10 text-center">
                    <p className="text-6xl font-display font-bold text-primary">100%</p>
                    <p className="text-[10px] font-mono text-white/50 uppercase tracking-widest mt-2">Success Rate</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
