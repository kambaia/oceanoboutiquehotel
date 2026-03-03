import { motion } from "framer-motion";
import { useState } from "react";

const today = new Date().toISOString().split("T")[0];

const BookingSection = () => {
  const [form, setForm] = useState({
    checkin: today,
    checkout: "",
    adults: "1",
    children: "0",
  });

  return (
    <section id="reservar" className="py-24 bg-gradient-ocean relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gold font-body text-sm tracking-[0.25em] uppercase mb-3">
            Planeie a sua estadia
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
            Reservar um <span className="italic">Quarto</span>
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto bg-card/10 backdrop-blur-sm border border-primary-foreground/10 rounded-sm p-6 md:p-10"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-primary-foreground/70 text-xs tracking-wider uppercase font-body">
                Entrada
              </label>
              <input
                type="date"
                value={form.checkin}
                onChange={(e) => setForm({ ...form, checkin: e.target.value })}
                className="bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground rounded-sm px-4 py-3 text-sm font-body focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-primary-foreground/70 text-xs tracking-wider uppercase font-body">
                Saída
              </label>
              <input
                type="date"
                value={form.checkout}
                onChange={(e) => setForm({ ...form, checkout: e.target.value })}
                className="bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground rounded-sm px-4 py-3 text-sm font-body focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-primary-foreground/70 text-xs tracking-wider uppercase font-body">
                Adultos
              </label>
              <select
                value={form.adults}
                onChange={(e) => setForm({ ...form, adults: e.target.value })}
                className="bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground rounded-sm px-4 py-3 text-sm font-body focus:outline-none focus:border-gold transition-colors appearance-none"
              >
                {[1, 2, 3, 4].map((n) => (
                  <option key={n} value={n} className="text-foreground">
                    {n} {n === 1 ? "Adulto" : "Adultos"}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-primary-foreground/70 text-xs tracking-wider uppercase font-body">
                Crianças
              </label>
              <select
                value={form.children}
                onChange={(e) => setForm({ ...form, children: e.target.value })}
                className="bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground rounded-sm px-4 py-3 text-sm font-body focus:outline-none focus:border-gold transition-colors appearance-none"
              >
                {[0, 1, 2, 3, 4].map((n) => (
                  <option key={n} value={n} className="text-foreground">
                    {n} {n === 1 ? "Criança" : "Crianças"}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button
              type="submit"
              className="bg-accent text-accent-foreground px-12 py-3.5 font-semibold text-sm tracking-wider uppercase rounded-sm hover:shadow-gold transition-all duration-300"
            >
              Reservar Agora
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingSection;
