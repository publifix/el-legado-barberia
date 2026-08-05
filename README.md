# El Legado Barbería

Landing page corporativa de El Legado Barbería — barbería premium con 4 sucursales en
Querétaro. Construida con [Astro](https://astro.build) y [Tailwind CSS](https://tailwindcss.com).

## Desarrollo

```bash
npm install
npm run dev       # servidor local en http://localhost:4321
npm run build     # build de producción en ./dist
npm run preview   # sirve el build de producción localmente
```

## Stack

- **Astro** — sitio estático, cero JS por defecto.
- **Tailwind CSS v4** — tokens de marca definidos en `src/styles/global.css` (`@theme`).
- **astro-icon** (Lucide) — iconografía SVG minimalista.
- **Embla Carousel** — carrusel de testimonios.
- Fuentes autoalojadas: Manrope (`@fontsource-variable/manrope`) para títulos, Inter
  (`@fontsource-variable/inter`) para el resto del contenido.

## Estructura

- `src/lib/site.ts` — datos del negocio (contacto, servicios, sucursales, testimonios).
- `src/components/` — una sección de la landing por componente.
- `src/assets/images/` — fotografías reales de la barbería.

## Despliegue

Cada push a `main` o a una rama `claude/**` dispara `.github/workflows/deploy.yml`, que
construye el sitio y lo publica en GitHub Pages:
https://publifix.github.io/el-legado-barberia/
