"use client";

/**
 * Simple viewport provider stub
 * Returns default maxWidth value for modal sizing
 */
export function useViewport() {
  return {
    maxWidth: "none" as const,
  };
}
