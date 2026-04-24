import { motion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";
import { buildWhatsAppLink, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

const CTASection = () => {
  return (
    <section id="contato" className="py-24 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 md:p-20 text-center shadow-elevated"
        >
          <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-pink-soft/30 blur-3xl" />
          <div className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-lilac-soft/30 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(0_0%_0%/0.5),transparent_50%)]" />

          <div className="relative">
            <Sparkles className="w-10 h-10 text-primary-foreground/80 mx-auto mb-4" />
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-primary-foreground leading-tight max-w-3xl mx-auto">
              Pronta para viver um <span className="font-script text-6xl md:text-8xl italic">novo capítulo</span>?
            </h2>
            <p className="mt-6 text-primary-foreground/85 text-lg md:text-xl max-w-xl mx-auto">
              Fale agora com nossa consultora e monte seu pedido pelo WhatsApp. Atendimento sigiloso, rápido e sem julgamentos.
            </p>

            <a
              href={buildWhatsAppLink("Olá SV! Quero montar meu pedido especial 💕")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 px-10 py-5 rounded-full bg-background text-foreground font-medium text-lg hover:scale-105 transition-smooth shadow-2xl"
            >
              <MessageCircle className="w-5 h-5 text-primary" />
              Chamar no WhatsApp
            </a>
            <p className="mt-5 text-primary-foreground/80 text-sm tracking-widest">
              {WHATSAPP_DISPLAY}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
