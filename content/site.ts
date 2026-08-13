import type { IconName } from "@/components/ds/Icon";
import type { Property } from "@/components/ds/PropertyCard";

/**
 * Copy y datos de la landing.
 *
 * Fuente: "Interra Landing Page.html" del proyecto de Claude Design — contenido
 * real de Grupo Interra (Nuevo León), no el template de muestra del sistema.
 *
 * Español de México, sentence case, cifras siempre con unidad y contexto.
 */

export const NAV_LINKS = [
  { label: "Sobre nosotros", href: "#nosotros" },
  { label: "Desarrollos", href: "#desarrollos" },
  { label: "Contacto", href: "#contacto" },
];

export type HeroSlide = {
  id: string;
  /** Etiqueta corta para el control del carrusel. */
  name: string;
  eyebrow: string;
  title: string;
  lead: string;
  photo: string;
  photoAlt: string;
  ctaLabel: string;
  ctaHref: string;
};

/**
 * Los tres slides del héroe. El copy de Santte e IBP está construido solo con
 * datos que ya viven en este archivo (etapas, ubicación, beneficios de cada
 * vertical); no se inventó ninguna cifra ni amenidad.
 */
export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "grupo",
    name: "Grupo Interra",
    eyebrow: "Grupo Interra · Nuevo León · Desde 2008",
    title: "Parques industriales y comunidades que impulsan al estado",
    lead: "Fortalecemos el desarrollo económico de Nuevo León construyendo parques industriales, desarrollos residenciales y espacios comerciales con infraestructura, servicios y amenidades de primer nivel.",
    photo: "/photos/hero-caseta.jpg",
    photoAlt: "Acceso a parque industrial de Grupo Interra en Nuevo León",
    ctaLabel: "Conoce nuestros desarrollos",
    ctaHref: "#desarrollos",
  },
  {
    id: "santte",
    name: "Santte Residencial",
    eyebrow: "Santte Residencial · Santiago, N.L.",
    title: "Lotes residenciales al pie de la sierra",
    lead: "Tres etapas en Santiago, Nuevo León, con casa club, acceso controlado y urbanización terminada. Escrituración lista desde la entrega.",
    photo: "/residencial/santte-residencial/RENDER-CASA-CLUB-SANTTE (4).webp",
    photoAlt: "Casa club de Santte Residencial al atardecer",
    ctaLabel: "Conoce Santte Residencial",
    ctaHref: "#desarrollos",
  },
  {
    id: "ibp",
    name: "Interra Business Park",
    eyebrow: "Interra Business Park · Nuevo León",
    title: "Parques industriales listos para operar",
    lead: "Vialidades para tránsito de tráiler, energía de media tensión, vigilancia 24/7 y Business Center, en los principales corredores logísticos del estado.",
    photo: "/industrial/ibp100/ibp-100-aerea.webp",
    photoAlt: "Vista aérea de un parque industrial de Interra Business Park",
    ctaLabel: "Conoce IBP",
    ctaHref: "#desarrollos",
  },
];

export const HERO_STATS = [
  { value: "2008", label: "Año de fundación" },
  { value: "6", label: "Parques industriales" },
  { value: "6", label: "Desarrollos residenciales" },
  { value: "213", label: "Lotes en Salinas IBP I" },
];

export const ABOUT = {
  eyebrow: "Sobre nosotros",
  title: "No hay límite para tu crecimiento",
  paragraphs: [
    "En Grupo Interra fortalecemos el desarrollo económico del estado a través de la construcción de parques industriales. Nuestro equipo de trabajo, con gran experiencia, desarrolla proyectos de máxima calidad conforme a los más altos estándares; por eso nuestros proyectos cuentan con el respaldo de empresas nacionales e internacionales.",
    "Cada lote se adapta a la visión de los empresarios más exigentes. La infraestructura, los servicios y las amenidades son nuestras principales fortalezas al construir tanto desarrollos residenciales como parques industriales innovadores y funcionales.",
  ],
  photo: "/photos/hero-caseta.jpg",
  photoAlt: "Caseta de acceso e instalaciones de Grupo Interra",
  photoCaption: {
    eyebrow: "Presencia Interra",
    text: "Business Center · Salinas Victoria, N.L.",
  },
};

