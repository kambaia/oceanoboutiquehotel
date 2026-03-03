import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import room1 from "@/assets/room-1.png";
import room2 from "@/assets/room-2.png";
import room3 from "@/assets/room-3.png";
import room4 from "@/assets/room-4.png";
import room5 from "@/assets/room-5.png";
import room6 from "@/assets/room-6.png";
import room7 from "@/assets/room-7.png";
import room8 from "@/assets/room-8.png";
import room9 from "@/assets/room-9.png";

const images = [
  { src: room1, label: "Suíte Executiva" },
  { src: room2, label: "Suíte Executiva" },
  { src: room3, label: "Suíte Presidencial" },
  { src: room4, label: "Quarto Luxo" },
  { src: room5, label: "Suite Júnior" },
  { src: room6, label: "Quarto Familiar" },
  { src: room7, label: "Quarto Adaptado" },
  { src: room8, label: "Suíte Presidencial" },
  { src: room9, label: "Suíte Presidencial" },
];

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const goPrev = () =>
    setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
  const goNext = () =>
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));

  return (
    <section id="galeria" className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-accent font-body text-sm tracking-[0.25em] uppercase mb-3">
            Explore o nosso espaço
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Galeria de <span className="italic">Fotos</span>
          </h2>
        </div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-sm break-inside-avoid cursor-pointer"
              onClick={() => openLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ocean-deep/0 group-hover:bg-ocean-deep/50 transition-colors duration-500 flex items-end">
                <p className="text-primary-foreground font-heading text-sm p-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  {img.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors z-10"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors z-10"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="max-w-5xl max-h-[85vh] px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].label}
                className="max-h-[80vh] w-auto mx-auto object-contain rounded"
              />
              <p className="text-white/80 text-center mt-4 font-heading text-lg">
                {images[selectedIndex].label}
                <span className="text-white/40 text-sm ml-3">
                  {selectedIndex + 1} / {images.length}
                </span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
