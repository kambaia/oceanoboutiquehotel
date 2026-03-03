import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CalendarCheck,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
  MapPin,
  Clock,
  Shield,
  Tag,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { rooms } from "@/data/rooms";

const Reservas = () => {
  const [searchParams] = useSearchParams();
  const preSelectedRoom = searchParams.get("quarto") ?? "";

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    room: preSelectedRoom,
    checkin: "",
    checkout: "",
    adults: "1",
    children: "0",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  useEffect(() => {
    if (preSelectedRoom) {
      setForm((f) => ({ ...f, room: preSelectedRoom }));
    }
  }, [preSelectedRoom]);

  const set = (field: string, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const inputClass =
    "w-full bg-background border border-border text-foreground rounded-sm px-4 py-3 text-sm font-body focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground";

  const labelClass =
    "block text-xs font-body tracking-wider uppercase text-muted-foreground mb-1.5";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-ocean" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-40" />
        {/* Decorative orbs */}
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />

        {/* Back link */}
        <div className="absolute top-0 left-0 right-0 pt-28 md:pt-36">
          <div className="container">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-body tracking-wider transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Início
            </Link>
          </div>
        </div>

        {/* Title */}
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
                Fazer uma <span className="italic">Reserva</span>
              </h1>
              <p className="text-white/70 font-body mt-3 text-base">
                Reserve directamente connosco e garanta o melhor preço
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container">

          {submitted ? (
            /* ── Success State ── */
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-10 h-10 text-accent" />
              </div>
              <p className="text-accent font-body text-sm tracking-[0.25em] uppercase mb-3">
                Pedido enviado
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Reserva <span className="italic">recebida</span>!
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed text-base mb-10">
                O seu pedido de reserva foi recebido com sucesso. A nossa equipa
                entrará em contacto consigo em breve para confirmar a
                disponibilidade e os detalhes da sua estadia.
              </p>

              <div className="bg-card shadow-luxury rounded-sm p-8 text-left mb-10">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-6">
                  Resumo do pedido
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 text-sm font-body">
                  {form.room && (
                    <div>
                      <span className="text-muted-foreground uppercase tracking-wider text-xs">Quarto</span>
                      <p className="text-foreground font-medium mt-1">
                        {rooms.find((r) => r.id === form.room)?.name ?? form.room}
                      </p>
                    </div>
                  )}
                  {form.checkin && (
                    <div>
                      <span className="text-muted-foreground uppercase tracking-wider text-xs">Entrada</span>
                      <p className="text-foreground font-medium mt-1">
                        {new Date(form.checkin).toLocaleDateString("pt-PT", {
                          day: "2-digit", month: "long", year: "numeric",
                        })}
                      </p>
                    </div>
                  )}
                  {form.checkout && (
                    <div>
                      <span className="text-muted-foreground uppercase tracking-wider text-xs">Saída</span>
                      <p className="text-foreground font-medium mt-1">
                        {new Date(form.checkout).toLocaleDateString("pt-PT", {
                          day: "2-digit", month: "long", year: "numeric",
                        })}
                      </p>
                    </div>
                  )}
                  <div>
                    <span className="text-muted-foreground uppercase tracking-wider text-xs">Hóspedes</span>
                    <p className="text-foreground font-medium mt-1">
                      {form.adults} adulto{form.adults !== "1" ? "s" : ""}
                      {form.children !== "0"
                        ? `, ${form.children} criança${form.children !== "1" ? "s" : ""}`
                        : ""}
                    </p>
                  </div>
                  <div>
                    <span className="text-muted-foreground uppercase tracking-wider text-xs">Nome</span>
                    <p className="text-foreground font-medium mt-1">{form.name}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground uppercase tracking-wider text-xs">Email</span>
                    <p className="text-foreground font-medium mt-1">{form.email}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setSubmitted(false)}
                  className="border border-border text-foreground/70 hover:text-accent hover:border-accent px-8 py-3 text-sm font-semibold tracking-wider uppercase rounded-sm transition-all duration-300"
                >
                  Nova Reserva
                </button>
                <Link
                  to="/"
                  className="bg-accent text-accent-foreground px-8 py-3 text-sm font-semibold tracking-wider uppercase rounded-sm hover:shadow-gold transition-all duration-300 text-center"
                >
                  Voltar ao Início
                </Link>
              </div>
            </motion.div>
          ) : (
            /* ── Form + Sidebar ── */
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <form onSubmit={handleSubmit} className="space-y-10">

                  {/* Section 1 — Estadia */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <CalendarCheck className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <p className="text-accent font-body text-xs tracking-[0.25em] uppercase">
                          Passo 1
                        </p>
                        <h2 className="font-heading text-xl font-semibold text-foreground">
                          Detalhes da Estadia
                        </h2>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Room */}
                      <div className="sm:col-span-2">
                        <label className={labelClass}>Quarto</label>
                        <select
                          value={form.room}
                          onChange={(e) => set("room", e.target.value)}
                          className={inputClass}
                        >
                          <option value="">Selecionar quarto (opcional)</option>
                          {rooms.map((r) => (
                            <option key={r.id} value={r.id}>
                              {r.name} — {r.size} · Até {r.guests} hóspede{r.guests > 1 ? "s" : ""}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Check-in */}
                      <div>
                        <label className={labelClass}>Data de Entrada *</label>
                        <input
                          required
                          type="date"
                          value={form.checkin}
                          min={new Date().toISOString().split("T")[0]}
                          onChange={(e) => set("checkin", e.target.value)}
                          className={inputClass}
                        />
                      </div>

                      {/* Check-out */}
                      <div>
                        <label className={labelClass}>Data de Saída *</label>
                        <input
                          required
                          type="date"
                          value={form.checkout}
                          min={form.checkin || new Date().toISOString().split("T")[0]}
                          onChange={(e) => set("checkout", e.target.value)}
                          className={inputClass}
                        />
                      </div>

                      {/* Adults */}
                      <div>
                        <label className={labelClass}>Adultos *</label>
                        <select
                          value={form.adults}
                          onChange={(e) => set("adults", e.target.value)}
                          className={inputClass}
                        >
                          {[1, 2, 3, 4].map((n) => (
                            <option key={n} value={n}>
                              {n} {n === 1 ? "Adulto" : "Adultos"}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Children */}
                      <div>
                        <label className={labelClass}>Crianças</label>
                        <select
                          value={form.children}
                          onChange={(e) => set("children", e.target.value)}
                          className={inputClass}
                        >
                          {[0, 1, 2, 3, 4].map((n) => (
                            <option key={n} value={n}>
                              {n} {n === 1 ? "Criança" : "Crianças"}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-px bg-border" />

                  {/* Section 2 — Dados pessoais */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <User className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <p className="text-accent font-body text-xs tracking-[0.25em] uppercase">
                          Passo 2
                        </p>
                        <h2 className="font-heading text-xl font-semibold text-foreground">
                          Dados do Hóspede
                        </h2>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="sm:col-span-2">
                        <label className={labelClass}>Nome Completo *</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <input
                            required
                            type="text"
                            placeholder="O seu nome completo"
                            value={form.name}
                            onChange={(e) => set("name", e.target.value)}
                            className={`${inputClass} pl-11`}
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className={labelClass}>Email *</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <input
                            required
                            type="email"
                            placeholder="email@exemplo.com"
                            value={form.email}
                            onChange={(e) => set("email", e.target.value)}
                            className={`${inputClass} pl-11`}
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label className={labelClass}>Telefone *</label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <input
                            required
                            type="tel"
                            placeholder="(+244) 900 000 000"
                            value={form.phone}
                            onChange={(e) => set("phone", e.target.value)}
                            className={`${inputClass} pl-11`}
                          />
                        </div>
                      </div>

                      {/* Notes */}
                      <div className="sm:col-span-2">
                        <label className={labelClass}>Pedidos Especiais</label>
                        <div className="relative">
                          <MessageSquare className="absolute left-4 top-3.5 w-4 h-4 text-muted-foreground" />
                          <textarea
                            rows={4}
                            placeholder="Pedidos especiais, preferências de quarto, alergias alimentares…"
                            value={form.notes}
                            onChange={(e) => set("notes", e.target.value)}
                            className={`${inputClass} pl-11 resize-none`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-px bg-border" />

                  {/* Submit */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <button
                      type="submit"
                      className="flex items-center gap-2 bg-accent text-accent-foreground px-10 py-4 text-sm font-semibold tracking-wider uppercase rounded-sm hover:shadow-gold transition-all duration-300"
                    >
                      <CalendarCheck className="w-4 h-4" />
                      Confirmar Pedido de Reserva
                    </button>
                    <p className="text-muted-foreground text-xs font-body leading-relaxed">
                      * Campos obrigatórios. A reserva fica sujeita a confirmação.
                    </p>
                  </div>
                </form>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                {/* Contact card */}
                <div className="bg-card shadow-luxury rounded-sm p-8">
                  <p className="text-accent font-body text-xs tracking-[0.25em] uppercase mb-4">
                    Prefere contactar-nos?
                  </p>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-6">
                    Estamos disponíveis
                  </h3>
                  <div className="flex flex-col gap-4 mb-8">
                    <a
                      href="tel:+244935999463"
                      className="flex items-center gap-3 text-sm text-muted-foreground font-body hover:text-accent transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <Phone className="w-3.5 h-3.5 text-accent" />
                      </div>
                      (+244) 935 999 463
                    </a>
                    <a
                      href="mailto:Geral@oceanoboutiquehotel.com"
                      className="flex items-center gap-3 text-sm text-muted-foreground font-body hover:text-accent transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <Mail className="w-3.5 h-3.5 text-accent" />
                      </div>
                      Geral@oceanoboutiquehotel.com
                    </a>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground font-body">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <Clock className="w-3.5 h-3.5 text-accent" />
                      </div>
                      09:00 – 17:00 (Segunda a Sábado)
                    </div>
                    <div className="flex items-start gap-3 text-sm text-muted-foreground font-body">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-accent" />
                      </div>
                      Restinga do Lobito, Angola
                    </div>
                  </div>
                </div>

                {/* Why book direct */}
                <div className="bg-card shadow-luxury rounded-sm p-8">
                  <p className="text-accent font-body text-xs tracking-[0.25em] uppercase mb-4">
                    Vantagens
                  </p>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-6">
                    Porquê reservar directo?
                  </h3>
                  <div className="flex flex-col gap-4">
                    {[
                      { icon: Tag, text: "Melhor preço garantido" },
                      { icon: Shield, text: "Reserva sem comissões" },
                      { icon: CheckCircle2, text: "Confirmação personalizada" },
                      { icon: Phone, text: "Apoio directo da nossa equipa" },
                    ].map(({ icon: Icon, text }) => (
                      <div key={text} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                          <Icon className="w-3 h-3 text-accent" />
                        </div>
                        <span className="text-sm font-body text-foreground/80">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rooms quick links */}
                <div className="bg-secondary rounded-sm p-8">
                  <p className="text-accent font-body text-xs tracking-[0.25em] uppercase mb-4">
                    Explore
                  </p>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                    Os nossos Quartos
                  </h3>
                  <div className="flex flex-col gap-2">
                    {rooms.map((r) => (
                      <Link
                        key={r.id}
                        to={`/quarto/${r.id}`}
                        className="text-sm font-body text-muted-foreground hover:text-accent transition-colors flex items-center justify-between group py-1"
                      >
                        <span>{r.name}</span>
                        <span className="text-muted-foreground/50 group-hover:text-accent text-xs">
                          {r.size} →
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reservas;