type Benefit = { icon: IconName; label: string };

export type DevelopmentTab = {
  id: string;
  label: string;
  heading: string;
  body: string;
  stats?: { value: string; label: string }[];
  benefitsTitle: string;
  benefits: Benefit[];
  projects: Property[];
};

export const DEVELOPMENTS = {
  eyebrow: "Portafolio",
  title: "Conoce nuestros desarrollos",
  lead: "Una misma forma de trabajar: infraestructura resuelta, servicios completos y amenidades que sostienen la plusvalía.",
};

export const DEVELOPMENT_TABS: DevelopmentTab[] = [
  {
    id: "residencial",
    label: "Residencial",
    heading: "Construimos patrimonio",
    body: "Desde 2008 desarrollamos comunidades residenciales en Nuevo León con urbanización terminada, accesos controlados y escrituración lista desde la entrega. Un mismo estándar de ejecución aplicado en más de siete fraccionamientos.",
    benefitsTitle: "Lo que incluye",
    benefits: [
      { icon: "trees", label: "Áreas verdes y amenidades" },
      { icon: "shield-check", label: "Accesos controlados" },
      { icon: "route", label: "Vialidades terminadas" },
      { icon: "file-check", label: "Escrituración lista" },
    ],
    projects: [
      {
        name: "Misión del Parque",
        location: "Apodaca, N.L.",
        meta: "Fraccionamiento",
        price: "A consultar",
        status: "available",
        statusLabel: "Activo",
        category: "Residencial",
      },
      {
        name: "Lantana",
        location: "Guadalupe, N.L.",
        meta: "Fraccionamiento",
        price: "A consultar",
        status: "available",
        statusLabel: "Activo",
        category: "Residencial",
        images: [
          {
            src: "/residencial/lantana/lantana-casa-4.webp",
            alt: "Casa muestra de Lantana",
          },
          {
            src: "/residencial/lantana/lantana-casa.webp",
            alt: "Fachada de casa en Lantana",
          },
          {
            src: "/residencial/lantana/lantana-casa-2.webp",
            alt: "Casa de Lantana desde el acceso",
          },
          {
            src: "/residencial/lantana/lantana-casa-3.webp",
            alt: "Interior de casa muestra de Lantana",
          },
          {
            src: "/residencial/lantana/lantana-residencial.webp",
            alt: "Conjunto residencial Lantana",
          },
          {
            src: "/residencial/lantana/Lantana-0103.webp",
            alt: "Áreas comunes de Lantana",
          },
          {
            src: "/residencial/lantana/Lantana-0116.webp",
            alt: "Amenidades de Lantana",
          },
        ],
      },
      {
        name: "Altares Residencial",
        location: "Santiago, N.L.",
        meta: "Lotes residenciales",
        price: "A consultar",
        status: "available",
        statusLabel: "Activo",
        category: "Residencial",
        images: [
          {
            src: "/residencial/altares/altares-casa-club-4.webp",
            alt: "Casa club de Altares Residencial",
          },
          {
            src: "/residencial/altares/altares-casa-club.webp",
            alt: "Casa club de Altares Residencial desde el acceso",
          },
          {
            src: "/residencial/altares/altares-casa-club-3.webp",
            alt: "Áreas comunes de la casa club de Altares Residencial",
          },
          {
            src: "/residencial/altares/altares-casa-club-aerea.webp",
            alt: "Vista aérea de la casa club de Altares Residencial",
          },
          {
            src: "/residencial/altares/altares-casa-club-noche.webp",
            alt: "Casa club de Altares Residencial iluminada de noche",
          },
          {
            src: "/residencial/altares/altares-caseta.webp",
            alt: "Caseta de acceso de Altares Residencial",
          },
          {
            src: "/residencial/altares/altares-caseta-2.webp",
            alt: "Caseta de acceso de Altares Residencial desde la vialidad",
          },
          {
            src: "/residencial/altares/altares-caseta-3.webp",
            alt: "Detalle de la caseta de acceso de Altares Residencial",
          },
          {
            src: "/residencial/altares/altares-caseta-noche.webp",
            alt: "Caseta de acceso de Altares Residencial de noche",
          },
        ],
      },
      {
        name: "Cyrá Residencial",
        location: "Santiago, N.L.",
        meta: "Lotes residenciales",
        price: "A consultar",
        status: "reserved",
        statusLabel: "Próximamente",
        category: "Residencial",
      },
      {
        name: "Santte Residencial",
        location: "Santiago, N.L.",
        meta: "Etapas I, II y III",
        price: "A consultar",
        status: "available",
        statusLabel: "Activo",
        category: "Residencial",
        images: [
          {
            src: "/residencial/santte-residencial/RENDER-CASA-CLUB-SANTTE (4).webp",
            alt: "Render de la casa club de Santte Residencial",
          },
          {
            src: "/residencial/santte-residencial/RENDER-CASA-CLUB-SANTTE (1).webp",
            alt: "Render de la casa club de Santte Residencial desde el acceso",
          },
          {
            src: "/residencial/santte-residencial/RENDER-CASA-CLUB-SANTTE (2).webp",
            alt: "Render de las áreas comunes de la casa club de Santte Residencial",
          },
          {
            src: "/residencial/santte-residencial/RENDER-CASA-CLUB-SANTTE (3).webp",
            alt: "Render del interior de la casa club de Santte Residencial",
          },
          {
            src: "/residencial/santte-residencial/RENDER-CASA-CLUB-SANTTE (5).webp",
            alt: "Render nocturno de la casa club de Santte Residencial",
          },
          {
            src: "/residencial/santte-residencial/SANTTE RESIDENCIAL CASETA DE ACCESOse.webp",
            alt: "Caseta de acceso de Santte Residencial",
          },
        ],
      },
      {
        name: "Sierras III",
        location: "Santiago, N.L.",
        meta: "Lotes residenciales",
        price: "A consultar",
        status: "available",
        statusLabel: "Activo",
        category: "Residencial",
      },
    ],
  },
  {
    id: "industrial",
    label: "Industrial",
    heading: "Desarrollo industrial",
    body: "Interra Business Park son parques industriales en los principales corredores logísticos de Nuevo León, con infraestructura lista para operar: vialidades para tránsito de tráiler, energía de media tensión, vigilancia 24/7 y Business Center.",
    benefitsTitle: "Beneficios IBP",
    benefits: [
      { icon: "shield-check", label: "Caseta de acceso con vigilancia 24 horas" },
      { icon: "building-2", label: "Business Center" },
      { icon: "plug-zap", label: "Servicios públicos" },
      { icon: "trending-up", label: "Alta plusvalía" },
      { icon: "wrench", label: "Seguridad y mantenimiento" },
      { icon: "route", label: "Fácil acceso" },
      { icon: "zap", label: "Energía de media tensión" },
      { icon: "utensils", label: "Comedor común y eventos" },
      { icon: "users", label: "Mano de obra calificada" },
      { icon: "home", label: "Zona habitacional" },
    ],
    projects: [
      {
        name: "IBP Parque 100",
        location: "Santa Catarina, N.L.",
        meta: "Parque industrial",
        price: "A consultar",
        status: "available",
        statusLabel: "Activo",
        category: "Industrial",
        images: [
          {
            src: "/industrial/ibp100/ibp-100.webp",
            alt: "Edificio de acceso de IBP Parque 100 al pie de la sierra",
          },
          {
            src: "/industrial/ibp100/ibp-100-aerea.webp",
            alt: "Vista aérea de IBP Parque 100",
          },
          {
            src: "/industrial/ibp100/ibp-100-aerea-2.webp",
            alt: "Vista aérea de IBP Parque 100 desde otro ángulo",
          },
          {
            src: "/industrial/ibp100/ibp-100-caseta-aerea.webp",
            alt: "Caseta de acceso de IBP Parque 100 desde el aire",
          },
          {
            src: "/industrial/ibp100/ibp-100-fachada.webp",
            alt: "Fachada del edificio de IBP Parque 100",
          },
          {
            src: "/industrial/ibp100/ibp-100-amenidades.webp",
            alt: "Amenidades de IBP Parque 100",
          },
          {
            src: "/industrial/ibp100/ibp-100-nave.webp",
            alt: "Nave industrial en IBP Parque 100",
          },
          {
            src: "/industrial/ibp100/ibp-100-noche.webp",
            alt: "IBP Parque 100 iluminado de noche",
          },
          {
            src: "/industrial/ibp100/ibp-100-vane-1.webp",
            alt: "Instalaciones de IBP Parque 100",
          },
        ],
      },
      {
        name: "IBP Parque 200",
        location: "Santa Catarina, N.L.",
        meta: "Parque industrial",
        price: "A consultar",
        status: "available",
        statusLabel: "Activo",
        category: "Industrial",
        images: [
          {
            src: "/industrial/ibp200/ibp-200-caseta.webp",
            alt: "Caseta de acceso de IBP Parque 200",
          },
          {
            src: "/industrial/ibp200/ibp-200-aerea.webp",
            alt: "Vista aérea de IBP Parque 200",
          },
          {
            src: "/industrial/ibp200/ibp-200-aerea-2.webp",
            alt: "Vista aérea de IBP Parque 200 desde otro ángulo",
          },
          {
            src: "/industrial/ibp200/ibp-200-aerea-3.webp",
            alt: "Conjunto de IBP Parque 200 desde el aire",
          },
        ],
      },
      {
        name: "Salinas IBP I",
        location: "Salinas Victoria, N.L.",
        meta: "213 lotes · 2019",
        price: "A consultar",
        status: "available",
        statusLabel: "Activo",
        category: "Industrial",
        description:
          "Parque industrial exclusivo con 213 lotes, caseta y vigilancia, y Business Center equipado con oficinas y área de comedor común. Fácil acceso a puentes fronterizos, vías de transportación y zona habitacional.",
        images: [
          {
            src: "/industrial/ibp_salinas/ibp-salinas-caseta.webp",
            alt: "Monumento de acceso de IBP Salinas sobre la vialidad principal",
          },
          {
            src: "/industrial/ibp_salinas/ibp-salinas-oficinas.webp",
            alt: "Oficinas del Business Center de IBP Salinas",
          },
          {
            src: "/photos/hero-caseta.jpg",
            alt: "Caseta de acceso y Business Center del parque al anochecer",
          },
          {
            src: "/industrial/ibp_salinas/ibp-salinas-mapa.webp",
            alt: "Mapa de ubicación sobre la carretera Sta. Rosa – Salinas Victoria",
            fit: "contain",
          },
        ],
      },
      {
        name: "Salinas IBP II",
        location: "Salinas Victoria, N.L.",
        meta: "Lotes industriales",
        price: "A consultar",
        status: "reserved",
        statusLabel: "En venta",
        category: "Industrial",
      },
      {
        name: "Parque 400",
        location: "Santa Catarina, N.L.",
        meta: "Parque industrial",
        price: "A consultar",
        status: "reserved",
        statusLabel: "Próximamente",
        category: "Industrial",
      },
      {
        name: "IBP Mitras",
        location: "Salinas Victoria, N.L.",
        meta: "Lotes industriales",
        price: "A consultar",
        status: "reserved",
        statusLabel: "Próximamente",
        category: "Industrial",
      },
    ],
  },
];

