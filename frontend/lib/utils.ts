import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind classes with proper override handling
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format date for display
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(d);
}

/**
 * Format time for display
 */
export function formatTime(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(d);
}

/**
 * Format date and time for display
 */
export function formatDateTime(date: Date | string): string {
  return `${formatDate(date)} at ${formatTime(date)}`;
}

/**
 * Get ICP score color class
 */
export function getICPScoreClass(score: number): string {
  if (score >= 70) return "icp-high";
  if (score >= 40) return "icp-medium";
  return "icp-low";
}

/**
 * Get content status color class
 */
export function getStatusClass(status: string): string {
  const statusMap: Record<string, string> = {
    draft: "status-draft",
    pending: "status-pending",
    approved: "status-approved",
    scheduled: "status-scheduled",
    published: "status-published",
  };
  return statusMap[status.toLowerCase()] || "status-draft";
}

/**
 * Truncate text to specified length
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + "...";
}

/**
 * Debounce function for auto-save
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}
