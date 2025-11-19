"use client";

import { cn } from "@/lib/utils";

interface ShineBorderProps {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  shineColor?: string[];
  className?: string;
  children: React.ReactNode;
}

export function ShineBorder({
  borderRadius = 8,
  borderWidth = 2,
  duration = 3,
  shineColor = ["#A07CFE", "#FE8FB5", "#FFBE7B"],
  className,
  children,
}: ShineBorderProps) {
  return (
    <div className={cn("relative p-1", className)}>
      {/* Animated shine border overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          borderRadius: `${borderRadius}px`,
          background: `conic-gradient(from 0deg, #ff0000, #00ff00, #0000ff, #ff0000)`,
          animation: `spin ${duration}s linear infinite`,
        }}
      />

      {/* Content with background */}
      <div
        className="relative z-10 bg-background"
        style={{
          borderRadius: `${Math.max(0, borderRadius - borderWidth)}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
}