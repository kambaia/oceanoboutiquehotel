import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Users, Maximize2, CalendarCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { rooms } from "@/data/rooms";

const RoomDetail = () => {
  const { id } = useParams();
  const room = rooms.find((r) => r.id === id);

  if (!room) return <Navigate to="/" replace />;

  const otherRooms = rooms.filter((r) => r.id !== room.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <div className="relative h-[65vh] md:h-[75vh] overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/20" />

        {/* Back button */}
        <div className="absolute top-0 left-0 right-0 pt-28 md:pt-36">
          <div className="container">
            <Link
              to="/#quartos"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-body tracking-wider transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar aos Quartos
            </Link>
          </div>
        </div>

        {/* Room title */}
        <div className="absolute bottom-0 left-0 right-0 pb-10 md:pb-14">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gold font-body text-sm tracking-[0.25em] uppercase mb-2">
                Oceano Boutique Hotel
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                {room.name}
              </h1>
              <p className="text-white/70 font-body mt-3 text-lg">{room.desc}</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

            {/* Left — Description + Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="mb-10">
                <p className="text-accent font-body text-sm tracking-[0.25em] uppercase mb-3">
                  Sobre este espaço
                </p>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Uma experiência <span className="italic">única</span>
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed text-base">
                  {room.longDesc}
                </p>
              </div>

              <div className="w-16 h-px bg-accent/30 mb-10" />

              {/* Features */}
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                  O que está incluído
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {room.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-sm font-body text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right — Booking card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-card shadow-luxury rounded-sm p-8 sticky top-24">
                <p className="text-accent font-body text-sm tracking-[0.25em] uppercase mb-4">
                  Reservar este quarto
                </p>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                  {room.name}
                </h3>

                {/* Room stats */}
                <div className="flex gap-6 mb-8 pb-8 border-b border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                    <Maximize2 className="w-4 h-4 text-accent" />
                    {room.size}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                    <Users className="w-4 h-4 text-accent" />
                    {room.guests === 1
                      ? "1 hóspede"
                      : `Até ${room.guests} hóspedes`}
                  </div>
                </div>

                <Link
                  to={`/reservas?quarto=${room.id}`}
                  className="flex items-center justify-center gap-2 w-full bg-accent text-accent-foreground px-6 py-3.5 text-sm font-semibold tracking-wider uppercase rounded-sm hover:shadow-gold transition-all duration-300 mb-4"
                >
                  <CalendarCheck className="w-4 h-4" />
                  Reservar Agora
                </Link>

                <a
                  href="mailto:Geral@oceanoboutiquehotel.com"
                  className="flex items-center justify-center w-full border border-border text-foreground/70 hover:text-accent hover:border-accent px-6 py-3.5 text-sm font-semibold tracking-wider uppercase rounded-sm transition-all duration-300"
                >
                  Contactar Hotel
                </a>

                <p className="text-muted-foreground text-xs font-body text-center mt-4 leading-relaxed">
                  Reserva sem comissões · Melhor preço garantido
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other rooms */}
      {otherRooms.length > 0 && (
        <section className="py-16 bg-secondary">
          <div className="container">
            <div className="text-center mb-12">
              <p className="text-accent font-body text-sm tracking-[0.25em] uppercase mb-3">
                Explore mais
              </p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Outros <span className="italic">Quartos</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherRooms.map((r, i) => (
                <motion.div
                  key={r.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group bg-card shadow-luxury rounded-sm overflow-hidden"
                >
                  <div className="overflow-hidden aspect-[4/3]">
                    <img
                      src={r.image}
                      alt={r.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {r.name}
                    </h3>
                    <p className="text-muted-foreground text-sm font-body leading-relaxed mb-4">
                      {r.desc}
                    </p>
                    <Link
                      to={`/quarto/${r.id}`}
                      className="inline-flex items-center gap-2 text-accent text-sm font-semibold tracking-wider uppercase hover:gap-3 transition-all duration-300"
                    >
                      Saber Mais →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default RoomDetail;
