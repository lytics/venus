"use client";

import { useState } from "react";

const COLLECTION_ITEMS = ["Apps", "Starters", "Content Models", "Recipes"];

const CATEGORY_ITEMS = [
  "A/B Testing",
  "Analytics",
  "Asset Management",
  "Automate",
  "Commerce",
  "Content Modeling",
  "DAM",
  "Data Integration",
  "DevOps",
  "eCommerce",
  "Email",
  "Forms",
  "Headless CMS",
  "Localization",
  "Marketing",
  "Monitoring",
  "Personalization",
  "Preview",
  "Publishing",
  "Search",
  "Security",
  "SEO",
  "Translation",
  "Utility",
];

function ChevronDownIcon() {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.41 0.59L6 5.17L10.59 0.59L12 2L6 8L0 2L1.41 0.59Z"
        fill="rgb(71,81,97)"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.4351 10.0629H10.7124L10.4563 9.81589C11.3838 8.73289 11.8925 7.36589 11.8925 5.94625C11.8925 2.66209 9.23042 0 5.94625 0C2.66209 0 0 2.66209 0 5.94625C0 9.23042 2.66209 11.8925 5.94625 11.8925C7.36589 11.8925 8.73289 11.3838 9.81589 10.4563L10.0629 10.7124V11.4351L14.6369 16L16 14.6369L11.4351 10.0629ZM5.94625 10.0629C3.66838 10.0629 1.82962 8.22413 1.82962 5.94625C1.82962 3.66838 3.66838 1.82962 5.94625 1.82962C8.22413 1.82962 10.0629 3.66838 10.0629 5.94625C10.0629 8.22413 8.22413 10.0629 5.94625 10.0629Z"
        fill="rgb(153,163,176)"
      />
    </svg>
  );
}

export default function MarketplaceSidebar() {
  const [activeCollection, setActiveCollection] = useState("All Collections");
  const [checkedCategories, setCheckedCategories] = useState<Set<string>>(
    new Set()
  );
  const [categorySearch, setCategorySearch] = useState("");

  const toggleCategory = (name: string) => {
    setCheckedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(name)) {
        next.delete(name);
      } else {
        next.add(name);
      }
      return next;
    });
  };

  const filteredCategories = CATEGORY_ITEMS.filter((cat) =>
    cat.toLowerCase().includes(categorySearch.toLowerCase())
  );

  return (
    <div
      style={{
        width: 240,
        minWidth: 240,
        height: "100%",
        backgroundColor: "rgb(247, 249, 252)",
        borderRight: "1px solid rgb(221, 227, 238)",
        overflowY: "auto",
        fontFamily: "Inter, sans-serif",
        WebkitFontSmoothing: "auto",
        boxSizing: "border-box",
      }}
    >
      {/* Collections Section */}
      <div>
        {/* Collections Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 10px",
            height: 56,
            cursor: "pointer",
          }}
        >
          <span
            style={{
              fontSize: 14,
              color: "rgb(71, 81, 97)",
              fontWeight: 400,
            }}
          >
            Collections
          </span>
          <ChevronDownIcon />
        </div>

        {/* All Collections - Active */}
        <div
          style={{
            width: 209,
            height: 40,
            margin: "5px 0",
            display: "flex",
            alignItems: "center",
            borderLeft:
              activeCollection === "All Collections"
                ? "2px solid rgb(108, 92, 231)"
                : "2px solid transparent",
            cursor: "pointer",
            boxSizing: "border-box",
          }}
          onClick={() => setActiveCollection("All Collections")}
        >
          <div
            style={{
              padding: "0 12px",
              fontSize: 14,
              color:
                activeCollection === "All Collections"
                  ? "rgb(108, 92, 231)"
                  : "rgb(71, 81, 97)",
              fontWeight: 400,
            }}
          >
            All Collections
          </div>
        </div>

        {/* Collection Items */}
        {COLLECTION_ITEMS.map((item) => (
          <div
            key={item}
            style={{
              width: 209,
              height: 40,
              margin: "5px 0",
              display: "flex",
              alignItems: "center",
              borderLeft:
                activeCollection === item
                  ? "2px solid rgb(108, 92, 231)"
                  : "2px solid transparent",
              cursor: "pointer",
              boxSizing: "border-box",
            }}
            onClick={() => setActiveCollection(item)}
          >
            <div
              style={{
                padding: "0 12px",
                fontSize: 14,
                color:
                  activeCollection === item
                    ? "rgb(108, 92, 231)"
                    : "rgb(71, 81, 97)",
                fontWeight: 400,
              }}
            >
              {item}
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div
        style={{
          height: 1,
          backgroundColor: "rgb(221, 227, 238)",
          margin: "16px 0",
        }}
      />

      {/* Categories Section */}
      <div>
        {/* Categories Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 10px",
            height: 56,
            cursor: "pointer",
          }}
        >
          <span
            style={{
              fontSize: 14,
              color: "rgb(71, 81, 97)",
              fontWeight: 400,
            }}
          >
            categories
          </span>
          <ChevronDownIcon />
        </div>

        {/* Search Input */}
        <div
          style={{
            padding: "0 10px 15px 10px",
          }}
        >
          <div
            style={{
              position: "relative",
              width: 189,
              height: 40,
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
                display: "flex",
                alignItems: "center",
                pointerEvents: "none",
              }}
            >
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search"
              value={categorySearch}
              onChange={(e) => setCategorySearch(e.target.value)}
              style={{
                width: "100%",
                height: "100%",
                boxSizing: "border-box",
                border: "1px solid rgb(221, 227, 238)",
                borderRadius: 4,
                padding: "0 10px 0 34px",
                fontSize: 14,
                fontFamily: "Inter, sans-serif",
                color: "rgb(71, 81, 97)",
                backgroundColor: "rgb(255, 255, 255)",
                outline: "none",
              }}
            />
          </div>
        </div>

        {/* Category Checkboxes */}
        <div style={{ padding: "0 10px" }}>
          {filteredCategories.map((category) => (
            <label
              key={category}
              style={{
                display: "flex",
                alignItems: "center",
                width: 209,
                height: 24,
                marginBottom: 10,
                cursor: "pointer",
                fontSize: 14,
                fontFamily: "Inter, sans-serif",
                color: "rgb(71, 81, 97)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  marginRight: 8,
                  flexShrink: 0,
                }}
              >
                <input
                  type="checkbox"
                  checked={checkedCategories.has(category)}
                  onChange={() => toggleCategory(category)}
                  style={{
                    position: "absolute",
                    opacity: 0,
                    width: 13,
                    height: 13,
                    margin: 0,
                    cursor: "pointer",
                  }}
                />
                <span
                  style={{
                    display: "block",
                    width: 16,
                    height: 16,
                    border: checkedCategories.has(category)
                      ? "1px solid rgb(108, 92, 231)"
                      : "1px solid rgb(181, 189, 202)",
                    borderRadius: 3,
                    backgroundColor: checkedCategories.has(category)
                      ? "rgb(108, 92, 231)"
                      : "rgb(255, 255, 255)",
                    boxSizing: "border-box",
                    position: "relative",
                  }}
                >
                  {checkedCategories.has(category) && (
                    <svg
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <path
                        d="M3.5 6.1L1.4 4L0.7 4.7L3.5 7.5L9.5 1.5L8.8 0.8L3.5 6.1Z"
                        fill="white"
                      />
                    </svg>
                  )}
                </span>
              </div>
              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
