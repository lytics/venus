import * as React from "react";
import { cn } from '../lib/utils';

/** Variant determines the rendered HTML element and default visual style. */
export type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small" | "label" | "code";

/** Text color alias mapping to Venus design tokens. */
export type TypographyColor = "title" | "heading" | "body" | "subtle" | "primary";

/** Font weight alias. */
export type TypographyWeight = "normal" | "medium" | "semibold" | "bold";

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Determines the rendered HTML element and default typographic style.
   * - `"h1"` – `<h1>` 36px bold
   * - `"h2"` – `<h2>` 30px bold
   * - `"h3"` – `<h3>` 24px semibold
   * - `"h4"` – `<h4>` 20px semibold
   * - `"h5"` – `<h5>` 18px semibold
   * - `"h6"` – `<h6>` 16px semibold
   * - `"p"` – `<p>` 16px regular
   * - `"small"` – `<small>` 12px regular
   * - `"label"` – `<label>` 14px medium
   * - `"code"` – `<code>` 14px mono
   * @default "p"
   */
  variant?: TypographyVariant;
  /** Override the font weight. Falls back to the variant default when not set. */
  weight?: TypographyWeight;
  /**
   * Text color using Venus design tokens.
   * - `"title"` – #111827, primary heading
   * - `"heading"` – #475161, secondary heading
   * - `"body"` – #6B7280, body copy
   * - `"subtle"` – #647696, de-emphasised text
   * - `"primary"` – Venus purple #6C5CE7
   * @default "body"
   */
  color?: TypographyColor;
  /** Content to render. */
  children: React.ReactNode;
}

const variantTag: Record<TypographyVariant, keyof React.JSX.IntrinsicElements> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  small: "small",
  label: "label",
  code: "code",
};

const variantClasses: Record<TypographyVariant, string> = {
  h1: "text-4xl font-bold leading-tight tracking-tight",
  h2: "text-3xl font-bold leading-tight tracking-tight",
  h3: "text-2xl font-semibold leading-snug",
  h4: "text-xl font-semibold leading-snug",
  h5: "text-lg font-semibold leading-normal",
  h6: "text-base font-semibold leading-normal",
  p: "text-base font-normal leading-normal",
  small: "text-xs font-normal leading-normal",
  label: "text-sm font-medium leading-normal",
  code: "text-sm font-normal font-mono",
};

const colorClasses: Record<TypographyColor, string> = {
  title: "text-title",
  heading: "text-heading",
  body: "text-body",
  subtle: "text-[#647696]",
  primary: "text-primary",
};

const weightClasses: Record<TypographyWeight, string> = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ variant = "p", weight, color = "body", className, children, ...props }, ref) => {
    const Tag = variantTag[variant] as React.ElementType;
    return (
      <Tag
        ref={ref}
        className={cn(
          variantClasses[variant],
          colorClasses[color],
          weight && weightClasses[weight],
          className
        )}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

Typography.displayName = "Typography";