/**
 * Datos duros del portafolio histórico.
 *
 * TRANSCRITOS DE UNA IMAGEN que envió el cliente — verifícalos contra la fuente
 * original antes de publicar. El encabezado de la sección sí es redacción
 * propia: la lámina original no traía título.
 */
export const HARD_NUMBERS = {
  eyebrow: "Trayectoria",
  title: "Interra en números",
  columns: [
    {
      icon: "home" as IconName,
      category: "Residenciales",
      primary: { label: "Número de lotes", value: "+7,294" },
      secondary: [{ label: "m² vendibles", value: "2,130,261" }],
    },
    {
      icon: "house-plus" as IconName,
      category: "Residenciales EUA",
      primary: { label: "Número de lotes", value: "+226" },
      secondary: [{ label: "Número de casas", value: "51" }],
    },
    {
      icon: "blocks" as IconName,
      category: "De interés social",
      primary: { label: "Número de lotes", value: "+2,720" },
      secondary: [
        { label: "m² vendibles", value: "2,165,640" },
        { label: "Macrolotes", value: "14" },
      ],
    },
    {
      icon: "factory" as IconName,
      category: "Industriales",
      primary: { label: "Número de lotes", value: "+756" },
      secondary: [
        { label: "m² vendibles", value: "1,316,200" },
        { label: "Macrolotes", value: "4" },
      ],
    },
    {
      icon: "store" as IconName,
      category: "Comerciales",
      primary: { label: "Número de locales", value: "+10,606" },
      secondary: [
        { label: "m² vendibles", value: "560,193" },
        { label: "Macrolotes", value: "6" },
        { label: "Plazas", value: "19" },
      ],
    },
  ],
};

