"use client";

import * as React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./accordion";

export interface SimpleAccordionItem {
  label: string;
  value: string;
  content?: React.ReactNode;
}

export interface SimpleAccordionProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onChange"
> {
  items: SimpleAccordionItem[];
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  collapsible?: boolean;
}

export const SimpleAccordion = React.forwardRef<HTMLDivElement, SimpleAccordionProps>(
  ({ items, type = "single", defaultValue, collapsible = true, className, ...props }, ref) => {
    const accordionProps =
      type === "single"
        ? { type: "single" as const, collapsible, defaultValue: defaultValue as string | undefined }
        : { type: "multiple" as const, defaultValue: defaultValue as string[] | undefined };

    return (
      <div ref={ref} className={className} {...props}>
        <Accordion {...accordionProps}>
          {items.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.label}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  },
);
SimpleAccordion.displayName = "SimpleAccordion";
