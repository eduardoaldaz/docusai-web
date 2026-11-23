import { ArrowRight, Check, FileSpreadsheet, Lock, Mail, ScanLine, ShieldCheck, Upload } from 'lucide-react';
import { BRAND } from '@/lib/brand';
import { DemoContact } from '@/components/landing/demo-contact';
import { ProductDemo } from '@/components/landing/product-demo';
import { Wordmark } from '@/components/ui/logo';

const CHECKS = [
  'NIF, CIF y NIE',
  'Factura a otra empresa',
  'IVA, recargo e IRPF',
  'Duplicados',
  'Rectificativas',
  'Inversión del sujeto pasivo',
  'Fechas incoherentes',
  'Proformas y albaranes',
];

const PASOS = [
  [Upload, 'Recibe', 'PDF, foto o correo.'],
  [ScanLine, 'Lee y valida', 'IA + reglas fiscales.'],
  [Check, 'Revisa lo dudoso', 'Solo las que tienen aviso.'],
  [FileSpreadsheet, 'Exporta', 'A tu programa contable o ERP.'],
] as const;

const SEGURIDAD = [
  [Lock, 'Alojado en la UE'],
  [ShieldCheck, 'Tus facturas no entrenan IA'],
  [Mail, 'Registro de cada acceso'],
  [Check, 'Borrado a petición y 2FA'],
] as const;

/** Violet band, same material as the sign-in panel. */
const PANEL = {
  background:
    'radial-gradient(110% 80% at 15% 0%, color-mix(in oklab, var(--panel-accent) 16%, transparent), transparent 60%), linear-gradient(160deg, var(--panel-to), var(--panel-from) 70%)',
};

