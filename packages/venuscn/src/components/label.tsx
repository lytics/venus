import * as React from "react";
import { cn } from '../lib/utils';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /** The id of the form control this label describes. */
  htmlFor?: string;
  /**
   * When true, appends a red asterisk to indicate the associated field is required.
   * @default false
   */
  required?: boolean;
  /** Label text content. */
  children: React.ReactNode;
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ htmlFor, required = false, className, children, ...props }, ref) => (
    <label
      ref={ref}
      htmlFor={htmlFor}
      className={cn(
        "inline-flex items-center gap-1",
        "text-sm font-semibold text-heading",
        "cursor-default select-none",
        className
      )}
      {...props}
    >
      {children}
      {required && (
        <span aria-hidden="true" className="text-danger leading-none">
          *
        </span>
      )}
    </label>
  )
);

Label.displayName = "Label";
