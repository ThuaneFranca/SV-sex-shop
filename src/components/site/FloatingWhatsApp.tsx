import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const FloatingWhatsApp = () => {
  return (
    <a
      href={buildWhatsAppLink("Olá SV! Vim pelo site 💕")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
      <span className="relative flex items-center gap-2 px-5 py-4 rounded-full bg-gradient-primary text-primary-foreground shadow-glow hover:scale-110 transition-smooth">
        <MessageCircle className="w-6 h-6" />
        <span className="hidden sm:inline font-medium pr-1">Pedir agora</span>
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
