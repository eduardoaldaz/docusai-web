# docusai-web

Landing pública de DocusAI en https://docusai.servisdigital.com.

Next.js exportado como HTML estático (`output: 'export'`) y publicado en GitHub Pages con
`.github/workflows/pages.yml` en cada push a `main`. El producto (panel, API, worker) vive en
el repo `docusai-app` y se despliega aparte.

- `pnpm dev` → http://localhost:3300
- `pnpm build` → genera `out/`
- Variables de Actions: `BOOKING_URL`, `WHATSAPP_ES`, `WHATSAPP_EC` (las mismas que servisdigital-web).
- La landing es copia de `apps/web/src/app/page.tsx` del repo de la app, sin enlaces a la app y con
  contacto (cal.com, WhatsApp, email) en lugar del formulario de demo.
