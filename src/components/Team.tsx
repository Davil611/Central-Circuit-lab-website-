import { motion } from 'motion/react';
import { Linkedin, Twitter } from 'lucide-react';

const members = [
  {
    name: "Dr. Arnab Sen",
    role: "Chief Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Priyanka Das",
    role: "Senior Lab Assistant",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Rahul Mehra",
    role: "Student Innovator",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Sohini Roy",
    role: "IoT Research Lead",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-primary font-mono text-xs uppercase tracking-widest mb-4">THE MINDS</p>
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">Our Innovators</h2>
          <p className="text-white/50 text-lg font-light">
            A collaborative team of experienced engineers, passionate lab assistants, and forward-thinking student innovators.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative aspect-square rounded-full overflow-hidden mb-6 border-4 border-white/5 group-hover:border-primary/50 transition-all duration-500 max-w-[240px] mx-auto">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white hover:text-primary">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white hover:text-primary">
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-display font-medium text-white group-hover:text-primary transition-colors">{member.name}</h3>
              <p className="text-xs font-mono text-white/40 uppercase tracking-widest mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
