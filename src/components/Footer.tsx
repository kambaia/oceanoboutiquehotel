import { MapPin, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer id="contactos" className="bg-ocean-deep text-primary-foreground">
      <div className="container py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="Oceano Boutique Hotel" className="h-14 mb-6" />
            <p className="text-primary-foreground/60 text-sm font-body leading-relaxed">
              O Oceano Boutique Hotel oferece uma experiência única de luxo e
              conforto à beira-mar na Restinga do Lobito.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Menu</h4>
            <div className="flex flex-col gap-3">
              {["Home", "Sobre", "Quartos", "Galeria", "Contactos"].map((l) => (
                <a
                  key={l}
                  href={`/#${l.toLowerCase()}`}
                  className="text-primary-foreground/60 text-sm font-body hover:text-gold transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Contactos</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-primary-foreground/60 text-sm font-body">
                  Restinga do Lobito, Angola
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <a
                  href="mailto:Geral@oceanoboutiquehotel.com"
                  className="text-primary-foreground/60 text-sm font-body hover:text-gold transition-colors"
                >
                  Geral@oceanoboutiquehotel.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-primary-foreground/60 text-sm font-body">
                  (+244) 935 999 463
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 text-center">
          <p className="text-primary-foreground/40 text-xs font-body">
            © {new Date().getFullYear()} Oceano Boutique Hotel. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
