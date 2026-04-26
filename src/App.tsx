import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import WhyChooseUs from './components/WhyChooseUs';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-secondary selection:bg-primary/30 selection:text-white overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        
        {/* Transitional Banner */}
        <div className="py-12 bg-primary/5 border-y border-primary/10 overflow-hidden">
           <motion.div 
             animate={{ x: [0, -1000] }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="flex whitespace-nowrap gap-12 text-primary/30 font-display font-bold text-6xl uppercase tracking-[0.2em] italic"
           >
              <span>Innovate . Design . Power the Future</span>
              <span>Innovate . Design . Power the Future</span>
              <span>Innovate . Design . Power the Future</span>
              <span>Innovate . Design . Power the Future</span>
           </motion.div>
        </div>

        <Projects />
        <WhyChooseUs />
        <Team />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
