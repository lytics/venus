import * as React from "react";
import { cn } from "../lib/utils";

/** Styled code display with optional line numbers */

export interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The source code string to display. */
  code: string;
  /** Language label shown in the header (decorative only — no syntax highlighting). */
  language?: string;
  /** When true, renders line numbers alongside the code. @default false */
  lineNumbers?: boolean;
}

export const CodeBlock = React.forwardRef<HTMLDivElement, CodeBlockProps>(
  ({ code, language, lineNumbers = false, className, ...props }, ref) => {
    const lines = code.split("\n");

    return (
      <div
        ref={ref}
        className={cn("rounded-md overflow-hidden font-mono text-sm", "bg-[#1a1a2e]", className)}
        {...props}
      >
        {language && (
          <div className="flex items-center justify-between px-4 py-2 bg-[#12122a] border-b border-white/10">
            <span className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider">
              {language}
            </span>
          </div>
        )}

        <div className="overflow-x-auto p-4">
          {lineNumbers ? (
            <table className="w-full border-collapse">
              <tbody>
                {lines.map((line, i) => (
                  <tr key={i}>
                    <td
                      className="select-none text-right pr-4 text-[#4B5563] text-xs align-top w-[1%] whitespace-nowrap"
                      aria-hidden="true"
                    >
                      {i + 1}
                    </td>
                    <td className="text-[#E2E8F0] whitespace-pre">{line}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <pre className="text-[#E2E8F0] whitespace-pre m-0 p-0">{code}</pre>
          )}
        </div>
      </div>
    );
  },
);

CodeBlock.displayName = "CodeBlock";
