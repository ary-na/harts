// src/lib/utils/cn.ts

// Import twMerge function from tailwind-merge to merge Tailwind CSS class names
import { twMerge } from "tailwind-merge";
// Import ClassValue type from clsx along with clsx function
import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
