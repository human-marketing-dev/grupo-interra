import type { IconName } from "@/components/ds/Icon";
import type { PropertyStatus } from "@/components/ds/PropertyCard";

/**
 * Copy de la landing. Español de México, sentence case, cifras siempre con
 * unidad y contexto.
 *
 * OJO: nombres de proyecto, cifras y datos de contacto vienen del sistema de
 * diseño y son de MUESTRA. Sustitúyelos por los reales antes de publicar.
 */

export const NAV_LINKS = [
  { label: "Verticales", href: "#verticales" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Cobertura", href: "#cobertura" },
];

export const HERO_STATS = [
  { value: "+1,200 ha", label: "Superficie desarrollada" },
  { value: "24", label: "Proyectos entregados" },
  { value: "18 años", label: "Operando en México" },
  { value: "3", label: "Estados con presencia" },
];

export const VERTICALS: {
  number: string;
  kicker: string;
  icon: IconName;
  title: string;
  description: string;
  minimum: string;
  cta: string;
}[] = [
  {
    number: "01",
    kicker: "Residencial",
    icon: "home",
    title: "Fraccionamientos y lotes campestres",
    description:
      "Urbanización terminada, servicios subterráneos y escrituración lista desde la firma.",
    minimum: "Desde 300 m²",
    cta: "Ver lotes",
  },
  {
    number: "02",
    kicker: "Industrial",
    icon: "factory",
    title: "Macrolotes y parques logísticos",
    description:
      "Factibilidad de energía y agua resuelta, con acceso directo a corredor carretero.",
    minimum: "Desde 2 ha",
    cta: "Ver parques",
  },
  {
    number: "03",
    kicker: "Comercial",
    icon: "building-2",
    title: "Terrenos y locales sobre avenida",
    description:
      "Estudio de aforo, anclas definidas y estacionamiento suficiente por metro rentable.",
    minimum: "Desde 90 m²",
    cta: "Ver locales",
  },
];

export const DIFFERENTIATORS: {
  icon: IconName;
  title: string;
  description: string;
}[] = [
  {
    icon: "file-check",
    title: "Nada se vende sin papeles",
    description:
      "Uso de suelo, licencias y título limpio antes del primer anuncio.",
  },
  {
    icon: "route",
    title: "Infraestructura primero",
    description: "Urbanizamos con equipo propio; no subcontratamos el criterio.",
  },
  {
    icon: "trees",
    title: "Suelo con vocación",
    description:
      "Cada hectárea se estudia antes de comprarse: qué debe construirse ahí.",
  },
];

export const PROJECT_FILTERS = [
  "Todos",
  "Residencial",
  "Industrial",
  "Comercial",
];

export const PROJECTS: {
  name: string;
  location: string;
  category: string;
  status: PropertyStatus;
  statusLabel: string;
  area: string;
  price: string;
}[] = [
  {
    name: "Altavera",
    location: "Zona Sur, Querétaro",
    category: "Residencial",
    status: "available",
    statusLabel: "Disponible",
    area: "Desde 300 m²",
    price: "Desde $1.8M MXN",
  },
  {
    name: "Interra Park",
    location: "Corredor Industrial, Silao",
    category: "Industrial",
    status: "reserved",
    statusLabel: "Apartado",
    area: "Desde 2 ha",
    price: "A consultar",
  },
  {
    name: "Plaza Terra",
    location: "Av. Constituyentes, Querétaro",
    category: "Comercial",
    status: "available",
    statusLabel: "Disponible",
    area: "Desde 120 m²",
    price: "Desde $42,000 / mes",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Estudio de vocación",
    description:
      "Analizamos suelo, entorno y demanda antes de comprar una sola hectárea.",
  },
  {
    step: "02",
    title: "Urbanización",
    description:
      "Vialidades, servicios subterráneos y áreas comunes con supervisión propia.",
  },
  {
    step: "03",
    title: "Permisos y escritura",
    description:
      "Uso de suelo, licencias y títulos limpios antes de salir a venta.",
  },
  {
    step: "04",
    title: "Comercialización",
    description:
      "Asesoría directa, planes de pago y acompañamiento hasta la firma.",
  },
];

export const COVERAGE = [
  { state: "Querétaro", projects: "11 proyectos" },
  { state: "Guanajuato", projects: "8 proyectos" },
  { state: "San Luis Potosí", projects: "5 proyectos" },
];

export const CONTACT_DETAILS: { icon: IconName; value: string; href: string }[] =
  [
    { icon: "phone", value: "442 000 0000", href: "tel:+524420000000" },
    {
      icon: "mail",
      value: "ventas@grupointerra.mx",
      href: "mailto:ventas@grupointerra.mx",
    },
    {
      icon: "map-pin",
      value: "Av. Constituyentes 1000, Querétaro",
      href: "https://maps.google.com/?q=Av.+Constituyentes+1000,+Quer%C3%A9taro",
    },
  ];

export const PROJECT_TYPES = ["Residencial", "Industrial", "Comercial"];

export const FOOTER_COLUMNS = [
  {
    title: "Proyectos",
    links: [
      { label: "Residencial", href: "#proyectos" },
      { label: "Industrial", href: "#proyectos" },
      { label: "Comercial", href: "#proyectos" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Nosotros", href: "#nosotros" },
      { label: "Cobertura", href: "#cobertura" },
      { label: "Contacto", href: "#contacto" },
      { label: "Aviso de privacidad", href: "#" },
    ],
  },
];
