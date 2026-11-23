import { Mail, MessageCircle } from 'lucide-react';
import { SITE, whatsappLink } from '@/lib/brand';

const ASUNTO = 'Quiero una demo de DocusAI';

/**
 * Demo request without a backend, same pattern as servisdigital.com/contacto: the cal.com calendar
 * inline, with WhatsApp and email underneath for whoever prefers to write.
 */
export function DemoContact() {
  const whatsapps = (
    [
      ['España', SITE.whatsapp.ES],
      ['Ecuador', SITE.whatsapp.EC],
    ] as const
  ).filter(([, n]) => n);

  return (
    <div className="overflow-hidden rounded-2xl bg-surface text-ink shadow-[0_30px_60px_-30px_rgb(0_0_0/0.6)]">
      {SITE.bookingUrl ? (
        <iframe
          src={`${SITE.bookingUrl}${SITE.bookingUrl.includes('?') ? '&' : '?'}embed=true&theme=light`}
          title="Elige día y hora para la demo de DocusAI"
          className="block h-[1000px] w-full sm:h-[640px]"
          loading="lazy"
        />
      ) : (
        <p className="p-6 text-[15px] text-ink-2">Escríbenos y te proponemos día y hora.</p>
      )}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line px-6 py-4 text-[14px]">
        <span className="text-ink-3">¿Prefieres escribirnos?</span>
        {whatsapps.map(([pais, n]) => (
          <a key={pais} href={whatsappLink(n!, `Hola, ${ASUNTO[0].toLowerCase()}${ASUNTO.slice(1)}.`)} target="_blank" rel="noopener" className="inline-flex items-center gap-2 font-medium hover:text-brand">
            <MessageCircle className="size-4 text-brand" aria-hidden /> WhatsApp {pais}
          </a>
        ))}
        <a href={`mailto:${SITE.email}?subject=${encodeURIComponent(ASUNTO)}`} className="inline-flex items-center gap-2 font-medium hover:text-brand">
          <Mail className="size-4 text-brand" aria-hidden /> {SITE.email}
        </a>
      </div>
    </div>
  );
}
