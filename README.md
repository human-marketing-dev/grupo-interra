# Grupo Interra — sitio

Landing page de Grupo Interra construida sobre Next.js 16 (App Router) y
Tailwind v4, con el **Interra Design System** portado desde el proyecto de
Claude Design [`1eabe070`](https://claude.ai/design/p/1eabe070-353a-4400-b8c3-44ad79627757).

```bash
npm run dev     # desarrollo
npm run build   # build de producción
npm run lint    # eslint
```

## De dónde sale el contenido

El proyecto de diseño tiene **dos** landing pages y no son la misma:

| Archivo | Qué es |
|---|---|
| `templates/landing-page/LandingPage.dc.html` | Template del sistema de diseño, con datos de muestra (Bajío, Querétaro, proyectos inventados). **No es el sitio.** |
| `Interra Landing Page.html` | La landing real: Nuevo León, los desarrollos reales, contacto real. **Es la fuente de este sitio.** |

Si vuelves a sincronizar desde el sistema de diseño, parte de
`Interra Landing Page.html`. El template solo sirve para ver los componentes.

## Estructura

| Ruta | Qué hay |
|---|---|
| `app/globals.css` | Tokens del sistema (`tokens/*.css` del proyecto de diseño) + clases `.ds-*` de los componentes |
| `app/layout.tsx` | Fuentes (Archivo + Barlow vía `next/font`), metadata, `lang="es-MX"` |
| `app/page.tsx` | Composición de la landing |
| `components/ds/` | Componentes del sistema: Button, Badge, Tag, Card, IconButton, Input, Select, Checkbox, SectionHeading, StatBlock, FeatureItem, PropertyCard, Navbar, Footer, Icon |
| `components/landing/` | Secciones: Hero, About, Developments, Partners, CtaBand, Contact |
| `content/site.ts` | Todo el copy y los datos de la landing |
| `public/brand/` | Logotipos recortados (sin el ~92% de lienzo transparente del original) |
| `public/photos/` | Fotografía (`projects/` = galerías por desarrollo) |

## Modal de desarrollo

Cada tarjeta de `Developments` abre un `PropertyModal` con carrusel y la ficha
del desarrollo. Está montado sobre `<dialog>` nativo, así que el foco queda
atrapado, Esc cierra y el fondo queda inerte sin código extra; el modal añade
clic en backdrop, flechas ← → y bloqueo del scroll de fondo.

Las imágenes viven en `content/site.ts`, en el campo `images` de cada
desarrollo. Un desarrollo sin `images` sigue abriendo el modal y muestra el
placeholder de trama con "Fotografía pendiente". Los planos y mapas llevan
`fit: "contain"` para que no se recorten; las fotos usan `cover`.

## Reglas del sistema que conviene no romper

- **Naranja `#F18A00` es acento, no relleno**: un CTA primario por vista.
- **Máximo dos fondos por página** además del blanco (navy `#002639` y mist `#F3F5F8`); el negro puro se reserva para bloques de máximo contraste.
- **Casing**: sentence case en títulos y cuerpo; MAYÚSCULAS solo en eyebrows, micro-labels, badges y botones.
- **Cifras siempre con unidad y contexto** (`213 lotes`, `190–500 m²`).
- **Sin emoji y sin unicode como iconos** — las flechas son `arrow-right` de Lucide.
- **Toda imagen con texto encima lleva gradiente de protección**, nunca una cápsula.
- **Píldora (999px) solo en chips de filtro**; el resto es 2/4/8px.
- Los tokens de `app/globals.css` son copia literal del sistema: si cambian allá, actualízalos aquí. **Única excepción:** `--container-max` es 1450px, no los 1240px del sistema — está marcado con un comentario en el archivo.

## Pendientes

1. **Fotografía por proyecto**: 4 de los 13 desarrollos tienen galería
   (IBP Parque 100, Salinas IBP I, Lantana y Santte Residencial). Los otros 9
   siguen con el placeholder de trama diagonal navy. No lo sustituyas por stock
   genérico sin aprobación: basta con poner los archivos en
   `public/photos/projects/` y listarlos en `images`.
   **Por confirmar:** las seis aéreas de `IBP Parque 100` venían nombradas
   `IBPSANTA-32..37` y no traen señalética. Santa Catarina tiene tres parques
   (100, 200 y 400), así que la asignación es provisional — está marcada con un
   `TODO CONFIRMAR` en `content/site.ts`.
2. **Logotipos de marcas ancla**: Trooper, Telcel, Sayulita, Dollar General,
   FedEx y Dairy Queen están representadas en texto. Faltan los archivos.
3. **Tipografía**: Archivo + Barlow son la substitución más cercana en Google
   Fonts al logotipo original. Si el cliente entrega las fuentes reales,
   cámbialas en `app/layout.tsx` por `next/font/local`.
4. **Iconos**: Lucide (`lucide-react`) es el set substituto. El readme del
   sistema define un set de casa cerrado, pero la landing real necesita once
   iconos más (beneficios IBP, Business Plaza); están marcados aparte en
   `components/ds/Icon.tsx`. Si el set se formaliza, hay que reconciliarlos.
5. **Aviso de privacidad**: el enlace del footer apunta a `#`.

## Formulario de contacto

`components/landing/ContactForm.tsx` no tiene destino configurado. Mientras
`NEXT_PUBLIC_CONTACT_ENDPOINT` no exista, el formulario valida y avisa que no
está conectado en vez de fingir un envío correcto. Define esa variable con la
URL del CRM, Formspree o un route handler propio para activarlo:

```bash
# .env.local
NEXT_PUBLIC_CONTACT_ENDPOINT="https://…"
```
