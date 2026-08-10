import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Check,
  Download,
  Factory,
  FileCheck,
  Home,
  Mail,
  MapPin,
  Phone,
  Route,
  Ruler,
  Trees,
  type LucideProps,
} from "lucide-react";

/**
 * Lucide es el set substituto declarado por el sistema: trazo 1.5px, remates
 * cuadrados, geometría recta. Los iconos nunca se rellenan ni llevan color
 * propio — heredan `currentColor`.
 *
 * El set de casa es cerrado a propósito; si necesitas otro icono, súbelo
 * primero al sistema de diseño.
 */
const ICONS = {
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
