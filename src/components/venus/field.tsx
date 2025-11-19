import * as React from "react";
import { AlertCircle, CheckCircle, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

/** Venus Design System Field Components */

export interface FieldLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  optional?: boolean;
  children: React.ReactNode;
}

export const FieldLabel = React.forwardRef<HTMLLabelElement, FieldLabelProps>(
  ({ className, required, optional, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          "text-sm font-semibold text-[#2D3748] leading-normal pl-1",
          className
        )}
        {...props}
      >
        {children}
        {required && (
          <span className="text-[#767676] text-sm font-normal ml-2">(required)</span>
        )}
        {optional && (
          <span className="text-[#767676] text-sm font-normal ml-2">(optional)</span>
        )}
      </label>
    );
  }
);

FieldLabel.displayName = "FieldLabel";

export interface HelpTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export const HelpText = React.forwardRef<HTMLParagraphElement, HelpTextProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          "text-[13px] font-normal text-[#718096] leading-normal mt-1",
          className
        )}
        {...props}
      >
        {children}
      </p>
    );
  }
);

HelpText.displayName = "HelpText";

export interface ValidationMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "error" | "success" | "warning";
  children: React.ReactNode;
}

export const ValidationMessage = React.forwardRef<HTMLDivElement, ValidationMessageProps>(
  ({ className, type = "error", children, ...props }, ref) => {
    const Icon = type === "error" ? AlertCircle : type === "success" ? CheckCircle : AlertTriangle;

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-start gap-1.5 mt-1",
          "text-[13px] font-normal leading-normal",
          type === "error" && "text-[#EF4444]",
          type === "success" && "text-[#10B981]",
          type === "warning" && "text-[#F59E0B]",
          className
        )}
        {...props}
      >
        <Icon className="w-4 h-4 flex-shrink-0 mt-0.5" />
        <span>{children}</span>
      </div>
    );
  }
);

ValidationMessage.displayName = "ValidationMessage";

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-1.5 w-full mb-4", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Field.displayName = "Field";
