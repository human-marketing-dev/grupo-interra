# Grupo Interra — sitio

Landing page de Grupo Interra construida sobre Next.js 16 (App Router) y
Tailwind v4, con el **Interra Design System** portado desde el proyecto de
Claude Design [`1eabe070`](https://claude.ai/design/p/1eabe070-353a-4400-b8c3-44ad79627757).

```bash
npm run dev     # desarrollo
npm run build   # build de producción
npm run lint    # eslint
```

## Estructura

| Ruta | Qué hay |
|---|---|
| `app/globals.css` | Tokens del sistema (`tokens/*.css` del proyecto de diseño) + clases `.ds-*` de los componentes |
| `app/layout.tsx` | Fuentes (Archivo + Barlow vía `next/font`), metadata, `lang="es-MX"` |
| `app/page.tsx` | Composición de la landing |
| `components/ds/` | Componentes del sistema: Button, Badge, Tag, Card, IconButton, Input, Select, Checkbox, SectionHeading, StatBlock, FeatureItem, PropertyCard, Navbar, Footer, Icon |
| `components/landing/` | Secciones de la página |
| `content/site.ts` | Todo el copy y los datos de la landing |
| `public/brand/` | Logotipos recortados (sin el ~92% de lienzo transparente del original) |

## Reglas del sistema que conviene no romper

- **Naranja `#F18A00` es acento, no relleno**: un CTA primario por vista.
- **Máximo dos fondos por página** además del blanco (navy `#002639` y mist `#F3F5F8`); el negro puro se reserva para bloques de máximo contraste.
- **Casing**: sentence case en títulos y cuerpo; MAYÚSCULAS solo en eyebrows, micro-labels, badges y botones.
- **Cifras siempre con unidad y contexto** (`+1,200 ha`, `Desde $1.8M MXN`).
- **Sin emoji y sin unicode como iconos** — las flechas son `arrow-right` de Lucide.
- **Píldora (999px) solo en chips de filtro**; el resto es 2/4/8px.
- Los tokens de `app/globals.css` son copia literal del sistema: si cambian allá, actualízalos aquí.

## Pendientes heredados del sistema de diseño

Estas cuatro substituciones vienen declaradas en el propio sistema y siguen
abiertas — no son deuda introducida por esta implementación:

1. **Fotografía**: no existe ninguna. Las tarjetas y los bloques de imagen usan
   el placeholder de trama diagonal navy (`.ds-hatch`). No lo sustituyas por
   stock genérico sin aprobación; los lugares marcados dicen qué falta
   ("aérea de dron", "plano de cobertura").
2. **Tipografía**: Archivo + Barlow son la substitución más cercana en Google
   Fonts al logotipo original. Si el cliente entrega las fuentes reales,
   cámbialas en `app/layout.tsx` por `next/font/local`.
3. **Iconos**: Lucide (`lucide-react`) es el set substituto. Si Interra tiene
   set propio, reemplaza el mapa de `components/ds/Icon.tsx`.
4. **Contenido**: nombres de proyectos, cifras, precios y datos de contacto de
   `content/site.ts` son de muestra.

## Formulario de contacto

`components/landing/ContactForm.tsx` no tiene destino configurado. Mientras
`NEXT_PUBLIC_CONTACT_ENDPOINT` no exista, el formulario valida y avisa que no
está conectado en vez de fingir un envío correcto. Define esa variable con la
URL del CRM, Formspree o un route handler propio para activarlo:

```bash
# .env.local
NEXT_PUBLIC_CONTACT_ENDPOINT="https://…"
```
