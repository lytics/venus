import * as React from "react";
import { cn } from "../lib/utils";
import { ExternalLink, Layers } from "lucide-react";

export interface AppCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Image URL. For `"icon"` variant: centered 72x72 icon on gray background.
   * For `"banner"` variant: full-width cover image.
   */
  icon: string;
  /** Card title. Rendered at 16px, semibold. */
  title: string;
  /** Subtitle shown below the title (icon variant only). Rendered with a Layers icon at 12px. */
  subtitle: string;
  /** Description text shown on hover, replacing the title/subtitle. 2-line clamp. */
  description?: string;
  /** Optional URL. When provided, the entire card becomes an `<a>` link. */
  href?: string;
  /** Callback for the "Install" button shown on hover. If omitted, no install button is rendered. */
  onInstall?: () => void;
  /** Card layout variant.
   * - `"icon"` — 320x246px card with a centered 72px icon on gray background.
   * - `"banner"` — 320px wide card with a full-width cover image.
   * @default "icon"
   */
  variant?: "icon" | "banner";
}

export const AppCard = React.forwardRef<HTMLDivElement, AppCardProps>(
  ({ className, icon, title, subtitle, description, href, onInstall, variant = "icon", ...props }, ref) => {
    const CardWrapper = href ? 'a' : 'div';
    const wrapperProps = href ? { href } : {};

    return (
      <CardWrapper
        {...wrapperProps}
        className={cn(
          "group relative block w-80",
          variant === "icon" ? "h-[246px]" : "h-auto",
          "border border-input-border rounded bg-white",
          "transition-shadow duration-150",
          "hover:shadow-[0_8px_20px_rgba(34,34,34,0.1)]",
          href && "cursor-pointer",
          className
        )}
      >
        <div
          ref={ref}
          {...props}
        >
          {/* Image Area */}
          {variant === "icon" ? (
            <div className="flex items-center justify-center h-40 bg-surface-gray">
              <img
                src={icon}
                alt={title}
                className="w-[72px] h-[72px] object-contain"
              />
            </div>
          ) : (
            <div className="w-full h-40 overflow-hidden rounded-t">
              <img
                src={icon}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Card Body */}
          <div className="p-4">
            {/* Default State */}
            <div className="group-hover:hidden">
              <h3 className="text-base font-semibold text-ink leading-6">
                {title}
              </h3>
              {variant === "icon" && (
                <p className="flex items-center gap-1 text-xs font-normal text-subtle">
                  <Layers className="w-3 h-3" />
                  {subtitle}
                </p>
              )}
            </div>

            {/* Hover State */}
            <div className="hidden group-hover:block">
              {description && (
                <p className="text-sm font-normal text-heading leading-[21px] mb-3 line-clamp-2">
                  {description}
                </p>
              )}
              {onInstall && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onInstall();
                  }}
                  className={cn(
                    "flex items-center gap-1",
                    "h-8 px-4 rounded",
                    "bg-primary text-white",
                    "text-sm font-semibold",
                    "hover:bg-primary-hover transition-colors"
                  )}
                >
                  Install
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </CardWrapper>
    );
  }
);

AppCard.displayName = "AppCard";
