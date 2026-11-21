'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/cn';

/**
 * Interactive replica of the review screen with synthetic data. The evidence highlight walks
 * through the fields on its own; hovering a field takes over.
 */
const FIELDS = [
  { key: 'supplier', label: 'Proveedor', value: 'Papelería Ribera SL', ev: 'supplier' },
  { key: 'taxId', label: 'NIF', value: 'B12345674', ev: 'taxId', badge: 'CIF ✓' },
  { key: 'number', label: 'Nº factura', value: 'FV-2026/0418', ev: 'number' },
  { key: 'date', label: 'Fecha', value: '03/11/2026', ev: 'date' },
  { key: 'base', label: 'Base 21 %', value: '412,40', ev: 'base' },
  { key: 'vat', label: 'Cuota IVA', value: '86,60', ev: 'vat' },
  { key: 'total', label: 'Total', value: '499,00 €', ev: 'total' },
] as const;
type Ev = (typeof FIELDS)[number]['ev'];

export function ProductDemo() {
  const [active, setActive] = useState<Ev>('supplier');
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (hovering) return;
    const t = setInterval(() => {
      setActive((a) => FIELDS[(FIELDS.findIndex((f) => f.ev === a) + 1) % FIELDS.length]!.ev);
    }, 1700);
    return () => clearInterval(t);
  }, [hovering]);

  const hl = (ev: Ev) => cn('rounded-[2px] transition-[background,box-shadow] duration-300', active === ev && 'bg-[var(--mark-strong)] shadow-[0_0_0_2px_var(--mark-strong)]');

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-[0_24px_60px_-28px_rgb(19_20_23/0.35),0_2px_6px_rgb(19_20_23/0.05)]">
      {/* window bar */}
      <div className="flex h-10 items-center gap-3 border-b border-line bg-canvas px-4 text-xs">
        <span className="text-ink-3">Bandeja</span>
        <span className="text-ink-3">/</span>
        <span className="font-semibold text-ink">Papelería Ribera SL</span>
        <span className="inline-flex h-5 items-center gap-1.5 rounded-[5px] bg-brand-soft px-1.5 font-medium text-brand">
          <span className="size-1.5 rounded-full bg-brand" /> Listo
        </span>
        <span className="ml-auto hidden text-ink-3 sm:inline">Datos de ejemplo</span>
        <span className="inline-flex h-7 items-center gap-1.5 rounded-md bg-ink px-2.5 font-medium text-white">
          Aprobar <span className="rounded border border-white/20 bg-white/10 px-1 text-[10px] text-white/70">⌘↵</span>
        </span>
      </div>

      <div className="grid md:grid-cols-[1.15fr_1fr]">
        {/* the invoice */}
        <div className="bg-[#ecebe7] p-4 sm:p-6">
          <div className="mx-auto max-w-[420px] rounded-[3px] bg-white p-5 text-[10.5px] leading-relaxed text-[#2b2b2b] shadow-[0_1px_3px_rgb(19_20_23/0.12),0_10px_30px_-14px_rgb(19_20_23/0.25)] sm:p-7">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[13px] font-bold tracking-tight">
                  <span className={hl('supplier')}>Papelería Ribera SL</span>
                </p>
                <p className="text-[#666]">Av. del Puerto 22, 46023 Valencia</p>
                <p className="text-[#666]">
                  CIF <span className={hl('taxId')}>B12345674</span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-[15px] font-semibold tracking-tight">FACTURA</p>
                <p>
                  Nº <span className={hl('number')}>FV-2026/0418</span>
                </p>
                <p>
                  Fecha <span className={hl('date')}>03/11/2026</span>
                </p>
              </div>
            </div>
            <div className="mt-4 rounded-sm bg-[#f6f6f4] p-2.5">
              <p className="text-[#666]">Cliente</p>
              <p className="font-medium">Asesoría Ejemplo SL · B12345674</p>
            </div>
            <table className="mt-4 w-full">
              <thead>
                <tr className="border-b border-[#ddd] text-left text-[#777]">
                  <th className="pb-1 font-normal">Concepto</th>
                  <th className="pb-1 text-right font-normal">Uds.</th>
                  <th className="pb-1 text-right font-normal">Importe</th>
                </tr>
              </thead>
              <tbody className="tnum">
                <tr>
                  <td className="pt-1.5">Papel A4 80 g (caja 5 paq.)</td>
                  <td className="pt-1.5 text-right">12</td>
                  <td className="pt-1.5 text-right">298,80</td>
                </tr>
                <tr>
                  <td>Tóner compatible HL-L2350</td>
                  <td className="text-right">4</td>
                  <td className="text-right">113,60</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-4 ml-auto w-48 tnum">
              <div className="flex justify-between">
                <span className="text-[#777]">Base imponible</span>
                <span className={hl('base')}>412,40</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#777]">IVA 21 %</span>
                <span className={hl('vat')}>86,60</span>
              </div>
              <div className="mt-1 flex justify-between border-t border-[#ddd] pt-1 text-[12px] font-semibold">
                <span>TOTAL</span>
                <span className={hl('total')}>499,00 €</span>
              </div>
            </div>
          </div>
        </div>

        {/* the review panel */}
        <div className="border-t border-line md:border-l md:border-t-0" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
          <div className="flex items-center gap-2 border-b border-line bg-ok-soft px-4 py-2.5 text-xs font-medium text-ok">
            <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden>
              <circle cx="8" cy="8" r="7" fill="currentColor" />
              <path d="m5 8.3 2 2 4-4.6" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Todo cuadra. Revisa de un vistazo y aprueba.
          </div>
          <dl className="grid grid-cols-2 gap-x-3 gap-y-2.5 p-4">
            {FIELDS.map((f) => (
              <div key={f.key} className={cn('flex flex-col gap-1', (f.key === 'supplier' || f.key === 'total') && 'col-span-2')} onMouseEnter={() => setActive(f.ev)}>
                <dt className="flex items-center gap-1.5 text-[11px] font-medium text-ink-2">
                  {f.label}
                  {'badge' in f && <span className="rounded bg-ok-soft px-1 text-[10px] font-medium text-ok">{f.badge}</span>}
                </dt>
                <dd
                  className={cn(
                    'flex h-7 items-center rounded-md border bg-surface px-2 text-xs tnum transition-[border,box-shadow] duration-300',
                    f.key === 'total' && 'h-8 justify-end text-[13px] font-semibold',
                    active === f.ev ? 'border-brand ring-[3px] ring-brand/15' : 'border-line',
                  )}
                >
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mx-4 mb-4 grid grid-cols-[1fr_auto] gap-y-0.5 rounded-lg bg-sunken/70 p-3 text-[11px] tnum">
            <span className="text-ink-2">Base + IVA</span>
            <span className="text-right">412,40 + 86,60</span>
            <span className="text-ink-2">Calculado</span>
            <span className="text-right font-medium">499,00 €</span>
            <span className="col-span-2 mt-1 flex items-center gap-1 font-medium text-ok">✓ Cuadra con el total impreso</span>
          </div>
          <p className="border-t border-line px-4 py-2.5 text-[11px] text-ink-3">Cuenta 6290000 · aprendida de 14 facturas de este proveedor</p>
        </div>
      </div>
    </div>
  );
}
