import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import lingerie from "@/assets/cat-lingerie.jpg";
import cosmeticos from "@/assets/cat-cosmeticos.jpg";
import acessorios from "@/assets/cat-acessorios.jpg";
import jogos from "@/assets/cat-jogos.jpg";
import fetiche from "@/assets/cat-fetiche.jpg";
import presentes from "@/assets/cat-presentes.jpg";

const cats = [
  { name: "Lingerie & Moda Íntima", img: lingerie, span: "md:col-span-2 md:row-span-2", tag: "Sedução" },
  { name: "Cosméticos Sensuais", img: cosmeticos, span: "", tag: "Sensorial" },
  { name: "Acessórios", img: acessorios, span: "", tag: "Prazer" },
  { name: "Jogos para Casais", img: jogos, span: "", tag: "Diversão" },
  { name: "Fetiche & Bondage", img: fetiche, span: "", tag: "Ousado" },
  { name: "Kits & Presentes", img: presentes, span: "md:col-span-2", tag: "Surpresa" },
];

const Categories = () => {
  return (
    <section id="categorias" className="py-24 relative">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <p className="font-script text-4xl text-primary-glow mb-2">categorias</p>
          <h2 className="font-display text-4xl md:text-6xl font-light leading-tight">
            Universos de <span className="text-gradient italic">prazer</span> para todos os desejos
          </h2>
          <div className="divider-ornament mt-8 max-w-sm">✦</div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] md:auto-rows-[260px] gap-4">
          {cats.map((c, i) => (
            <motion.a
              key={c.name}
              href={buildWhatsAppLink(`Olá! Quero conhecer a categoria: ${c.name}`)}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl border border-border/60 hover:border-primary/60 transition-smooth ${c.span}`}
            >
              <img
                src={c.img}
                alt={c.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-smooth duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/15 transition-smooth mix-blend-overlay" />
              <div className="absolute inset-0 p-5 md:p-7 flex flex-col justify-between">
                <span className="self-start text-[0.65rem] uppercase tracking-[0.25em] px-3 py-1 rounded-full bg-background/60 backdrop-blur-md border border-border/60 text-primary-glow">
                  {c.tag}
                </span>
                <div className="flex items-end justify-between gap-3">
                  <h3 className="font-display text-2xl md:text-3xl leading-tight text-foreground drop-shadow-lg">{c.name}</h3>
                  <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-smooth">
                    <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
