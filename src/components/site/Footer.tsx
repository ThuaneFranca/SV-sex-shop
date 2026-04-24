import { MessageCircle, MapPin, Mail, Clock } from "lucide-react";
import { FiInstagram as Instagram } from "react-icons/fi";
import { buildWhatsAppLink, WHATSAPP_DISPLAY } from "@/lib/whatsapp";
import logo from "@/assets/sv-logo-real.jpeg";

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-10 border-t border-border/60">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-14">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="SV Sex Shop" className="h-14 w-14 rounded-full object-cover ring-2 ring-primary/60 shadow-glow" />
              <div>
                <div className="font-display text-3xl text-gradient font-semibold leading-none">SV Sex Shop</div>
                <div className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground mt-1">Boutique sensual</div>
              </div>
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Lingeries, cosméticos e acessórios para despertar o desejo com discrição, carinho e sofisticação.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/_sv_sex_shop/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full border border-border bg-card/50 flex items-center justify-center hover:bg-gradient-primary hover:border-transparent hover:scale-110 transition-smooth"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-11 h-11 rounded-full border border-border bg-card/50 flex items-center justify-center hover:bg-gradient-primary hover:border-transparent hover:scale-110 transition-smooth"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Navegação</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {[
                ["Início", "#inicio"],
                ["Categorias", "#categorias"],
                ["Vitrine", "#vitrine"],
                ["Sobre", "#sobre"],
                ["Contato", "#contato"],
              ].map(([l, h]) => (
                <li key={h}>
                  <a href={h} className="hover:text-primary transition-smooth">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>contato@svsexshop.com.br</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>São Paulo, SP</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>Seg a Sáb · 9h às 22h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/60 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} SV Sex Shop. Todos os direitos reservados.</p>
          <p className="tracking-wider">Conteúdo destinado a maiores de 18 anos.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
