import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Mail, Clock, Phone, Menu, X } from "lucide-react";


const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Quartos", href: "/#quartos" },
  { label: "Galeria", href: "/#galeria" },
  { label: "Contactos", href: "/#contactos" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div
        className={`bg-gradient-ocean text-primary-foreground text-sm py-2.5 hidden md:block fixed left-0 right-0 z-50 transition-transform duration-500 ${
          scrolled ? "-translate-y-full" : "top-0"
        }`}
      >
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-gold" />
              Restinga do Lobito, Angola
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-gold" />
              Geral@oceanoboutiquehotel.com
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-gold" />
              09:00 – 17:00
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-gold" />
            (+244) 935 999 463
          </div>
        </div>
      </div>

      {/* Navigation */}
      <motion.nav
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "top-0 bg-card/95 backdrop-blur-md shadow-luxury py-3"
            : "md:top-[42px] top-0 bg-transparent py-5"
        }`}
      >
        <div className="container flex items-center justify-between">
          <a href="#home">
            <img src='/logo1.png' alt="Oceano Boutique Hotel" className="h-24 md:h-28" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${
                  scrolled
                    ? "text-foreground hover:text-accent"
                    : "text-primary-foreground hover:text-gold"
                }`}
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/reservas"
              className="bg-accent text-accent-foreground px-5 py-2.5 text-sm font-semibold tracking-wider uppercase rounded-sm hover:shadow-gold transition-all duration-300"
            >
              Reservar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-card/95 backdrop-blur-md"
            >
              <div className="container py-6 flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-foreground text-sm font-medium tracking-wider uppercase hover:text-accent transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <Link
                  to="/reservas"
                  onClick={() => setMobileOpen(false)}
                  className="bg-accent text-accent-foreground px-5 py-2.5 text-sm font-semibold tracking-wider uppercase rounded-sm text-center"
                >
                  Reservar
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Header;
