"use client";

import React, { useState } from "react";

export function MarketplaceFooter() {
  const [buttonHovered, setButtonHovered] = useState(false);

  return (
    <div
      style={{
        margin: "15px 20px 15px 15px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Info bar */}
      <div
        style={{
          display: "flex",
          height: 60,
          marginBottom: 20,
          padding: "0 20px",
          borderBottom: "1px solid rgb(221,227,238)",
          borderTopLeftRadius: 4,
          background: "rgb(245,253,255)",
          position: "relative",
        }}
      >
        {/* Left border accent */}
        <div
          style={{
            width: 4,
            marginLeft: -20,
            borderTopLeftRadius: 4,
            background: "rgb(46,170,220)",
            alignSelf: "stretch",
          }}
        />

        {/* Center content */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: 15,
            padding: "18px 0",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            {/* Text */}
            <div
              style={{
                width: "85%",
                fontSize: 13,
                lineHeight: "20.144px",
                color: "rgb(33,33,33)",
              }}
            >
              Marketplace lists all your favorite apps and starters that are
              publicly available for use. If you can&apos;t find what
              you&apos;re looking for, you can send us a request mentioning what
              you&apos;re looking for by clicking on the button below.
            </div>

            {/* Button */}
            <button
              type="button"
              onMouseEnter={() => setButtonHovered(true)}
              onMouseLeave={() => setButtonHovered(false)}
              style={{
                background: "rgb(249,248,255)",
                color: buttonHovered ? "rgb(93,80,190)" : "rgb(108,92,231)",
                fontSize: 14,
                fontWeight: 600,
                borderRadius: 4,
                border: buttonHovered
                  ? "1px solid rgb(93,80,190)"
                  : "1px solid rgb(108,92,231)",
                height: 32,
                padding: "5px 16px",
                marginTop: 4,
                cursor: "pointer",
                whiteSpace: "nowrap",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Submit Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
