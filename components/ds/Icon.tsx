import {
  ArrowLeft,
  ArrowRight,
  Blocks,
  Building2,
  Check,
  Download,
  Factory,
  FileCheck,
  Globe,
  Handshake,
  Home,
  HousePlus,
  Mail,
  MapPin,
  Package,
  Pause,
  Phone,
  Play,
  PlugZap,
  Route,
  Ruler,
  ShieldCheck,
  Store,
  TrendingUp,
  Trees,
  Users,
  Utensils,
  Wifi,
  Wrench,
  Zap,
  type LucideProps,
} from "lucide-react";

/**
 * Lucide es el set substituto declarado por el sistema: trazo 1.5px, remates
 * cuadrados, geometría recta. Los iconos nunca se rellenan ni llevan color
 * propio — heredan `currentColor`.
 *
 * El set de casa del readme del sistema es el primer bloque. El segundo son los
 * que pide la landing real (beneficios IBP, Business Plaza) y que aún no están
 * documentados allá: si el set se formaliza, hay que reconciliarlos.
 */
const ICONS = {
  // set de casa
  "arrow-left": ArrowLeft,
  "arrow-right": ArrowRight,
  "building-2": Building2,
  check: Check,
  download: Download,
  factory: Factory,
  "file-check": FileCheck,
  home: Home,
  mail: Mail,
  "map-pin": MapPin,
  phone: Phone,
  route: Route,
  ruler: Ruler,
  trees: Trees,

  // añadidos por la landing
  blocks: Blocks,
  globe: Globe,
  handshake: Handshake,
  "house-plus": HousePlus,
  package: Package,
  pause: Pause,
  play: Play,
  "plug-zap": PlugZap,
  "shield-check": ShieldCheck,
  store: Store,
  "trending-up": TrendingUp,
  users: Users,
  utensils: Utensils,
  wifi: Wifi,
  wrench: Wrench,
  zap: Zap,
} as const;

export type IconName = keyof typeof ICONS;

export type IconProps = Omit<LucideProps, "ref"> & {
  name: IconName;
  size?: number;
};

export function Icon({ name, size = 20, strokeWidth = 1.5, ...rest }: IconProps) {
  const Glyph = ICONS[name];
  return (
    <Glyph
      size={size}
      strokeWidth={strokeWidth}
      aria-hidden
      focusable={false}
      {...rest}
    />
  );
}
