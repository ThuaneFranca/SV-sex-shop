import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import logo from "@/assets/sv-logo-real.jpeg";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Categorias", href: "#categorias" },
  { label: "Vitrine", href: "#vitrine" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 group">
          <img src={logo} alt="SV Sex Shop" className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/60 shadow-glow transition-smooth group-hover:scale-110" />
          <div className="leading-none">
            <div className="font-display text-2xl tracking-wide text-gradient font-semibold">SV</div>
            <div className="text-[0.625rem] uppercase tracking-[0.3em] text-muted-foreground">Sex Shop</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm uppercase tracking-widest text-foreground/80 hover:text-primary transition-smooth relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-500"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={buildWhatsAppLink("Olá! Gostaria de fazer um pedido na SV Sex Shop ✨")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-primary text-primary-foreground text-sm font-medium tracking-wide shadow-glow hover:scale-105 transition-smooth"
        >
          <MessageCircle className="w-4 h-4" /> Pedir no WhatsApp
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-foreground p-2"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/60 animate-fade-in">
          <div className="container py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base uppercase tracking-widest text-foreground/80 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-primary text-primary-foreground text-sm font-medium tracking-wide shadow-glow"
            >
              <MessageCircle className="w-4 h-4" /> Pedir no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
