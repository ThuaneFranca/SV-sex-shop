export const WHATSAPP_NUMBER = '5511946746821';
export const WHATSAPP_DISPLAY = '(11) 94674-6821';

export function buildWhatsAppLink(message?: string) {
  const text = message ? encodeURIComponent(message) : '';
  return 'https://wa.me/' + WHATSAPP_NUMBER + (text ? '?text=' + text : '');
}