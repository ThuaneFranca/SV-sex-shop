import { motion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import hero from "@/assets/hero-silk.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background image with overlays */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="SV Sex Shop — atmosfera sensual em rosa e lilás"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-radial-glow" />
      </div>

      {/* Floating ornaments */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-primary/30 blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-secondary/25 blur-[140px] animate-float" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-sm text-xs uppercase tracking-[0.3em] text-primary-glow mb-8"
          >
            <Sparkles className="w-3 h-3" /> Boutique sensual · Discrição garantida
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight"
          >
            Desperte o <span className="font-script text-7xl md:text-8xl lg:text-9xl text-gradient italic">desejo</span><br />
            que mora em você
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            Lingeries, cosméticos, acessórios e presentes selecionados a dedo pela <span className="text-foreground">SV Sex Shop</span> para transformar momentos em memórias inesquecíveis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={buildWhatsAppLink("Olá SV! Quero fazer um pedido especial 💕")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-primary text-primary-foreground font-medium tracking-wide shadow-glow hover:scale-105 transition-smooth animate-pulse-glow"
            >
              <MessageCircle className="w-5 h-5" />
              Fazer pedido no WhatsApp
            </a>
            <a
              href="#vitrine"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border bg-card/50 backdrop-blur-md text-foreground hover:border-primary/60 hover:bg-card transition-smooth"
            >
              Explorar vitrine
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 grid grid-cols-3 gap-6 max-w-lg"
          >
            {[
              { n: "+500", l: "Produtos" },
              { n: "100%", l: "Discreto" },
              { n: "24h", l: "Atendimento" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-3xl md:text-4xl text-gradient font-semibold">{s.n}</div>
                <div className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 inset-x-0 overflow-hidden border-y border-border/40 bg-background/40 backdrop-blur-sm py-4">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center">
              {["Embalagem Discreta ✦", "Entrega para Todo Brasil ✦", "Pagamento Facilitado ✦", "Atendimento Sigiloso ✦", "Produtos Selecionados ✦", "Frete Express SP ✦"].map((t) => (
                <span key={t} className="font-display italic text-lg text-foreground/70 tracking-wide">{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
