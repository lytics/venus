"use client";

import { useState } from "react";

interface StarterCardProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export function StarterCard({
  title = "Kickstart Next.js",
  description = "Connect to Contentstack fast with the Next.js Kickstart.",
  buttonText = "Import",
}: StarterCardProps) {
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
          borderRadius: 10,
          minWidth: 255,
          maxWidth: 320,
          margin: 15,
          width: 320,
          minHeight: 210,
          cursor: "pointer",
          boxShadow: isHovered
            ? "rgba(34, 34, 34, 0.1) 0px 8px 20px"
            : "none",
          transition: "box-shadow 0.1s ease-in-out",
        }}
      >
        {/* Cover */}
        <div
          style={{
            width: 318,
            height: 160,
            backgroundColor: "rgb(221, 227, 238)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: 160,
              background:
                "linear-gradient(135deg, rgb(221, 227, 238) 0%, rgb(200, 210, 225) 100%)",
            }}
          />
        </div>

        {/* Body */}
        <div
          style={{
            padding: "16px 16px 10px 16px",
            borderTop: "1px solid rgb(221, 227, 238)",
            backgroundColor: "white",
            position: "relative",
          }}
        >
          <h3
            style={{
              margin: 0,
              fontWeight: 600,
              fontSize: 16,
              lineHeight: "24px",
              marginTop: -5,
              marginBottom: 8,
              overflow: "hidden",
              color: "rgb(33, 33, 33)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            {title}
          </h3>
          <p
            style={{
              margin: 0,
              fontSize: 14,
              lineHeight: "21.7px",
              color: "rgb(71, 81, 97)",
              height: 44,
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
            display: "flex",
            justifyContent: "space-between",
            padding: "0 16px 16px 16px",
            backgroundColor: "white",
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
