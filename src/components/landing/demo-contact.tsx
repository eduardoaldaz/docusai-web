import { ArrowRight, Calendar, Mail, MessageCircle } from 'lucide-react';
import { SITE, whatsappLink } from '@/lib/brand';

const ASUNTO = 'Quiero una demo de DocusAI';

/** Demo request without a backend: booking link, WhatsApp and email (same channels as servisdigital.com). */
export function DemoContact() {
  const whatsapps = (
    [
      ['España', SITE.whatsapp.ES],
      ['Ecuador', SITE.whatsapp.EC],
    ] as const
  ).filter(([, n]) => n);

  return (
    <div className="flex flex-col gap-5 rounded-xl border border-line bg-surface p-6 text-ink">
      <div>
        <p className="font-display text-[22px] font-bold tracking-[-0.02em]">Agenda la demo</p>
        <p className="mt-1 text-[14px] text-ink-2">Trae un lote de facturas reales. Te respondemos en menos de un día laborable.</p>
      </div>
      {SITE.bookingUrl && (
        <a
          href={SITE.bookingUrl}
          target="_blank"
          rel="noopener"
          className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-6 text-[15px] font-semibold text-white transition-colors hover:bg-brand-hover"
        >
          <Calendar className="size-4" aria-hidden /> Elegir día y hora
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </a>
      )}
      <ul className="flex flex-col gap-3 border-t border-line pt-5 text-[15px]">
        {whatsapps.map(([pais, n]) => (
          <li key={pais}>
            <a href={whatsappLink(n!, `Hola, ${ASUNTO.toLowerCase()}.`)} target="_blank" rel="noopener" className="inline-flex items-center gap-2.5 hover:text-brand">
              <MessageCircle className="size-4 text-brand" aria-hidden /> WhatsApp {pais}
            </a>
          </li>
        ))}
        <li>
          <a href={`mailto:${SITE.email}?subject=${encodeURIComponent(ASUNTO)}`} className="inline-flex items-center gap-2.5 hover:text-brand">
            <Mail className="size-4 text-brand" aria-hidden /> {SITE.email}
          </a>
        </li>
      </ul>
    </div>
  );
}
