"use client";

import React from "react";

export function MarketplaceBanner() {
  return (
    <div
      style={{
        width: "100%",
        height: 372,
        marginBottom: 15,
        borderBottom: "1px solid rgb(237,241,247)",
        background:
          "linear-gradient(135deg, rgb(247,249,252) 0%, rgb(237,241,247) 100%)",
        fontFamily: "Inter, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ marginTop: 80, marginLeft: 64, width: 600 }}>
        <h2
          style={{
            fontSize: 34,
            fontWeight: 600,
            lineHeight: "42.5px",
            color: "rgb(33,33,33)",
            letterSpacing: "-0.00646px",
            margin: 0,
          }}
        >
          Contentstack Marketplace:
          <br />
          Where composable happens
        </h2>

        <div
          style={{
            marginTop: 12,
            color: "rgb(71,81,97)",
            lineHeight: "24px",
          }}
        >
          From powerful apps to quick-start templates and automation recipes,
          accelerate your project's journey from concept to launch.
        </div>

        <div
          style={{
            marginTop: 12,
            display: "flex",
            alignItems: "center",
            fontSize: 12,
            color: "rgb(110,107,134)",
          }}
        >
          <span>New to Marketplace? Use </span>
          <a
            href="#"
            style={{
              color: "rgb(108,92,231)",
              display: "inline-block",
              padding: "0 4px",
              textDecoration: "none",
            }}
          >
            these
          </a>
          <span> guides to get started.</span>
        </div>
      </div>
    </div>
  );
}
