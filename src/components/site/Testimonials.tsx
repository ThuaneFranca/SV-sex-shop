import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Mariana S.",
    text: "Atendimento impecável e super discreto. O kit chegou lindo, embalado com tanto carinho. Voltarei com certeza! 💖",
    role: "Cliente desde 2023",
  },
  {
    name: "Camila & Rafael",
    text: "Compramos o jogo de cartas e o gel beijável. Foi a melhor noite que já tivemos juntos. Recomendo demais!",
    role: "Casal",
  },
  {
    name: "Juliana P.",
    text: "A consultora me ajudou a escolher meu primeiro produto sem nenhum constrangimento. Me senti acolhida do início ao fim.",
    role: "Cliente",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 relative">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="font-script text-4xl text-primary-glow mb-2">depoimentos</p>
          <h2 className="font-display text-4xl md:text-5xl font-light leading-tight">
            O carinho de quem já <span className="text-gradient italic">viveu</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative p-8 rounded-2xl bg-gradient-card border border-border/60 hover:border-primary/50 transition-smooth"
            >
              <Quote className="w-10 h-10 text-primary/40 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, k) => (
                  <Star key={k} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed font-display text-lg italic">
                "{r.text}"
              </p>
              <div className="mt-6 pt-6 border-t border-border/40">
                <div className="font-display text-lg text-gradient">{r.name}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{r.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
