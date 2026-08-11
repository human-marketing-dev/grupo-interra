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

export const HERO = {
  eyebrow: "Grupo Interra · Nuevo León · Desde 2008",
  title: "Parques industriales y comunidades que impulsan al estado",
  lead: "Fortalecemos el desarrollo económico de Nuevo León construyendo parques industriales, desarrollos residenciales y espacios comerciales con infraestructura, servicios y amenidades de primer nivel.",
  photo: "/photos/hero-caseta.jpg",
  photoAlt: "Acceso a parque industrial de Grupo Interra en Nuevo León",
};

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
  features: [
    {
      icon: "factory" as IconName,
      title: "Vivienda como origen",
      description:
        "En 2008 iniciamos con fraccionamientos como Mirador del Parque, San Marcos del Parque y Portal del Parque. Esas comunidades son la base de lo que somos hoy.",
    },
    {
      icon: "handshake" as IconName,
      title: "IBP + Partners",
      description:
        "Aporta tu terreno para la creación de un desarrollo industrial y recibe como pago lotes ya urbanizados, listos para construir naves en renta o venta.",
    },
  ],
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
  lead: "Tres verticales, una misma forma de trabajar: infraestructura resuelta, servicios completos y amenidades que sostienen la plusvalía.",
};

export const DEVELOPMENT_TABS: DevelopmentTab[] = [
  {
    id: "industrial",
    label: "Industrial",
    heading: "Parques industriales IBP",
    body: "Parque Salinas IBP I es un parque industrial exclusivo en Salinas Victoria, N.L., con 213 lotes, caseta y vigilancia, Business Center equipado con oficinas, área de comedor común y servicios públicos. Fácil acceso a puentes fronterizos, vías de transportación y zona habitacional.",
    stats: [
      { value: "213", label: "lotes industriales" },
      { value: "24 m y 21 m", label: "vialidades principales" },
      { value: "2019", label: "año del parque" },
      { value: "Business Center", label: "oficinas y comedor" },
    ],
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
        // TODO CONFIRMAR: las seis fotos venían nombradas "IBPSANTA-32..37" y
        // ninguna trae señalética. Santa Catarina tiene tres parques (100, 200
        // y 400), así que esta asignación es provisional.
        images: [
          {
            src: "/photos/projects/ibp-santa-1.jpg",
            alt: "Vista aérea del parque industrial con naves y la sierra al fondo",
          },
          {
            src: "/photos/projects/ibp-santa-2.jpg",
            alt: "Naves industriales del parque desde el aire",
          },
          {
            src: "/photos/projects/ibp-santa-3.jpg",
            alt: "Área de comedor común iluminada de noche",
          },
          {
            src: "/photos/projects/ibp-santa-4.jpg",
            alt: "Vialidades y lotes del parque industrial",
          },
          {
            src: "/photos/projects/ibp-santa-5.jpg",
            alt: "Edificio de oficinas con fachada de piedra y vista a la ciudad",
          },
          {
            src: "/photos/projects/ibp-santa-6.jpg",
            alt: "Conjunto del parque industrial al pie de la sierra",
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
            src: "/photos/hero-caseta.jpg",
            alt: "Caseta de acceso y Business Center del parque al anochecer",
          },
          {
            src: "/photos/projects/salinas-mapa.webp",
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
  {
    id: "residencial",
    label: "Residencial",
    heading: "Vivienda y comunidades",
    body: "En 2008 Grupo Interra inició con proyectos de construcción de fraccionamientos de interés social como Mirador del Parque, San Marcos del Parque I, III y IV, Portal del Parque, Rincón del Parque, San Miguel del Parque y Arboledas del Parque. Gracias al desarrollo de estas comunidades se obtuvo la base para continuar lo que somos hoy.",
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
            src: "/photos/projects/lantana-1.jpg",
            alt: "Sports bar y área común del fraccionamiento Lantana",
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
            src: "/photos/projects/santte-1.jpg",
            alt: "Vista del desarrollo Santte Residencial en Santiago",
          },
          {
            src: "/photos/projects/santte-2.jpg",
            alt: "Lotes y vialidades de Santte Residencial",
          },
          {
            src: "/photos/projects/santte-3.jpg",
            alt: "Entorno de montaña de Santte Residencial",
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
    id: "comercial",
    label: "Comercial",
    heading: "IBP Interra Business Plaza",
    body: "Proyecto de locales comerciales tipo workshop, con amplio espacio para showroom, oficinas, producción y almacenaje. 14 locales desde 190 hasta 500 m², con agua, drenaje, telefonía, internet y energía eléctrica.",
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
    ],
    projects: [
      {
        name: "IBP Interra Business Plaza",
        location: "Salinas Victoria, N.L.",
        meta: "14 locales · 190–500 m²",
        price: "A consultar",
        status: "available",
        statusLabel: "Activo",
        category: "Comercial",
        description:
          "Locales comerciales tipo workshop con amplio espacio para showroom, oficinas, producción y almacenaje. Cuentan con agua, drenaje, telefonía, internet y energía eléctrica.",
      },
    ],
  },
];

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
      { label: "Comercial", href: "#desarrollos" },
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
