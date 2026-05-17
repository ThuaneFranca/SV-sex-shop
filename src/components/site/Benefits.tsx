import { motion } from "framer-motion";
import { Truck, Lock, HeartHandshake, CreditCard } from "lucide-react";

const items = [
  { icon: Lock, title: "Embalagem Discreta", desc: "Sem identificação do produto na embalagem." },
  { icon: Truck, title: "Entrega Rápida", desc: "Express em SP e envio para todo o Brasil." },
  { icon: CreditCard, title: "Pagamento Fácil", desc: "Pix, cartão e parcelamento sem juros." },
  { icon: HeartHandshake, title: "Atendimento Sigiloso", desc: "Consultoria humana, sem julgamentos." },
];

const Benefits = () => {
  return (
    <section className="py-20 relative">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative p-6 md:p-8 rounded-2xl bg-gradient-card border border-border/60 hover:border-primary/50 transition-smooth overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/30 transition-smooth" />
              <it.icon className="relative w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="relative font-display text-xl md:text-2xl text-foreground mb-2">{it.title}</h3>
              <p className="relative text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
