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
| `components/landing/` | Secciones: Hero, About, Developments, HardNumbers, Commercial, CtaBand, Contact |
| `content/site.ts` | Todo el copy y los datos de la landing |
| `public/brand/` | Logotipos recortados (sin el ~92% de lienzo transparente del original) |
| `public/photos/` | Fotografía suelta (héroe y "Sobre nosotros") |
| `public/industrial/<proyecto>/`<br>`public/residencial/<proyecto>/` | Galerías por desarrollo |

## Estructura de la página

Hero → Sobre nosotros → Desarrollos (tabs Residencial / Industrial) →
Trayectoria → Comercial → CTA naranja → Contacto → Footer.

Comercial tiene sección propia (`#comercial`) porque es un solo proyecto, no un
listado: ahí viven también las marcas ancla. **`Partners.tsx` (IBP + Partners)
existe pero no está montada** — salió en este rediseño; se conserva porque es
contenido real del cliente.

## Portada + cortina

`BrandHero` es una portada de marca a pantalla completa: foto, velo naranja al
86% y el logotipo encima. Va **sticky** dentro de `.ds-cover-scene`, y el
carrusel (z-index mayor y opaco) sube y la tapa como una cortina. Los dos tienen
que vivir dentro de la misma escena: es ella la que le da recorrido al sticky.

El **`<h1>` de la página es ese logotipo** — su `alt` hace de titular. Por eso
los slides del carrusel usan `<p>` y no `<h1>`. Si algún día la portada deja de
tener el logo, hay que devolverle el h1 al carrusel o la página se queda sin uno.

Dos detalles que no son evidentes:

- **La foto tiene que ser diurna.** El velo naranja sobre una toma nocturna vira
  a café. Por eso usa la aérea de IBP 100 y no la caseta.
- **La franja del header lleva un degradado navy.** El texto blanco de la barra
  sobre naranja da 2.51:1; con el degradado sube a ~5.9:1.

Falta el video: sustituir el `<Image>` de `BrandHero.tsx` por un `<video muted
loop playsinline>` con `poster`. Conviene no cargarlo en móvil ni con
`prefers-reduced-motion`, y precargar el poster en vez del video.

## Héroe en carrusel

Dos slides en `HERO_SLIDES` (Santte e IBP), cada uno con su foto, su copy y su
CTA naranja. El corporativo salió: lo carga la portada de arriba y repetirlo
daba dos pantallas seguidas diciendo lo mismo. La barra de estadísticas de abajo **no** rota: son
cifras de la empresa, no del desarrollo en turno.

**Con autoplay cada 7 s**, activado por decisión explícita del cliente: el
sistema de diseño pide "sin autoplay de carruseles". Para cumplir WCAG 2.2.2 se
puede pausar, y además se detiene solo al pasar el mouse, al enfocar el carrusel
o si el sistema pide movimiento reducido.

Los bloques de copy se renderizan todos y los inactivos se ocultan con
`visibility` (no `display:none`, que no aportaría alto): así el texto queda en
el HTML para los buscadores sin entrar al tab order, y los slides se apilan en
una celda de grid para que el alto no salte al cambiar.

## Modal de desarrollo

Cada tarjeta de `Developments` y `Commercial` abre un `PropertyModal` con
carrusel y la ficha del desarrollo. Está montado sobre `<dialog>` nativo, así que el foco queda
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

1. **Fotografía por proyecto**: 6 de los 13 desarrollos tienen galería —
   IBP Parque 100 (9), IBP Parque 200 (4), Salinas IBP I (4), Altares (9),
   Lantana (7) y Santte Residencial (6). Los otros 7 siguen con el placeholder
   de trama diagonal navy. No lo sustituyas por stock genérico sin aprobación:
   basta con poner los archivos en `public/industrial/<proyecto>/` o
   `public/residencial/<proyecto>/` y listarlos en `images`. **La primera del
   array es la portada de la tarjeta**; el resto va al carrusel.
2. **Peso de las imágenes** — resuelto. `public/` pasó de 78 MB a 20 MB. Todas
   las fotos están normalizadas a **máx. 2000 px de ancho, webp q88** (el héroe
   es JPEG q88 por la extensión que ya tenía referenciada).

   Al agregar fotos nuevas, pásalas por el mismo filtro:

   ```bash
   node -e 'const s=require("sharp"),f=require("fs");
     for (const p of process.argv.slice(1)) s(p).resize({width:2000,withoutEnlargement:true})
       .webp({quality:88}).toBuffer().then(b=>f.writeFileSync(p,b))' \
     public/residencial/<proyecto>/*.webp
   ```

   Nota: `next/image` re-codifica a **q=75** al servir, así que el archivo
   fuente no es lo que descarga el visitante. Subir la calidad del fuente por
   encima de ~q88 engorda el repo sin cambiar lo que se ve.
3. **Logotipos de marcas ancla**: Trooper, Telcel, Sayulita, Dollar General,
   FedEx y Dairy Queen están representadas en texto. Faltan los archivos.
4. **Tipografía**: Archivo + Barlow son la substitución más cercana en Google
   Fonts al logotipo original. Si el cliente entrega las fuentes reales,
   cámbialas en `app/layout.tsx` por `next/font/local`.
5. **Iconos**: Lucide (`lucide-react`) es el set substituto. El readme del
   sistema define un set de casa cerrado, pero la landing real necesita once
   iconos más (beneficios IBP, Business Plaza); están marcados aparte en
   `components/ds/Icon.tsx`. Si el set se formaliza, hay que reconciliarlos.
6. **Aviso de privacidad**: el enlace del footer apunta a `#`.
7. **Cifras de "Trayectoria"**: `HARD_NUMBERS` en `content/site.ts` está
   transcrito de una imagen que envió el cliente, no de una fuente de datos.
   Verifícalo antes de publicar — sobre todo `+10,606 locales` contra
   `560,193 m² vendibles` (≈53 m² por local). El título de la sección
   ("Interra en números") es redacción propia: la lámina no traía encabezado.

## Formulario de contacto

`components/landing/ContactForm.tsx` no tiene destino configurado. Mientras
`NEXT_PUBLIC_CONTACT_ENDPOINT` no exista, el formulario valida y avisa que no
está conectado en vez de fingir un envío correcto. Define esa variable con la
URL del CRM, Formspree o un route handler propio para activarlo:

```bash
# .env.local
NEXT_PUBLIC_CONTACT_ENDPOINT="https://…"
```
