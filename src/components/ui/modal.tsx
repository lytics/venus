"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useViewport } from "@/components/viewport-provider";

const ModalContext = React.createContext<{ size: "default" | "wide" | "large" | "full" | "responsive" } | undefined>(undefined);

function useModalContext() {
  const context = React.useContext(ModalContext);
  return context;
}

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: "default" | "wide" | "large" | "full" | "responsive";
  className?: string;
}

interface ModalHeaderProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "large" | "full" | "responsive";
}

interface ModalContentProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "large" | "full" | "responsive";
}

interface ModalFooterProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "large" | "full" | "responsive";
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ open, onClose, children, size = "default", className, ...props }, ref) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const { maxWidth } = useViewport();

    React.useEffect(() => {
      if (open) {
        setIsVisible(true);
        document.body.style.overflow = "hidden";
      } else {
        const timer = setTimeout(() => setIsVisible(false), 150);
        document.body.style.overflow = "unset";
        return () => clearTimeout(timer);
      }

      return () => {
        document.body.style.overflow = "unset";
      };
    }, [open]);

    React.useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          onClose();
        }
      };

      if (open) {
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
      }
    }, [open, onClose]);

    if (!isVisible) return null;

    const sizeClasses = {
      default: "max-w-md",
      wide: "max-w-4xl",
      large: "max-w-7xl",
      full: "max-w-[calc(100vw-2rem)]",
      responsive: maxWidth === "none" ? "max-w-[1488px]" : "",
    };

    const responsiveStyle = size === "responsive" && maxWidth !== "none" ? {
      maxWidth: `calc(${maxWidth} - 2rem)`,
      width: "100%"
    } : {};

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop with blur */}
        <div
          className={cn(
            "absolute inset-0 bg-gray-12/20 dark:bg-gray-1/60 backdrop-blur-sm transition-opacity duration-200",
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={onClose}
        />

        {/* Modal */}
        <div
          ref={ref}
          className={cn(
            "relative w-full bg-background border border-border rounded-lg shadow-lg transition-all duration-200 flex flex-col max-h-[calc(100vh-2rem)]",
            sizeClasses[size],
            open ? "scale-100 opacity-100" : "scale-95 opacity-0",
            className
          )}
          style={responsiveStyle}
          {...props}
        >
          <ModalContext.Provider value={{ size }}>
            {children}
          </ModalContext.Provider>
        </div>
      </div>
    );
  }
);
Modal.displayName = "Modal";

const ModalHeader = React.forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ children, className, size: propSize, ...props }, ref) => {
    const context = useModalContext();
    const size = propSize || context?.size || "default";

    const paddingClasses = {
      default: "p-6",
      wide: "p-6",
      large: "px-8 pt-8 pb-4",
      full: "px-8 pt-8 pb-4",
      responsive: "px-8 pt-8 pb-4",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-between",
          paddingClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
ModalHeader.displayName = "ModalHeader";

const ModalContent = React.forwardRef<HTMLDivElement, ModalContentProps>(
  ({ children, className, size: propSize, ...props }, ref) => {
    const context = useModalContext();
    const size = propSize || context?.size || "default";

    const paddingClasses = {
      default: "p-6",
      wide: "p-6",
      large: "p-8",
      full: "p-8",
      responsive: "p-8",
    };

    return (
      <div
        ref={ref}
        className={cn("flex-1 overflow-y-auto", paddingClasses[size], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
ModalContent.displayName = "ModalContent";

const ModalFooter = React.forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ children, className, size: propSize, ...props }, ref) => {
    const context = useModalContext();
    const size = propSize || context?.size || "default";

    const paddingClasses = {
      default: "p-6",
      wide: "p-6",
      large: "px-8 pt-4 pb-8",
      full: "px-8 pt-4 pb-8",
      responsive: "px-8 pt-4 pb-8",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-end gap-3 sticky bottom-0 bg-background",
          paddingClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
ModalFooter.displayName = "ModalFooter";

const ModalTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        className={cn("text-xl font-semibold text-foreground", className)}
        {...props}
      />
    );
  }
);
ModalTitle.displayName = "ModalTitle";

const ModalClose = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="ghost"
        size="sm"
        className={cn("h-8 w-8 p-0", className)}
        {...props}
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </Button>
    );
  }
);
ModalClose.displayName = "ModalClose";

export {
  Modal,
  ModalHeader,
  ModalContent,
  ModalFooter,
  ModalTitle,
  ModalClose,
};