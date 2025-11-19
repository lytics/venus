"use client";

import * as React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

/** Venus Design System Dropdown Component */

export interface DropdownItem {
  label: string;
  value: string;
}

export interface DropdownProps {
  items: DropdownItem[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  icon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  /** Dropdown version - v1 is simpler with just text, v2 has borders */
  version?: "v1" | "v2";
  /** Enable search functionality in dropdown menu (V2 only) */
  withSearch?: boolean;
}

export const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  ({ items, value, onChange, placeholder, icon, className, disabled = false, version = "v2", withSearch = false }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState<string | undefined>(value);
    const [searchQuery, setSearchQuery] = React.useState("");
    const dropdownRef = React.useRef<HTMLDivElement>(null);
    const searchInputRef = React.useRef<HTMLInputElement>(null);

    // Get selected item
    const selectedItem = items.find((item) => item.value === selectedValue);

    // Filter items based on search query
    const filteredItems = React.useMemo(() => {
      if (!withSearch || !searchQuery.trim()) {
        return items;
      }
      return items.filter((item) =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }, [items, searchQuery, withSearch]);

    // Handle click outside
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isOpen]);

    // Handle keyboard navigation
    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (disabled) return;

      if (event.key === "Escape") {
        setIsOpen(false);
      } else if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setIsOpen(!isOpen);
      }
    };

    const handleItemClick = (item: DropdownItem) => {
      if (disabled) return;

      setSelectedValue(item.value);
      setIsOpen(false);
      onChange?.(item.value);
    };

    const handleTriggerClick = () => {
      if (disabled) return;
      setIsOpen(!isOpen);
    };

    // Focus search input when dropdown opens
    React.useEffect(() => {
      if (isOpen && withSearch && searchInputRef.current) {
        setTimeout(() => searchInputRef.current?.focus(), 0);
      }
      if (!isOpen) {
        setSearchQuery("");
      }
    }, [isOpen, withSearch]);

    return (
      <div
        ref={dropdownRef}
        className={cn("relative", className)}
        onKeyDown={handleKeyDown}
      >
        {/* Trigger Button */}
        <div
          role="button"
          tabIndex={disabled ? -1 : 0}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-disabled={disabled}
          onClick={handleTriggerClick}
          className={cn(
            // Base styles
            "flex items-center",
            version === "v2" && "w-full",
            "cursor-pointer",
            "transition-all duration-150",

            // V1 specific styles (minimal, text-based) - EXACT Storybook specs
            version === "v1" && [
              "h-[14px]",
              "w-fit",
              "text-[13px] font-semibold leading-[13px]",
              "text-[#647696]", // Default gray
              "hover:text-[#475161]", // Darker gray on hover
              disabled && "opacity-50 cursor-not-allowed"
            ],

            // V2 specific styles (bordered dropdown)
            version === "v2" && [
              "gap-2",
              "py-2 px-4",
              "bg-white",
              "rounded-[4px]",
              // Border - same in all states (no layout shift)
              "border border-[#DDE3EE]",
              // Hover and Open styles (identical - purple border with inset shadow)
              "hover:!border-[#6C5CE7] hover:shadow-[inset_0_0_0_1px_#6C5CE7]",
              isOpen && "!border-[#6C5CE7] shadow-[inset_0_0_0_1px_#6C5CE7]",
              // Focus/Active styles
              "focus:outline-none focus:!border-[#6C5CE7] focus:shadow-[inset_0_0_0_1px_#6C5CE7]",
              // Disabled styles
              disabled && "opacity-50 cursor-not-allowed hover:!border-[#DDE3EE] hover:shadow-none"
            ]
          )}
        >
          {/* Icon */}
          {icon && <span className="flex items-center">{icon}</span>}

          {/* Label - show selected item label or placeholder */}
          {!icon && (
            <span className={cn(
              version === "v1" && "text-[13px] font-semibold leading-[13px]",
              version === "v2" && "text-base font-normal text-[#222222]",
              // Allow parent className to override font-weight
              className?.includes("font-bold") && "!font-bold"
            )}>
              {selectedItem?.label || placeholder || "Select..."}
            </span>
          )}

          {/* Spacer to push chevron to the right (v2 only) */}
          {version === "v2" && <div className="flex-1" />}

          {/* Chevron */}
          {version === "v1" ? (
            // V1 chevron - EXACT SVG from Storybook
            <svg
              className="ml-[5px]"
              width="8"
              height="6"
              viewBox="0 0 8 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.135 0a1 1 0 0 0-.768 1.64l2.865 3.438a1 1 0 0 0 1.536 0L7.633 1.64A1 1 0 0 0 6.865 0h-5.73z"
                fill="#A9B6CB"
              />
            </svg>
          ) : (
            // V2 chevron - lucide icons
            <>
              {isOpen ? (
                <ChevronUp className="w-6 h-6 text-gray-700" strokeWidth={1.5} />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-700" strokeWidth={1.5} />
              )}
            </>
          )}
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div
            className={cn(
              "absolute left-0 z-50",
              "bg-white",

              // V1 specific menu styles - EXACT Storybook specs
              version === "v1" && [
                "top-[15px]", // 1px gap from trigger (14px trigger + 1px)
                "min-w-[180px] w-[180px] max-w-[300px]",
                "rounded-[8px]",
                "shadow-[0_4px_30px_0_rgba(0,0,0,0.25)]"
              ],

              // V2 specific menu styles
              version === "v2" && [
                "top-[calc(100%+2px)]",
                "w-full",
                "border border-[#DDE3EE]",
                "rounded-[4px]",
                "shadow-[0_8px_10px_1px_rgba(0,0,0,0.14),0_3px_14px_3px_rgba(0,0,0,0.12),0_4px_15px_0_rgba(108,92,231,0.2)]"
              ]
            )}
          >
            {/* Search Input - V2 only - EXACT Storybook specs */}
            {withSearch && version === "v2" && (
              <div className="relative">
                {/* Search Icon - positioned absolutely, left side */}
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.438 12.438L9.624 9.624M6.25 10.75a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z"
                    stroke="#A9B6CB"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search here..."
                  className="w-full h-[46px] pl-[37px] pr-[25px] text-base font-normal leading-6 text-[#212121] border border-[#DDE3EE] rounded-[4px] focus:outline-none placeholder:text-[#A9B6CB] transition-all duration-150 hover:!border-[#6C5CE7] hover:shadow-[inset_0_0_0_1px_#6C5CE7] focus:!border-[#6C5CE7] focus:shadow-[inset_0_0_0_1px_#6C5CE7]"
                />

                {/* Clear Button - shows when there's text */}
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A9B6CB] hover:text-gray-600"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            )}

            <ul
              role="listbox"
              aria-activedescendant={selectedValue}
              className={cn(
                "list-none m-0 max-h-[240px] overflow-y-auto",
                version === "v1" ? "py-1" : "py-1"
              )}
            >
              {filteredItems.length === 0 && withSearch ? (
                <li className="py-4 px-[18px] text-sm text-gray-500 text-center">
                  No Result Found
                </li>
              ) : (
                filteredItems.map((item) => {
                const isActive = item.value === selectedValue;

                return (
                  <li
                    key={item.value}
                    role="option"
                    aria-selected={isActive}
                    onClick={() => handleItemClick(item)}
                    className={cn(
                      "cursor-pointer",
                      "transition-colors duration-150",

                      // V1 specific item styles - EXACT Storybook specs
                      version === "v1" && [
                        "py-[10px] px-5",
                        "h-10",
                        "text-[13px] leading-5",
                        // Active state
                        isActive && "font-bold text-[#6C5CE7]",
                        // Normal state
                        !isActive && "font-normal text-[#222222]",
                        // Hover state
                        !isActive && "hover:text-[#6C5CE7] hover:bg-[#F5F5F5]"
                      ],

                      // V2 specific item styles
                      version === "v2" && [
                        "py-4 px-[18px]",
                        "text-base font-normal",
                        // Active state
                        isActive && "text-primary",
                        // Normal state
                        !isActive && "text-[#222222]",
                        // Hover state
                        !isActive && "hover:text-[#5D50BE] hover:bg-[#F7F9FC]"
                      ]
                    )}
                  >
                    {item.label}
                  </li>
                );
              })
              )}
            </ul>
          </div>
        )}
      </div>
    );
  }
);

Dropdown.displayName = "Dropdown";
