import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const truncateTitle = (title: string, maxLength: number) => {
  if (title.length > maxLength) {
    return `${title.slice(0, maxLength)}...`;
  }
  return title;
};