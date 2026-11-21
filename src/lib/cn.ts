import clsx, { type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

/**
 * Class names with conflict resolution: a later `h-7` or `w-auto` replaces the base `h-8` / `w-full`
 * (plain concatenation lets the stylesheet order decide). Knows the project's own theme tokens.
 */
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      color: [
        'canvas', 'surface', 'sunken', 'hover', 'line', 'line-strong', 'ink', 'ink-2', 'ink-3', 'ink-inverse',
        'brand', 'brand-hover', 'brand-soft', 'brand-line', 'panel-from', 'panel-to', 'panel-accent', 'panel-muted',
        'ok', 'ok-soft', 'ok-line', 'warn', 'warn-soft', 'warn-line', 'bad', 'bad-soft', 'bad-line', 'info', 'info-soft',
        'mark', 'mark-strong',
      ],
      text: ['2xs'],
      shadow: ['pop', 'press'],
      font: ['display'],
    },
  },
});

export const cn = (...v: ClassValue[]) => twMerge(clsx(v));
