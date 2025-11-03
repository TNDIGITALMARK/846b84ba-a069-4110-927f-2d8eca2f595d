import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format a number as Indian Rupees (₹)
 * @param amount - The numeric amount to format
 * @param includeDecimals - Whether to include decimal places (default: false)
 * @returns Formatted currency string with rupee symbol
 *
 * @example
 * formatRupees(150) // "₹150"
 * formatRupees(1599.50, true) // "₹1,599.50"
 */
export function formatRupees(amount: number, includeDecimals: boolean = false): string {
  const formatted = includeDecimals
    ? amount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    : Math.round(amount).toLocaleString('en-IN');

  return `₹${formatted}`;
}
