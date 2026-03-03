import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { rooms } from "@/data/rooms";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const RoomsSection = () => {
  return (
    <section id="quartos" className="py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-accent font-body text-sm tracking-[0.25em] uppercase mb-3">
            O que temos para si
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            As Nossas <span className="italic">Suítes</span>
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {rooms.map((room) => (
            <motion.div
              key={room.name}
              variants={item}
              className="group relative overflow-hidden rounded-sm bg-card shadow-luxury"
            >
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {room.name}
                </h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed mb-4">
                  {room.desc}
                </p>
                <Link
                  to={`/quarto/${room.id}`}
                  className="inline-flex items-center gap-2 text-accent text-sm font-semibold tracking-wider uppercase hover:gap-3 transition-all duration-300"
                >
                  Saber Mais →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RoomsSection;
