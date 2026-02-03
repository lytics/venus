"use client";

import { useState } from "react";

interface AppCardProps {
  title?: string;
  description?: string;
  appType?: string;
  buttonText?: string;
}

export function AppCard({
  title = "AI Assistant",
  description = "Create brand and tone-specific content in seconds for your Contentstack entries.",
  appType = "Stack App",
  buttonText = "Install",
}: AppCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <div
      style={{
        width: 350,
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          border: "1px solid rgb(221, 227, 238)",
          borderRadius: 4,
          backgroundColor: "white",
          margin: 15,
          width: 320,
          minHeight: 246,
          cursor: "pointer",
        }}
      >
        {/* Cover area */}
        <div
          style={{
            width: 318,
            height: 160,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgb(247, 249, 252)",
            borderBottom: "1px solid rgb(221, 227, 238)",
            minWidth: 300,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 10,
              display: "block",
              backgroundColor: "rgb(221, 227, 238)",
            }}
          />
        </div>

        {/* Body */}
        <div
          style={{
            padding: 16,
            backgroundColor: "white",
          }}
        >
          {/* Title row */}
          <div style={{ display: "flex", marginBottom: 8 }}>
            <h2
              style={{
                margin: 0,
                fontWeight: 600,
                fontSize: 16,
                lineHeight: "24px",
                letterSpacing: "0.16px",
                color: "rgb(33, 33, 33)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {title}
            </h2>
          </div>

          {/* App type row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              style={{ flexShrink: 0 }}
            >
              <rect x="1" y="1" width="6" height="6" rx="1" fill="rgb(110, 107, 134)" />
              <rect x="9" y="1" width="6" height="6" rx="1" fill="rgb(110, 107, 134)" />
              <rect x="1" y="9" width="6" height="6" rx="1" fill="rgb(110, 107, 134)" />
              <rect x="9" y="9" width="6" height="6" rx="1" fill="rgb(110, 107, 134)" />
            </svg>
            <p
              style={{
                margin: 0,
                fontSize: 12,
                lineHeight: "18px",
                color: "rgb(110, 107, 134)",
                letterSpacing: "0.24px",
                marginLeft: 4,
                fontFamily: "Inter, sans-serif",
              }}
            >
              {appType}
            </p>
          </div>

          {/* Description */}
          <p
            style={{
              margin: 0,
              fontSize: 14,
              lineHeight: "21px",
              color: "rgb(71, 81, 97)",
              overflow: "hidden",
              height: 44,
              fontFamily: "Inter, sans-serif",
            }}
          >
            {description}
          </p>
        </div>

        {/* Footer */}
        <div
          style={{
            padding: "0 16px 16px 16px",
          }}
        >
          <button
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            style={{
              backgroundColor: isButtonHovered
                ? "rgb(93, 80, 190)"
                : "rgb(108, 92, 231)",
              color: "white",
              fontSize: 14,
              fontWeight: 600,
              borderRadius: 4,
              height: 32,
              padding: "5px 16px",
              border: "none",
              cursor: "pointer",
              fontFamily: "Inter, sans-serif",
            }}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