/** Comercial vive en su propia sección: es un solo proyecto, no un listado. */
export const COMMERCIAL = {
  eyebrow: "Comercial",
  title: "IBP Interra Business Plaza",
  lead: "Proyecto de locales comerciales tipo workshop, con amplio espacio para showroom, oficinas, producción y almacenaje. 14 locales desde 190 hasta 500 m², con agua, drenaje, telefonía, internet y energía eléctrica.",
  stats: [
    { value: "14", label: "locales tipo workshop" },
    { value: "190–500 m²", label: "superficie por local" },
  ],
  benefitsTitle: "Lo que incluye",
  benefits: [
    { icon: "store", label: "Showroom y oficinas" },
    { icon: "package", label: "Producción y almacenaje" },
    { icon: "plug-zap", label: "Agua, drenaje y energía" },
    { icon: "wifi", label: "Telefonía e internet" },
  ] as Benefit[],
  project: {
    name: "IBP Interra Business Plaza",
    location: "Salinas Victoria, N.L.",
    meta: "14 locales · 190–500 m²",
    price: "A consultar",
    status: "available",
    statusLabel: "Activo",
    category: "Comercial",
    description:
      "Locales comerciales tipo workshop con amplio espacio para showroom, oficinas, producción y almacenaje. Cuentan con agua, drenaje, telefonía, internet y energía eléctrica.",
  } as Property,
  brandsTitle: "Marcas que ya operan con nosotros",
  brandsNote:
    "Marcas representadas en texto — pendiente recibir los archivos de logotipo de cada una.",
};

