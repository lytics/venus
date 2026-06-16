import * as React from "react";
import { cn } from "../lib/utils";

/** Wrapper with context */

interface FormContextValue {
  disabled: boolean;
}

const FormContext = React.createContext<FormContextValue>({ disabled: false });

/** Access form-level state (e.g., disabled) from within a Form. */
export function useFormContext(): FormContextValue {
  return React.useContext(FormContext);
}

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  /** When true, all form controls inside inherit a disabled state via context. @default false */
  disabled?: boolean;
}

/**
 * Venus Form — wraps a `<form>` element and provides a FormContext.
 * Use alongside Field, Input, Select, etc. for consistent layout and spacing.
 */
export const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ disabled = false, className, children, onSubmit, ...props }, ref) => {
    return (
      <FormContext.Provider value={{ disabled }}>
        <form
          ref={ref}
          onSubmit={(e) => {
            if (disabled) {
              e.preventDefault();
              return;
            }
            onSubmit?.(e);
          }}
          className={cn("flex flex-col gap-4", className)}
          {...props}
        >
          {children}
        </form>
      </FormContext.Provider>
    );
  },
);

Form.displayName = "Form";
