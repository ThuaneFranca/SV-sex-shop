import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { FiInstagram as Instagram } from "react-icons/fi";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import img from "@/assets/cat-fetiche.jpg";
import logo from "@/assets/sv-logo-real.jpeg";

const About = () => {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-elevated">
            <img src={img} alt="SV Sex Shop boutique" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-primary/20 mix-blend-overlay" />
          </div>
          <div className="absolute -bottom-8 -right-4 md:-right-8 px-5 py-4 rounded-2xl bg-background/90 backdrop-blur-xl border border-primary/30 shadow-glow flex items-center gap-3">
            <img src={logo} alt="SV Sex Shop logo" className="h-14 w-14 rounded-full object-cover ring-2 ring-primary/60" />
            <div>
              <div className="font-script text-3xl text-gradient leading-none">Sex Shop</div>
              <div className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground mt-1">Desde 2020</div>
            </div>
          </div>
          <div className="absolute -top-6 -left-4 md:-left-8 w-24 h-24 rounded-full bg-gradient-primary blur-2xl opacity-60 animate-pulse-glow" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-script text-4xl text-primary-glow mb-2">sobre nós</p>
          <h2 className="font-display text-4xl md:text-5xl font-light leading-tight">
            Mais que produtos, <span className="text-gradient italic">experiências</span> que conectam.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            A <span className="text-foreground">SV Sex Shop</span> nasceu para oferecer um atendimento personalizado, acolhedor e totalmente sigiloso. Curamos cada peça da nossa coleção pensando em prazer, autoestima e cumplicidade — para mulheres, homens e casais que querem viver o desejo sem preconceitos.
          </p>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Embalagem discreta, entrega rápida e uma consultora pronta para te ajudar a escolher o produto perfeito.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={buildWhatsAppLink("Olá! Quero falar com a consultora da SV ✨")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-105 transition-smooth"
            >
              <MessageCircle className="w-4 h-4" /> Falar com consultora
            </a>
            <a
              href="https://www.instagram.com/_sv_sex_shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card/50 hover:border-primary/60 hover:bg-card transition-smooth"
            >
              <Instagram className="w-4 h-4" /> @_sv_sex_shop
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { n: "5★", l: "Avaliação" },
              { n: "+2k", l: "Clientes felizes" },
              { n: "100%", l: "Sigilo" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl text-gradient font-semibold">{s.n}</div>
                <div className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
