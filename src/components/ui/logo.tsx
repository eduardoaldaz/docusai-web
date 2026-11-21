import { useId } from 'react';
import { BRAND } from '@/lib/brand';
import { cn } from '@/lib/cn';

/** Compact mark (sidebar, favicon): the brand panel with a "D" whose counter is a document corner. */
export function LogoMark({ className }: { className?: string }) {
  const id = `lf-mark-${useId().replace(/:/g, '')}`;
  return (
    <svg viewBox="0 0 24 24" className={cn('size-6', className)} aria-hidden>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--panel-to)" />
          <stop offset="1" stopColor="var(--panel-from)" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="22" height="22" rx="6.5" fill={`url(#${id})`} />
      <path d="M7.5 6.5h4.6a5.5 5.5 0 0 1 0 11H7.5Z" fill="#fff" />
      <path d="M10.2 9.3h1.7a2.7 2.7 0 0 1 0 5.4h-1.7Z" fill={`url(#${id})`} />
      <circle cx="17.6" cy="6.6" r="1.6" fill="var(--panel-accent)" />
    </svg>
  );
}

/** Trademark sign, same treatment as FacServis and Servis Digital: small, body font, muted, raised. */
export function Tm({ className }: { className?: string }) {
  return <sup className={cn('relative -top-[0.95em] ml-[0.06em] align-baseline font-sans text-[0.36em] font-semibold tracking-normal opacity-55', className)}>™</sup>;
}

/** Two-tone wordmark, same pattern as Fac|Servis. `tone="light"` for dark backgrounds. */
export function Wordmark({ className, tone = 'dark' }: { className?: string; tone?: 'dark' | 'light' }) {
  const [a, b] = BRAND.wordmark;
  return (
    <span className={cn('font-display font-extrabold leading-none tracking-[-0.03em]', tone === 'light' ? 'text-white' : 'text-ink', className)}>
      {a}
      <span className={tone === 'light' ? 'text-panel-accent' : 'text-brand'}>{b}</span>
      <Tm />
    </span>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <LogoMark />
      <Wordmark className="text-[17px]" />
    </span>
  );
}
