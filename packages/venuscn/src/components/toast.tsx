import * as React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { X, CheckCircle, XCircle, AlertTriangle, Info } from "lucide-react";
import { cn } from '../lib/utils';

/* ─────────────────────────────────────────────────────────────────────────────
   Toast — Notification toasts built on @radix-ui/react-toast

   Usage:
     // Wrap your app once:
     <Toaster />

     // Trigger from anywhere via the hook:
     const { toast } = useToast();
     toast({ variant: "success", title: "Saved!", description: "Your changes were saved." });
───────────────────────────────────────────────────────────────────────────── */

export type ToastVariant = "default" | "success" | "error" | "warning" | "info";

export interface ToastProps {
  /** Unique id for deduplication — generated automatically if omitted. */
  id?: string;
  /**
   * Visual style of the notification.
   * - `"success"` – green left border (#10B981)
   * - `"error"` – red left border (#EF4444)
   * - `"warning"` – amber left border (#F59E0B)
   * - `"info"` – blue left border (#3B82F6)
   * - `"default"` – primary purple border (#6C5CE7)
   * @default "default"
   */
  variant?: ToastVariant;
  /** Bold title line. */
  title?: string;
  /** Supporting description text shown below the title. */
  description?: string;
  /**
   * Auto-dismiss duration in milliseconds.
   * Pass `Infinity` to keep the toast until manually dismissed.
   * @default 5000
   */
  duration?: number;
  /** Called when the toast is dismissed (close button or timeout). */
  onClose?: () => void;
}

/* ─── Internal variant styles ──────────────────────────────────────────────── */

const variantStyles: Record<ToastVariant, { border: string; iconColor: string; bg: string; ring: string }> = {
  default: { border: "border-primary/30",   iconColor: "text-primary",   bg: "bg-[#f8f7fd]",  ring: "ring-primary/20" },
  success: { border: "border-green-300",    iconColor: "text-success",   bg: "bg-[#f0fdf4]",  ring: "ring-green-200"  },
  error:   { border: "border-red-300",      iconColor: "text-danger",    bg: "bg-[#fef2f2]",  ring: "ring-red-200"    },
  warning: { border: "border-amber-300",    iconColor: "text-warning",   bg: "bg-[#fffbeb]",  ring: "ring-amber-200"  },
  info:    { border: "border-blue-300",     iconColor: "text-info",      bg: "bg-[#eff6ff]",  ring: "ring-blue-200"   },
};

const VariantIcon: Record<ToastVariant, React.ReactNode> = {
  default: <Info className="h-4 w-4" />,
  success: <CheckCircle className="h-4 w-4" />,
  error:   <XCircle className="h-4 w-4" />,
  warning: <AlertTriangle className="h-4 w-4" />,
  info:    <Info className="h-4 w-4" />,
};

/* ─── ToastItem (single notification) ────────────────────────────────────── */

export const ToastItem = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Root>,
  ToastProps & React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root>
>(
  (
    {
      variant = "default",
      title,
      description,
      duration = 5000,
      onClose,
      className,
      ...props
    },
    ref
  ) => {
    const { border, iconColor, bg } = variantStyles[variant];

    return (
      <ToastPrimitive.Root
        ref={ref}
        duration={duration}
        onOpenChange={(open) => { if (!open) onClose?.(); }}
        className={cn(
          // Layout
          "relative flex items-start gap-3 w-full max-w-sm",
          "px-4 py-3",
          // Visual — matches legacy Venus Notification: tinted bg, full border, 4px radius, shadow
          "rounded-[4px] shadow-md",
          "border",
          border,
          bg,
          // Animation
          "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-bottom-2",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-right-2",
          className
        )}
        {...props}
      >
        {/* Icon */}
        <span className={cn("mt-0.5 shrink-0", iconColor)}>
          {VariantIcon[variant]}
        </span>

        {/* Body */}
        <div className="flex-1 min-w-0">
          {title && (
            <ToastPrimitive.Title className="text-sm font-semibold text-title leading-snug">
              {title}
            </ToastPrimitive.Title>
          )}
          {description && (
            <ToastPrimitive.Description className="mt-0.5 text-sm text-body leading-normal">
              {description}
            </ToastPrimitive.Description>
          )}
        </div>

        {/* Close button */}
        <ToastPrimitive.Close
          aria-label="Dismiss notification"
          className={cn(
            "shrink-0 rounded-sm p-0.5 -mr-1 -mt-0.5",
            "text-body/50 hover:text-body",
            "transition-colors duration-150",
            "focus:outline-none focus:ring-2 focus:ring-primary/50"
          )}
        >
          <X className="h-4 w-4" />
        </ToastPrimitive.Close>
      </ToastPrimitive.Root>
    );
  }
);
ToastItem.displayName = "ToastItem";

/* ─── Toaster — place once near root ─────────────────────────────────────── */

export interface ToasterProps {
  /** Max number of toasts visible simultaneously. @default 5 */
  maxToasts?: number;
}

export const Toaster: React.FC<ToasterProps> = ({ maxToasts: _ = 5 }) => {
  const { toasts } = useToast();

  return (
    <ToastPrimitive.Provider swipeDirection="right">
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          onOpenChange={(open) => {
            if (!open) {
              dismissToast(toast.id!);
              toast.onClose?.();
            }
          }}
          {...toast}
        />
      ))}
      <ToastPrimitive.Viewport
        className={cn(
          "fixed bottom-4 right-4 z-[200]",
          "flex flex-col gap-2 w-[380px] max-w-[calc(100vw-2rem)]",
          "outline-none"
        )}
      />
    </ToastPrimitive.Provider>
  );
};

/* ─── useToast hook ───────────────────────────────────────────────────────── */

export interface ToastState extends ToastProps {
  id: string;
  open: boolean;
}

type ToastStore = {
  toasts: ToastState[];
  listeners: Set<(toasts: ToastState[]) => void>;
};

const store: ToastStore = { toasts: [], listeners: new Set() };

function notify() {
  store.listeners.forEach((l) => l([...store.toasts]));
}

function addToast(props: ToastProps): string {
  const id = props.id ?? `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  store.toasts = [...store.toasts, { ...props, id, open: true }];
  notify();
  return id;
}

function dismissToast(id: string) {
  store.toasts = store.toasts.filter((t) => t.id !== id);
  notify();
}

export function useToast() {
  const [toasts, setToasts] = React.useState<ToastState[]>(store.toasts);

  React.useEffect(() => {
    store.listeners.add(setToasts);
    return () => { store.listeners.delete(setToasts); };
  }, []);

  return {
    toasts,
    toast: (props: ToastProps) => addToast(props),
    dismiss: (id: string) => dismissToast(id),
  };
}
