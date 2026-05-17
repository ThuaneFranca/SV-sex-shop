import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "A embalagem é mesmo discreta?", a: "Sim! Toda compra vai em embalagem neutra, sem qualquer identificação do conteúdo ou da loja. Ninguém saberá o que tem dentro além de você." },
  { q: "Como funciona a entrega?", a: "Fazemos entrega expressa em São Paulo capital e enviamos para todo o Brasil pelos Correios e transportadoras. O prazo é informado no momento do pedido." },
  { q: "Quais formas de pagamento vocês aceitam?", a: "Pix (com desconto), cartão de crédito em até 6x sem juros e dinheiro na entrega para regiões selecionadas." },
  { q: "Posso trocar ou devolver?", a: "Por questões de higiene, alguns produtos não podem ser trocados. Itens como lingerie e jogos podem ser trocados em até 7 dias se não utilizados. Fale com nossa consultora." },
  { q: "Vocês têm loja física?", a: "Atendemos prioritariamente online via WhatsApp para garantir o sigilo total. Em breve, novidades sobre showroom." },
];

const FAQ = () => {
  return (
    <section className="py-24 relative">
      <div className="container max-w-3xl">
        <div className="text-center mb-14">
          <p className="font-script text-4xl text-primary-glow mb-2">dúvidas</p>
          <h2 className="font-display text-4xl md:text-5xl font-light">
            Tudo que você precisa <span className="text-gradient italic">saber</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border/60 rounded-2xl bg-gradient-card px-6 data-[state=open]:border-primary/50 transition-smooth"
            >
              <AccordionTrigger className="font-display text-lg md:text-xl text-left hover:no-underline hover:text-primary-glow py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
