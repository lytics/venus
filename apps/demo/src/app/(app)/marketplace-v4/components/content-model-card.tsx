"use client";

import { useState } from "react";

interface ContentModelCardProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export function ContentModelCard({
  title = "Hero Banner",
  description = "Defines the structure, fields, and schema to design the hero banner of your website.",
  buttonText = "Import",
}: ContentModelCardProps) {
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
          position: "relative",
          overflow: "hidden",
          border: "1px solid rgb(221, 227, 238)",
          borderRadius: 4,
          minWidth: 255,
          maxWidth: 320,
          margin: 15,
          width: 320,
          height: 216,
          cursor: "pointer",
          boxShadow: isHovered
            ? "rgba(34, 34, 34, 0.1) 0px 8px 20px"
            : "none",
          transition: "box-shadow 0.1s ease-in-out",
        }}
      >
        {/* Header image area */}
        <div
          style={{
            width: "100%",
            height: 160,
            borderRadius: "4px 4px 0 0",
          }}
        >
          <div
            style={{
              width: "100%",
              height: 159,
              borderRadius: "4px 4px 0 0",
              background:
                "linear-gradient(135deg, rgb(237, 241, 247) 0%, rgb(221, 227, 238) 100%)",
            }}
          />
        </div>

        {/* Body - positioned absolute to overlap */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            overflow: "hidden",
            padding: 16,
            borderTop: "1px solid rgb(221, 227, 238)",
            backgroundColor: "white",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {/* Heading */}
          <div style={{ marginTop: -4 }}>
            <h3
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
            </h3>
          </div>

          {/* Description */}
          <p
            style={{
              margin: 0,
              marginTop: 8,
              fontSize: 14,
              lineHeight: "21px",
              color: "rgb(71, 81, 97)",
              height: 67,
              overflow: "hidden",
              fontFamily: "Inter, sans-serif",
            }}
          >
            {description}
          </p>

          {/* Footer */}
          <div
            style={{
              width: 286,
              height: 32,
              marginTop: 8,
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
    </div>
  );
}
