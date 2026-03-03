import { motion } from "framer-motion";
import { Wifi, Coffee, ShieldCheck, Clock, Shirt, Tv } from "lucide-react";
import room2 from "@/assets/room-2.png";

const features = [
  { icon: Coffee, label: "Pequeno-Almoço" },
  { icon: Clock, label: "Recepção 24h" },
  { icon: Wifi, label: "Wi-Fi Gratuito" },
  { icon: Tv, label: "TV Satélite" },
  { icon: Shirt, label: "Lavandaria" },
  { icon: ShieldCheck, label: "Segurança" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={room2}
              alt="Oceano Boutique Hotel Interior"
              className="w-full rounded-sm shadow-luxury"
            />
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-8 py-4 rounded-sm shadow-gold hidden md:block">
              <p className="font-heading text-2xl font-bold">10+</p>
              <p className="text-sm font-body">Anos de Excelência</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent font-body text-sm tracking-[0.25em] uppercase mb-3">
              Porquê o Oceano?
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight mb-6">
              Luxo e conforto à{" "}
              <span className="italic text-ocean-light">beira-mar</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              O Oceano Boutique Hotel, localizado na Restinga do Lobito, é um
              espaço acolhedor na primeira linha da praia. Com serviço de
              alojamento e Pequenos-Almoços, Recepção 24 horas, Internet Wi-Fi
              gratuita, canais por satélite, Lavandaria, elevador, segurança e
              uma equipa preparada para garantir uma estadia inesquecível.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
              {features.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 p-4 rounded-sm bg-secondary text-center"
                >
                  <Icon className="w-5 h-5 text-accent" />
                  <span className="text-xs font-medium text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
