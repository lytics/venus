"use client"

/**
 * Recipes Page - Built from vacuum capture: page_1770163233886_xb8yzu
 * Zone: cap_1770163349784_ujpseq (section - CardList__grid)
 *
 * Styles extracted using capture_get_styles_for_classes tool.
 */

import { RecipeCard } from "../components/recipe-card"

// Sample recipe data based on production marketplace
const RECIPES = [
  {
    id: "1",
    title: "Personalize your website to show personalized offers",
    description: "Customize your website based on location and past behavior to show personalized offers. Craft tailored experiences that...",
    avatars: [
      { src: "https://images.contentstack.io/v3/assets/bltc5a09bf374882538/blt1a2f2864eca76e52/64ba8b7a86b99c00128a5f02/Personalize.svg", alt: "Personalize" },
      { src: "https://images.contentstack.io/v3/assets/bltc5a09bf374882538/blt3c6c9af7b800bef1/662a04ce1ad5370c16e39131/Taxonomy.svg", alt: "Taxonomy" },
    ],
  },
  {
    id: "2",
    title: "Post-purchase customer engagement",
    description: "Engage customers after purchase with personalized follow-ups and recommendations based on their buying history.",
    avatars: [
      { src: "https://images.contentstack.io/v3/assets/bltc5a09bf374882538/blt1a2f2864eca76e52/64ba8b7a86b99c00128a5f02/Personalize.svg", alt: "Personalize" },
      { src: "https://images.contentstack.io/v3/assets/bltc5a09bf374882538/blt3c6c9af7b800bef1/662a04ce1ad5370c16e39131/Taxonomy.svg", alt: "Taxonomy" },
    ],
  },
  {
    id: "3",
    title: "A/B test your website content",
    description: "Run experiments on your website content to optimize conversion rates and user engagement through data-driven decisions.",
    avatars: [
      { src: "https://images.contentstack.io/v3/assets/bltc5a09bf374882538/blt1a2f2864eca76e52/64ba8b7a86b99c00128a5f02/Personalize.svg", alt: "Personalize" },
    ],
  },
  {
    id: "4",
    title: "Dynamic content localization",
    description: "Automatically localize content based on user location and preferences for a seamless multilingual experience.",
    avatars: [
      { src: "https://images.contentstack.io/v3/assets/bltc5a09bf374882538/blt3c6c9af7b800bef1/662a04ce1ad5370c16e39131/Taxonomy.svg", alt: "Taxonomy" },
      { src: "https://images.contentstack.io/v3/assets/bltc5a09bf374882538/blt1a2f2864eca76e52/64ba8b7a86b99c00128a5f02/Personalize.svg", alt: "Personalize" },
    ],
  },
  {
    id: "5",
    title: "Automated content scheduling",
    description: "Schedule content publishing based on audience time zones and peak engagement periods for maximum reach.",
    avatars: [
      { src: "https://images.contentstack.io/v3/assets/bltc5a09bf374882538/blt1a2f2864eca76e52/64ba8b7a86b99c00128a5f02/Personalize.svg", alt: "Personalize" },
    ],
  },
  {
    id: "6",
    title: "Customer journey optimization",
    description: "Map and optimize customer journeys with personalized touchpoints at every stage of the buying process.",
    avatars: [
      { src: "https://images.contentstack.io/v3/assets/bltc5a09bf374882538/blt1a2f2864eca76e52/64ba8b7a86b99c00128a5f02/Personalize.svg", alt: "Personalize" },
      { src: "https://images.contentstack.io/v3/assets/bltc5a09bf374882538/blt3c6c9af7b800bef1/662a04ce1ad5370c16e39131/Taxonomy.svg", alt: "Taxonomy" },
    ],
  },
]

function PlusIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3.25a.75.75 0 01.75.75v11.25H28a.75.75 0 010 1.5H16.75V28a.75.75 0 01-1.5 0V16.75H4a.75.75 0 010-1.5h11.25V4a.75.75 0 01.75-.75z"
        fill="currentColor"
      />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M14.5 4.75c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75-4.365-9.75-9.75-9.75zM3.25 14.5c0-6.213 5.037-11.25 11.25-11.25S25.75 8.287 25.75 14.5 20.713 25.75 14.5 25.75 3.25 20.713 3.25 14.5z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M21.395 21.395a.75.75 0 011.06 0l6.075 6.075a.75.75 0 11-1.06 1.06l-6.075-6.075a.75.75 0 010-1.06z" fill="currentColor" />
    </svg>
  )
}

export default function RecipesPage() {
  return (
    <div className="flex flex-col h-full">
      {/* Content Header - from cap_1770163311775_odrg78 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          height: 90,
          padding: '0 20px 0 10px',
          borderTop: '1px solid rgb(221, 227, 238)',
          borderBottom: '1px solid rgb(221, 227, 238)',
          borderLeft: '1px solid rgb(221, 227, 238)',
          backgroundColor: 'rgb(247, 249, 252)',
          flexShrink: 0,
        }}
      >
        {/* Hamburger placeholder */}
        <div style={{ width: 24, height: 24, marginRight: 10 }} />

        {/* Page Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: 32 }}>
          {/* Title */}
          <div
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: 'rgb(34, 34, 34)',
              lineHeight: '30px',
            }}
          >
            Recipes
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                height: 32,
                minHeight: 32,
                maxHeight: 32,
                padding: '5px 16px',
                border: '1px solid transparent',
                borderRadius: 4,
                backgroundColor: 'rgb(108, 92, 231)',
                color: 'rgb(255, 255, 255)',
                fontSize: 14,
                fontWeight: 600,
                lineHeight: '14px',
                cursor: 'pointer',
                transition: 'background-color 0.15s ease-in-out',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                Create Recipe
                <PlusIcon />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div
        style={{
          flex: 1,
          overflow: 'auto',
          backgroundColor: 'rgb(255, 255, 255)',
          borderLeft: '1px solid rgb(221, 227, 238)',
        }}
      >
        {/* Search Bar - MKT__search from cap_1770163331175_wtm641 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            height: 60,
            padding: 12,
            borderBottom: '1px solid rgb(221, 227, 238)',
          }}
        >
          {/* Search Search__v2 Search__v2--primary */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            {/* Search-input-show */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 382,
                height: 40,
                padding: '8px 16px',
                border: '1px solid rgb(221, 227, 238)',
                borderRadius: 4,
                backgroundColor: 'rgb(255, 255, 255)',
              }}
            >
              <input
                type="text"
                placeholder="Search in Recipes"
                style={{
                  width: '100%',
                  height: 22,
                  padding: 0,
                  border: 'none',
                  outline: 'none',
                  color: 'rgb(33, 33, 33)',
                  fontSize: 16,
                  lineHeight: '24px',
                  letterSpacing: '0.16px',
                  fontFamily: 'Inter, sans-serif',
                }}
              />
            </div>

            {/* Search Button */}
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                height: 40,
                minHeight: 40,
                maxHeight: 40,
                padding: '8px 16px',
                border: '1px solid transparent',
                borderRadius: 4,
                backgroundColor: 'rgb(108, 92, 231)',
                color: 'rgb(255, 255, 255)',
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: '0.16px',
                cursor: 'pointer',
                transition: 'background-color 0.15s ease-in-out',
              }}
            >
              <SearchIcon />
              <span>Search</span>
            </button>
          </div>
        </div>

        {/* Card Grid - from capture infinite-scroll-component CardList__grid */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'stretch',
            alignContent: 'stretch',
            padding: 15,
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {RECIPES.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  )
}
