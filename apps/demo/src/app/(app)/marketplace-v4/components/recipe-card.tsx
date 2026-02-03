"use client";

import { useState } from "react";

interface RecipeCardProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export function RecipeCard({
  title = "AWS S3 Integration",
  description = "Create a new object in AWS S3 via Automate.",
  buttonText = "Import",
}: RecipeCardProps) {
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
          minHeight: 240,
          cursor: "pointer",
          boxShadow: isHovered
            ? "rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.12) 0px 2px 2px 0px, rgba(0, 0, 0, 0.14) 0px 0px 2px 0px"
            : "none",
          transition: "box-shadow 0.1s ease-in-out",
        }}
      >
        {/* Inner wrapper */}
        <div style={{ width: "100%" }}>
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: 160,
              padding: "0 20px",
              borderRadius: 4,
              backgroundColor: "rgb(247, 249, 252)",
              boxSizing: "border-box",
            }}
          >
            {/* Avatar list */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* Avatar 1 */}
              <div
                style={{
                  width: 65,
                  height: 65,
                  borderRadius: "50%",
                  backgroundColor: "rgb(237, 241, 247)",
                  border: "2px solid rgb(247, 249, 252)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <rect
                    x="4"
                    y="4"
                    width="20"
                    height="20"
                    rx="4"
                    stroke="rgb(110, 107, 134)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M10 14h8M14 10v8"
                    stroke="rgb(110, 107, 134)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Avatar 2 */}
              <div
                style={{
                  width: 65,
                  height: 65,
                  borderRadius: "50%",
                  backgroundColor: "rgb(237, 241, 247)",
                  border: "2px solid rgb(247, 249, 252)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: -10,
                  position: "relative",
                  zIndex: 0,
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <circle
                    cx="14"
                    cy="14"
                    r="10"
                    stroke="rgb(110, 107, 134)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M9 14l4 4 6-8"
                    stroke="rgb(110, 107, 134)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div
            style={{
              height: 1,
              backgroundColor: "rgb(221, 227, 238)",
              width: "100%",
            }}
          />

          {/* Body */}
          <div style={{ padding: 16 }}>
            {/* Title row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    margin: 0,
                    fontWeight: 600,
                    fontSize: 16,
                    lineHeight: "24px",
                    color: "rgb(33, 33, 33)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {title}
                </h3>
              </div>
              {/* Copy icon */}
              <div
                style={{
                  width: 24,
                  height: 24,
                  display: "block",
                  flexShrink: 0,
                  marginLeft: 8,
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    x="8"
                    y="3"
                    width="12"
                    height="14"
                    rx="2"
                    stroke="rgb(110, 107, 134)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M16 17v2a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h2"
                    stroke="rgb(110, 107, 134)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </div>
            </div>

            {/* Description */}
            <p
              style={{
                margin: 0,
                fontSize: 14,
                lineHeight: "21px",
                color: "rgb(71, 81, 97)",
                height: 61,
                overflow: "hidden",
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
              height: 32,
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
                display: "flex",
                alignItems: "center",
              }}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
