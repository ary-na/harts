// src/lib/types/SvgIcon.ts

// Import SVGProps from React to extend the properties for SVG elements
import { SVGProps } from "react";

export interface SvgIconProps extends SVGProps<SVGSVGElement> {
  alt?: string;
  title?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
}
