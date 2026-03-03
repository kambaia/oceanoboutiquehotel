import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [hero1, hero2, hero3];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current]}
            alt="Oceano Boutique Hotel"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-overlay" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gold font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4"
        >
          Restinga do Lobito, Angola
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-primary-foreground text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight max-w-4xl"
        >
          Onde o luxo encontra a{" "}
          <span className="italic text-gold-light">tranquilidade</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-primary-foreground/80 font-body text-base md:text-lg max-w-xl mt-6"
        >
          Um espaço acolhedor na primeira linha da praia com serviço de
          excelência e vistas deslumbrantes sobre o oceano.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto px-4 sm:px-0"
        >
          <a
            href="#quartos"
            className="bg-accent text-accent-foreground px-8 py-3.5 font-semibold text-sm tracking-wider uppercase rounded-sm hover:shadow-gold transition-all duration-300 text-center"
          >
            Nossos Quartos
          </a>
          <a
            href="#reservar"
            className="border border-primary-foreground/40 text-primary-foreground px-8 py-3.5 font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-primary-foreground/10 transition-all duration-300 text-center"
          >
            Reservar
          </a>
        </motion.div>
      </div>

      {/* Slide Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4">
        <button onClick={() => setCurrent((p) => (p - 1 + slides.length) % slides.length)} className="text-primary-foreground/60 hover:text-gold transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-gold w-6" : "bg-primary-foreground/40"
            }`}
          />
        ))}
        <button onClick={() => setCurrent((p) => (p + 1) % slides.length)} className="text-primary-foreground/60 hover:text-gold transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