/** Representadas en texto: falta recibir los archivos de logotipo. */
export const TENANT_BRANDS = [
  "Trooper",
  "Telcel",
  "Sayulita",
  "Dollar General",
  "FedEx",
  "Dairy Queen",
];

export const PARTNERS = {
  eyebrow: "IBP + Partners",
  title: "¿Buscas cómo invertir?",
  lead: "Con IBP + Partners tienes la posibilidad de poner a trabajar tu tierra: aportas tu terreno para la creación de un desarrollo industrial y recibes como pago lotes ya urbanizados, para construir naves industriales en renta o venta.",
  ctaLabel: "Agendar una cita",
  businessCenterTitle: "Business Center",
  businessCenter: [
    "Salas de juntas con pantallas de proyección para 4 y 8 personas",
    "Red wifi en todo el edificio",
    "Área cowork para colaboradores",
    "Área de café y comedor común",
  ],
};

export const CTA_BAND = {
  title: "¿Listo para instalar tu operación en Nuevo León?",
  lead: "Contamos con los mejores asesores para apoyarte en tu proceso de compra.",
  ctaLabel: "Agendar recorrido",
};

export const CONTACT = {
  eyebrow: "Contacto",
  title: "Contáctanos",
  lead: "Para mayor información déjanos tus datos. Contamos con los mejores asesores para apoyarte en tu proceso de compra.",
};

export const CONTACT_DETAILS: { icon: IconName; value: string; href: string }[] =
  [
    { icon: "phone", value: "81 3558 5187", href: "tel:+528135585187" },
    {
      icon: "mail",
      value: "contacto@grupointerra.com",
      href: "mailto:contacto@grupointerra.com",
    },
    { icon: "globe", value: "grupointerra.mx", href: "https://grupointerra.mx" },
  ];

export const FOOTER_DESCRIPTION =
  "Construcción de parques industriales, desarrollos residenciales y espacios comerciales en Nuevo León.";

export const FOOTER_COLUMNS = [
  {
    title: "Desarrollos",
    links: [
      { label: "Industrial", href: "#desarrollos" },
      { label: "Residencial", href: "#desarrollos" },
      { label: "Comercial", href: "#comercial" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre nosotros", href: "#nosotros" },
      { label: "Contacto", href: "#contacto" },
      { label: "Aviso de privacidad", href: "#" },
    ],
  },
];