export default function Landing() {
  return (
    <div className="bg-canvas">
      {/* Nav: dark violet, like the family (FacServis, Servis Digital) */}
      <header className="sticky top-0 z-30 bg-panel-from/95 text-white backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1160px] items-center gap-8 px-4 sm:px-6">
          <a href="#" aria-label="DocusAI, inicio" className="rounded-md">
            <Wordmark tone="light" className="text-[22px]" />
          </a>
          <nav className="hidden items-center gap-6 text-[14px] text-white/70 md:flex">
            <a href="#como-funciona" className="hover:text-white">
              Cómo funciona
            </a>
            <a href="#validacion" className="hover:text-white">
              Validación fiscal
            </a>
            <a href="#para-quien" className="hover:text-white">
              Para quién
            </a>
            <a href="#seguridad" className="hover:text-white">
              Seguridad
            </a>
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <a href="#demo" className="inline-flex h-9 items-center rounded-full bg-panel-accent px-4 text-[14px] font-semibold text-panel-from transition-colors hover:bg-white">
              Solicitar demo
            </a>
          </div>
        </div>
      </header>

      {/* Hero: violet band, the product demo straddles into the light page */}
      <section className="relative text-white" style={PANEL}>
        <div className="mx-auto max-w-[1160px] px-4 pb-44 pt-16 sm:px-6 md:pt-24">
          <h1 className="max-w-[16ch] font-display text-[clamp(40px,6vw,76px)] font-extrabold leading-[0.98] tracking-[-0.038em]">
            Facturas de proveedor, contabilizadas <span className="whitespace-nowrap text-panel-accent">sin teclear.</span>
          </h1>
          <p className="mt-6 max-w-[46ch] text-[19px] leading-relaxed text-panel-muted">La IA lee cada factura, la valida con las reglas fiscales españolas y tú solo revisas lo dudoso.</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#demo" className="group inline-flex h-12 items-center gap-2 rounded-full bg-panel-accent px-6 text-[15px] font-semibold text-panel-from transition-colors hover:bg-white">
              Solicitar demo <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#como-funciona" className="inline-flex h-12 items-center rounded-full border border-white/25 px-6 text-[15px] font-semibold text-white transition-colors hover:border-white">
              Cómo funciona
            </a>
          </div>
          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[14px] text-white/70">
            {['Sin plantillas por proveedor', 'Datos en la UE', 'Demo con tus facturas'].map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <Check className="size-4 text-panel-accent" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className="relative mx-auto -mt-32 max-w-[1160px] px-4 sm:px-6">
        <ProductDemo />
        <p className="mt-3 text-center text-xs text-ink-3">Cada valor se señala en el documento del que sale. Pasa el ratón o toca un campo.</p>
      </div>

      {/* How it works: four stops, one line each */}
      <section id="como-funciona" className="scroll-mt-16">
        <div className="mx-auto max-w-[1160px] px-4 py-24 sm:px-6">
          <h2 className="max-w-[18ch] font-display text-[clamp(32px,4.2vw,52px)] font-extrabold leading-[1.02] tracking-[-0.032em] text-ink">
            Revisas la excepción, no cada factura.
          </h2>
          <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
            <span aria-hidden className="absolute left-5 right-5 top-5 hidden h-px bg-brand-line md:block" />
            {PASOS.map(([Icon, t, d], i) => (
              <li key={t} className="relative">
                <span className={'relative flex size-10 items-center justify-center rounded-full ' + (i === 2 ? 'bg-brand text-white' : 'border border-brand-line bg-canvas text-brand')}>
                  <Icon className="size-[18px]" />
                </span>
                <h3 className="mt-5 font-display text-[22px] font-bold tracking-[-0.02em] text-ink">{t}</h3>
                <p className="mt-1 text-[15px] text-ink-2">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Fiscal validation: violet band */}
      <section id="validacion" className="scroll-mt-16 text-white" style={PANEL}>
        <div className="mx-auto grid max-w-[1160px] gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <h2 className="max-w-[14ch] font-display text-[clamp(32px,4.2vw,52px)] font-extrabold leading-[1.02] tracking-[-0.032em]">
              Hecho para la fiscalidad <span className="text-panel-accent">española.</span>
            </h2>
            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3">
              {CHECKS.map((t) => (
                <li key={t} className="flex items-center gap-2 text-[15px] text-white/90">
                  <Check className="size-4 shrink-0 text-panel-accent" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-surface p-6 text-[14px] text-ink shadow-[0_30px_60px_-30px_rgb(0_0_0/0.6)]">
            <p className="text-[13px] font-medium text-ink-3">Así avisa DocusAI</p>
            <p className="mt-4 flex gap-2.5">
              <svg viewBox="0 0 16 16" className="mt-0.5 size-4 shrink-0 text-bad" aria-hidden>
                <circle cx="8" cy="8" r="7" fill="currentColor" />
                <path d="M8 4.5v4.2" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
                <circle cx="8" cy="11.2" r="0.95" fill="#fff" />
              </svg>
              <span>
                Los importes no cuadran: base 1.000,00 + IVA 210,00 − IRPF 150,00 = <span className="tnum">1.060,00</span>, pero el total es{' '}
                <span className="tnum">1.210,00</span>.
              </span>
            </p>
            <p className="mt-4 flex gap-2.5 text-ink-2">
              <svg viewBox="0 0 16 16" className="mt-0.5 size-4 shrink-0 text-warn" aria-hidden>
                <path d="M8 1.8 14.6 13.6H1.4L8 1.8Z" fill="var(--warn-soft)" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                <path d="M8 6v3.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <circle cx="8" cy="11.5" r="0.8" fill="currentColor" />
              </svg>
              Proveedor de FR con IVA repercutido: revisar si es intracomunitaria.
            </p>
            <p className="mt-5 text-2xs text-ink-3">Avisos reales del producto, con datos ficticios.</p>
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section id="para-quien" className="scroll-mt-16 bg-surface">
        <div className="mx-auto grid max-w-[1160px] gap-14 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:gap-16">
          {[
            ['Gestorías y asesorías', ['Todas tus empresas cliente en una cuenta', 'Un buzón de correo por empresa', 'Cada proveedor recuerda su cuenta de gasto']],
            ['Empresas, con cualquier ERP', ['Funciona desde la primera factura', 'Borradores en Business Central y otros ERP', 'Precio por documentos, no por usuario']],
          ].map(([t, items]) => (
            <div key={t as string} className="border-t-2 border-brand pt-6">
              <h2 className="font-display text-[30px] font-extrabold tracking-[-0.03em] text-ink">{t as string}</h2>
              <ul className="mt-6 flex flex-col gap-3 text-[16px] text-ink-2">
                {(items as string[]).map((i) => (
                  <li key={i} className="flex gap-2.5">
                    <Check className="mt-1 size-4 shrink-0 text-brand" /> {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Security: four short lines */}
      <section id="seguridad" className="scroll-mt-16">
        <div className="mx-auto max-w-[1160px] px-4 py-24 sm:px-6">
          <h2 className="max-w-[20ch] font-display text-[clamp(30px,3.8vw,46px)] font-extrabold leading-[1.04] tracking-[-0.03em] text-ink">
            Datos fiscales de tus clientes, tratados como tales.
          </h2>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SEGURIDAD.map(([Icon, t]) => (
              <li key={t} className="flex items-center gap-3 rounded-xl bg-brand-soft px-5 py-4 text-[15px] font-semibold text-ink">
                <Icon className="size-5 shrink-0 text-brand" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Demo: violet band with the booking calendar inline, so "Solicitar demo" lands on something to do */}
      <section id="demo" className="scroll-mt-16 text-white" style={PANEL}>
        <div className="mx-auto max-w-[1160px] px-4 py-24 sm:px-6">
          <h2 className="max-w-[18ch] font-display text-[clamp(34px,4.6vw,58px)] font-extrabold leading-[1.0] tracking-[-0.035em]">
            Pruébalo con tus <span className="text-panel-accent">propias facturas.</span>
          </h2>
          <p className="mt-5 max-w-[48ch] text-[18px] leading-relaxed text-panel-muted">30 minutos con un lote real: ves cuántas pasan sin tocar. Elige día y hora.</p>
          <div className="mt-10">
            <DemoContact />
          </div>
        </div>
      </section>

      <footer className="bg-panel-from text-white/60">
        <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-4 px-4 py-8 text-[13px] sm:px-6">
          <Wordmark tone="light" className="text-[20px]" />
          <p>
            © {new Date().getFullYear()} {BRAND.name} ·{' '}
            {BRAND.parent && (
              <a href={BRAND.parent.url} className="hover:text-white">
                Un servicio de {BRAND.parent.name}
              </a>
            )}
          </p>
          <nav className="flex gap-5">
            <a href="#demo" className="hover:text-white">
              Solicitar demo
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
