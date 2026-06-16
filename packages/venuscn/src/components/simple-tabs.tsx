"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs";

export interface SimpleTabItem {
  label: string;
  value: string;
  content?: React.ReactNode;
}

export interface SimpleTabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  items: SimpleTabItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export const SimpleTabs = React.forwardRef<HTMLDivElement, SimpleTabsProps>(
  ({ items, value, defaultValue, onChange, className, ...props }, ref) => {
    const resolvedDefault = defaultValue || items[0]?.value;

    return (
      <div ref={ref} className={className} {...props}>
        <Tabs value={value} defaultValue={resolvedDefault} onValueChange={onChange}>
          <TabsList>
            {items.map((item) => (
              <TabsTrigger key={item.value} value={item.value}>
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {items.map((item) => (
            <TabsContent key={item.value} value={item.value}>
              {item.content}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    );
  },
);
SimpleTabs.displayName = "SimpleTabs";
