import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "../lib/utils";

/** Venus Design System AvatarGroup Component */

export interface AvatarItem {
  src?: string;
  alt?: string;
  fallback?: string;
}

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of avatar data objects. */
  avatars: AvatarItem[];
  /** Maximum number of avatars to show before the overflow pill. @default 3 */
  max?: number;
  /** Size variant for all avatars. @default "md" */
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { outer: "h-7 w-7", text: "text-xs", overflow: "h-7 px-2 text-xs" },
  md: { outer: "h-9 w-9", text: "text-sm", overflow: "h-9 px-2.5 text-sm" },
  lg: { outer: "h-11 w-11", text: "text-base", overflow: "h-11 px-3 text-base" },
};

const overlapMap = {
  sm: "-ml-2",
  md: "-ml-2.5",
  lg: "-ml-3",
};

export const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ avatars, max = 3, size = "md", className, ...props }, ref) => {
    const shown = avatars.slice(0, max);
    const overflow = avatars.length - shown.length;
    const s = sizeMap[size];
    const overlap = overlapMap[size];

    return (
      <div
        ref={ref}
        className={cn("flex items-center", className)}
        {...props}
      >
        {shown.map((avatar, i) => (
          <AvatarPrimitive.Root
            key={i}
            className={cn(
              s.outer,
              "shrink-0 rounded-full border-2 border-white overflow-hidden",
              i !== 0 && overlap
            )}
          >
            {avatar.src && (
              <AvatarPrimitive.Image
                src={avatar.src}
                alt={avatar.alt ?? ""}
                className="h-full w-full object-cover"
              />
            )}
            <AvatarPrimitive.Fallback
              className={cn(
                "flex h-full w-full items-center justify-center bg-[#EDE9FF] text-primary font-semibold uppercase",
                s.text
              )}
            >
              {avatar.fallback ?? (avatar.alt ? avatar.alt.charAt(0) : "?")}
            </AvatarPrimitive.Fallback>
          </AvatarPrimitive.Root>
        ))}
        {overflow > 0 && (
          <div
            className={cn(
              "shrink-0 rounded-full border-2 border-white",
              "flex items-center justify-center",
              "bg-[#F3F0FF] text-primary font-semibold",
              overlap,
              s.overflow
            )}
            aria-label={`${overflow} more`}
          >
            +{overflow}
          </div>
        )}
      </div>
    );
  }
);

AvatarGroup.displayName = "AvatarGroup";
