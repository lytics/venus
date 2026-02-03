"use client";

import React, { type ReactNode } from "react";

interface MarketplaceSectionProps {
  title: string;
  viewAllText: string;
  description: string;
  children: ReactNode;
}

export function MarketplaceSection({
  title,
  viewAllText,
  description,
  children,
}: MarketplaceSectionProps) {
  return (
    <div style={{ width: "100%", fontFamily: "Inter, sans-serif" }}>
      <div style={{ padding: "8px 16px" }}>
        {/* Header row */}
        <div
          style={{
            marginTop: 20,
            marginBottom: 10,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <h4
            style={{
              fontSize: 22,
              fontWeight: 600,
              lineHeight: "33px",
              color: "rgb(34,34,34)",
              letterSpacing: "-0.00418px",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              margin: 0,
            }}
          >
            {title}
          </h4>

          {/* Dashed line */}
          <div
            style={{
              flex: 1,
              height: 1,
              marginLeft: 15,
              borderTop: "1px dashed rgb(221,227,238)",
            }}
          />

          {/* View All link */}
          <div
            style={{
              fontSize: 14,
              lineHeight: "14px",
            }}
          >
            <a
              href="#"
              style={{
                color: "rgb(108,92,231)",
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
                marginLeft: 15,
                textDecoration: "none",
              }}
            >
              <span>{viewAllText}</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                style={{ marginLeft: 4 }}
              >
                <path
                  d="M4.5 2.5L8 6L4.5 9.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Description */}
        <div
          style={{
            color: "rgb(71,81,97)",
            fontSize: 14,
            lineHeight: "25px",
            width: "60%",
            marginLeft: 15,
          }}
        >
          {description}
        </div>
      </div>

      {/* Card grid */}
      <div style={{ display: "flex", alignItems: "stretch" }}>{children}</div>
    </div>
  );
}
