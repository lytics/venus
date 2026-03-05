import * as React from "react";
import { AlertCircle, CheckCircle, AlertTriangle } from "lucide-react";
import { cn } from '../lib/utils';

/**
 * Venus Design System Field Components
 *
 * Compose form fields using: `<Field>` > `<FieldLabel>` > `<Input>` > `<HelpText>` or `<ValidationMessage>`.
 * Field provides vertical spacing (gap 6px, margin-bottom 16px) for its children.
 */

export interface FieldLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /** Appends "(required)" hint text after the label. @default false */
  required?: boolean;
  /** Appends "(optional)" hint text after the label. @default false */
  optional?: boolean;
  /** Label text content. Rendered at 14px, semibold. */
  children: React.ReactNode;
}

export const FieldLabel = React.forwardRef<HTMLLabelElement, FieldLabelProps>(
  ({ className, required, optional, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          "text-sm font-semibold text-gray-800 leading-normal pl-1",
          className
        )}
        {...props}
      >
        {children}
        {required && (
          <span className="text-hint text-sm font-normal ml-2">(required)</span>
        )}
        {optional && (
          <span className="text-hint text-sm font-normal ml-2">(optional)</span>
        )}
      </label>
    );
  }
);

FieldLabel.displayName = "FieldLabel";

export interface HelpTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** Help text content. Rendered at 13px, gray, below the input. */
  children: React.ReactNode;
}

export const HelpText = React.forwardRef<HTMLParagraphElement, HelpTextProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          "text-[13px] font-normal text-gray-600 leading-normal mt-1",
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
  /** Semantic type controlling icon and color.
   * - `"error"` — Red text with AlertCircle icon.
   * - `"success"` — Green text with CheckCircle icon.
   * - `"warning"` — Yellow text with AlertTriangle icon.
   * @default "error"
   */
  type?: "error" | "success" | "warning";
  /** Validation message text content. Rendered at 13px. */
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
          type === "error" && "text-danger",
          type === "success" && "text-success",
          type === "warning" && "text-warning",
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
  /** Field children — typically FieldLabel, Input/Textarea, HelpText, and/or ValidationMessage. */
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
