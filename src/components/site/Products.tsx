import { motion } from "framer-motion";
import { MessageCircle, Heart } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import p1 from "@/assets/sv-prod-1.jpeg";
import p2 from "@/assets/sv-prod-2.jpeg";
import p3 from "@/assets/sv-prod-3.jpeg";
import p4 from "@/assets/sv-prod-4.jpeg";
import p5 from "@/assets/sv-prod-5.jpeg";
import p6 from "@/assets/sv-prod-6.jpeg";
import p7 from "@/assets/sv-prod-7.jpeg";
import p8 from "@/assets/sv-prod-8.jpeg";

// EDITAR PREÇOS AQUI ↓
const products = [
  { name: "Camisola Renda Vermelha", category: "Lingerie", price: "R$ 149,90", oldPrice: "R$ 199,90", img: p1, badge: "Mais vendido" },
  { name: "Conjunto Renda Magenta", category: "Lingerie", price: "R$ 129,90", img: p2, badge: "Novo" },
  { name: "Conjunto Poá Paixão", category: "Lingerie", price: "R$ 139,90", img: p3 },
  { name: "Vibrador Slim Color", category: "Acessórios", price: "R$ 159,00", oldPrice: "R$ 199,00", img: p4, badge: "Edição Limitada" },
  { name: "Bolinhas Sexy Balls", category: "Cosméticos", price: "R$ 19,90", img: p5 },
  { name: "Gel Blow Girl Morango", category: "Cosméticos", price: "R$ 49,90", img: p6 },
  { name: "Plug Joia Rosa", category: "Acessórios", price: "R$ 89,90", img: p7 },
  { name: "Kit Géis Beijáveis", category: "Cosméticos", price: "R$ 39,90", img: p8 },
];

const ProductCard = ({ p, i }: { p: typeof products[number]; i: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
    className="group relative flex flex-col rounded-2xl overflow-hidden bg-gradient-card border border-border/60 hover:border-primary/60 transition-smooth shadow-card-pink hover:-translate-y-1"
  >
    <div className="relative aspect-[4/5] overflow-hidden bg-muted">
      <img
        src={p.img}
        alt={p.name}
        loading="lazy"
        className="w-full h-full object-cover transition-smooth duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-smooth" />

      {p.badge && (
        <span className="absolute top-4 left-4 text-[0.65rem] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow">
          {p.badge}
        </span>
      )}
      <button
        aria-label="Favoritar"
        className="absolute top-4 right-4 w-9 h-9 rounded-full bg-background/70 backdrop-blur-md border border-border/60 flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary/60 transition-smooth"
      >
        <Heart className="w-4 h-4" strokeWidth={1.5} />
      </button>

      <a
        href={buildWhatsAppLink(`Olá SV! Quero saber mais sobre: ${p.name} (${p.price})`)}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-x-4 bottom-4 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-primary text-primary-foreground text-sm font-medium opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-smooth shadow-glow"
      >
        <MessageCircle className="w-4 h-4" /> Quero esse
      </a>
    </div>

    <div className="p-5 flex flex-col gap-2">
      <span className="text-[0.65rem] uppercase tracking-[0.25em] text-primary-glow">{p.category}</span>
      <h3 className="font-display text-xl leading-tight text-foreground">{p.name}</h3>
      <div className="flex items-baseline gap-2 mt-1">
        <span className="font-display text-2xl text-gradient font-semibold">{p.price}</span>
        {p.oldPrice && (
          <span className="text-sm text-muted-foreground line-through">{p.oldPrice}</span>
        )}
      </div>
    </div>
  </motion.div>
);

const Products = () => {
  return (
    <section id="vitrine" className="py-24 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="font-script text-4xl text-primary-glow mb-2">vitrine</p>
            <h2 className="font-display text-4xl md:text-6xl font-light leading-tight">
              Selecionados com <span className="text-gradient italic">amor</span> para você
            </h2>
          </div>
          <a
            href={buildWhatsAppLink("Quero ver o catálogo completo da SV Sex Shop ✨")}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-end inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/40 bg-primary/10 text-primary-glow hover:bg-primary/20 transition-smooth"
          >
            Ver catálogo completo →
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((p, i) => <ProductCard key={p.name} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
};

export default Products;
